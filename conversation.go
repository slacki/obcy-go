package obcy

import (
	"fmt"
	"time"

	"github.com/lithammer/shortuuid/v3"
)

// Conversation is a conversation with a stranger
type Conversation struct {
	client  *Client
	id      string
	recv    chan *message
	cKey    string
	flagged bool
	ceid    int

	messagesSubs     []chan string
	typingSubs       []chan bool
	disconnectedSubs []chan bool
}

// NewConversation returns new Conversation object
func NewConversation(c *Client) (*Conversation, error) {
	return &Conversation{
		client: c,
		id:     shortuuid.New(),
		ceid:   0,
	}, nil
}

func (c *Conversation) getCEID() int {
	c.ceid++
	return c.ceid
}

func (c *Conversation) setCEID(n int) {
	c.ceid = n
}

// Begin starts a conversation.
// It's not safe to run Begin on the same client concurrently. Might fix someday.
func (c *Conversation) Begin() error {
	c.recv = make(chan *message)
	c.setCEID(0)
	m := newMessage(event, initChat, newInitChatED())
	m.CEID = c.getCEID()
	c.client.sendMessage(m)

	// wait for talk_s and send _begacked
outer:
	for {
		select {
		case m, open := <-c.recv:
			if !open {
				return fmt.Errorf("conversation recv chan closed unexpectedly")
			}
			if m.EventName == chatStarted {
				// fill data
				v := m.EventData.(*chatStartedED)
				c.cKey = v.ChatKey
				c.flagged = v.Flagged

				// send ack
				m = newMessage(event, chatStartedAck, &cKeyED{CKey: c.cKey})
				m.CEID = c.getCEID()
				c.client.sendMessage(m)

				break outer
			}
		case <-time.After(3 * time.Second):
			return fmt.Errorf("waited 3 seconds for talk_s")
		}
	}

	// start read goroutine
	go func() {
		c.client.Sub(c.id, c.recv)
		defer c.client.Unsub(c.id)

		for {
			select {
			case m, open := <-c.recv:
				if open {
					fmt.Printf("%+v\n", m)
				} else {
					// this goroutine stops when the read channel is closed
					return
				}
			}
		}
	}()

	return nil
}

// End ends a conversation
func (c *Conversation) End() {
	c.client.Unsub(c.id)
}

// SubMessages subscribes channel to new messages
func (c *Conversation) SubMessages(ch chan string) {
	c.messagesSubs = append(c.messagesSubs, ch)
}

// SubDisconnected subscribes channel to stranger disconnecting events
func (c *Conversation) SubDisconnected(ch chan bool) {
	c.disconnectedSubs = append(c.disconnectedSubs, ch)
}

// SubTyping subscribes channel to typing events
func (c *Conversation) SubTyping(ch chan bool) {
	c.typingSubs = append(c.typingSubs, ch)
}
