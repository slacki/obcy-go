package obcy

import (
	"encoding/json"
	"fmt"
	"log"

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
}

// NewClient creates new Client
func NewClient() (*Client, error) {
	return &Client{
		recv:      make(chan *RawMessage, 100),
		send:      make(chan *RawMessage, 100),
		stopWS:    make(chan bool),
		Connected: false,
	}, nil
}

// Connect connects to the client with websockets and handles sending and receiving messages
func (c *Client) Connect() {
	c.ws = &WS{}
	go c.ws.Connect(c.send, c.recv, c.stopWS)
	go func() {
		for {
			select {
			case m, open := <-c.recv:
				if open {
					c.processMessage(m)
				} else {
					return
				}
			}
		}
	}()
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

func (c *Client) processMessage(rm *RawMessage) *message {
	fmt.Println("processing message", string(rm.Payload))

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
	}

	return nil
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
