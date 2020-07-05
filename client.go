package obcy

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/gorilla/websocket"
)

// Client is the 6obcy client
type Client struct {
	SID       string
	Hash      string
	Connected bool

	ws     *WS
	recv   chan *RawMessage
	send   chan *RawMessage
	stopWS chan bool
	conn   chan bool
	subs   map[string]chan *message
	debug  bool
}

// NewClient creates new Client
func NewClient(debug bool) (*Client, error) {
	return &Client{
		recv:      make(chan *RawMessage, 100),
		send:      make(chan *RawMessage),
		stopWS:    make(chan bool),
		conn:      make(chan bool),
		Connected: false,
		subs:      make(map[string]chan *message),
		debug:     debug,
	}, nil
}

// Connect connects to the client with websockets and handles sending and receiving messages
func (c *Client) Connect() error {
	c.ws = &WS{Debug: c.debug}
	go c.ws.Connect(c.send, c.recv, c.stopWS)
	go func() {
		for {
			select {
			case rm, open := <-c.recv:
				if open {
					m := c.processMessage(rm)
					if m != nil {
						c.distributeMessage(m)
					}
				} else {
					return
				}
			}
		}
	}()

	select {
	case <-c.conn:
		return nil
	case <-time.After(3 * time.Second):
		return fmt.Errorf("waited 3 seconds to connect")
	}
}

// Disconnect closes WS connection, waits for confirmation that it's been closed
// and then closes all channels used to communicate with websocket.
func (c *Client) Disconnect() {
	c.stopWS <- true
	<-c.stopWS
	close(c.stopWS)
	close(c.recv)
	close(c.send)
}

// Sub subscribes to recv messages
func (c *Client) Sub(uuid string, ch chan *message) {
	c.subs[uuid] = ch
}

// Unsub unsubscribes from recv messages
func (c *Client) Unsub(uuid string) {
	ch, ok := c.subs[uuid]
	if ok {
		// if exists, close chan and remove from map
		close(ch)
		delete(c.subs, uuid)
	}
}

func (c *Client) processMessage(rm *RawMessage) *message {
	if c.SID == "" {
		// check for setup message
		prefix, setupMsg := rawToTypeAndJSON(rm.Payload)
		if prefix == setup {
			sm := &setupMessage{}
			err := json.Unmarshal([]byte(setupMsg), sm)
			if err != nil {
				log.Fatalln("Failed to parse setup message", err)
			}
			c.SID = sm.SID

			return nil
		}
	}

	m, err := payloadToMessage(rm.Payload)
	if err != nil {
		log.Fatalln("Failed to parse message from payload.", err)
	}

	switch en := m.EventName; en {
	case clientAccepted:
		v := m.EventData.(*clientAcceptedED)
		c.Hash = v.Hash
		c.sendClientInfo()
		c.sendOwack()
		c.conn <- true
	case usersCount:
		v := m.EventData.(usersCountED)
		fmt.Println("Count:", v)
	}

	return m
}

func (c *Client) distributeMessage(m *message) {
	for _, ch := range c.subs {
		ch <- m
	}
}

func (c *Client) sendMessage(m *message) error {
	b, err := m.Bytes()
	if err != nil {
		return err
	}

	c.send <- &RawMessage{
		Type:    websocket.TextMessage,
		Payload: b,
	}

	return nil
}

func (c *Client) sendClientInfo() {
	ci := newClientInfoED(c.Hash, false)
	c.sendMessage(newMessage(event, clientInfo, ci))
}

func (c *Client) sendOwack() {
	c.sendMessage(newMessage(event, owack, nil))
}
