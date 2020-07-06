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
	chatKey string
	chatID  int
	flagged bool
	ceid    int
	idn     int

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
		idn:    -1,
	}, nil
}

func (c *Conversation) getCEID() int {
	c.ceid++
	return c.ceid
}

func (c *Conversation) getIDN() int {
	c.idn++
	return c.idn
}

func (c *Conversation) resetCounters() {
	c.ceid = 0
	c.idn = -1
}

// Begin starts a conversation.
// It's not safe to run Begin on the same client concurrently. Might fix someday.
func (c *Conversation) Begin() error {
	c.recv = make(chan *message)
	c.client.Sub(c.id, c.recv)

	c.resetCounters()
	m := newMessage(event, initChat, newInitChatED())
	m.CEID = c.getCEID()
	c.client.sendMessage(m)

	// wait for talk_s and send _begacked
	select {
	case m, open := <-c.recv:
		if !open {
			return fmt.Errorf("conversation recv chan closed unexpectedly")
		}
		if m.EventName == chatStarted {
			// fill data
			v := m.EventData.(*chatStartedED)
			c.chatKey = v.ChatKey
			c.chatID = v.ChatID
			c.flagged = v.Flagged

			// send ack
			m = newMessage(event, chatStartedAck, &cKeyED{CKey: c.chatKey})
			m.CEID = c.getCEID()
			c.client.sendMessage(m)
		}
	case <-time.After(10 * time.Second):
		return fmt.Errorf("waited 3 seconds for talk_s")
	}

	time.Sleep(time.Second)

	// start read goroutine
	go func() {
		for {
			select {
			case m, open := <-c.recv:
				if open {
					c.processMessage(m)
				} else {
					fmt.Println("conversation recv chan closed")
					return
				}
			}
		}
	}()

	return nil
}

// End ends a conversation
func (c *Conversation) End(disconnect bool) {
	if disconnect {
		c.client.sendMessage(&message{
			Prefix:    event,
			EventName: sendDisconnect,
			EventData: &cKeyED{
				CKey: c.chatKey,
			},
			CEID: c.getCEID(),
		})
	}
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

// SendMessage sends a message to a stranger
func (c *Conversation) SendMessage(m string) error {
	return c.client.sendMessage(&message{
		Prefix:    event,
		EventName: sendMessage,
		EventData: &sendMessageED{
			CKey: c.chatKey,
			Msg:  m,
			IDN:  c.getIDN(),
		},
	})
}

// SendTyping sends change of typing state to a stranger
func (c *Conversation) SendTyping(t bool) error {
	return c.client.sendMessage(&message{
		Prefix:    event,
		EventName: sendTyping,
		EventData: &cKeyED{
			CKey: c.chatKey,
		},
		Val: t,
	})
}

func (c *Conversation) processMessage(m *message) {
	switch en := m.EventName; en {
	case strangerMessage:
		v := m.EventData.(*strangerMessageED)
		if v.CID == c.chatID {
			for _, s := range c.messagesSubs {
				s <- v.Msg
			}
		}
	case strangerDisconnected:
		v := m.EventData.(strangerDisconnectedED)
		if int(v) == c.chatID {
			for _, s := range c.disconnectedSubs {
				s <- true
			}
		}
	case strangerTyping:
		// no way to check which stranger is typing
		// the message doesn't have any ID...
		v := m.EventData.(bool)
		for _, s := range c.typingSubs {
			s <- v
		}
	}
}
