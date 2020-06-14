package obcy

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/gorilla/websocket"
)

// Client is the 6obcy client
type Client struct {
	// no name yet lol
	SID  string
	Hash string

	// public channels
	Message  chan string
	IsTyping chan bool

	// private channels
	recv chan *RawMessage
	send chan *RawMessage
}

// NewClient creates new Client
func NewClient() (*Client, error) {
	return &Client{
		Message:  make(chan string, 100),
		IsTyping: make(chan bool, 100),

		recv: make(chan *RawMessage, 100),
		send: make(chan *RawMessage, 100),
	}, nil
}

// Connect connects to the client with websockets and handles sending and receiving messages
func (c *Client) Connect(ctx context.Context) {
	// stop chan for ws
	stopCh := make(chan bool)

	ws := &WS{}
	go ws.Connect(c.send, c.recv, stopCh)

	for {
		select {
		case m := <-c.recv:
			c.processMessage(m)
		case <-ctx.Done():
			stopCh <- true
			<-stopCh
			return
		}
	}
}

func (c *Client) processMessage(m *RawMessage) *message {
	fmt.Printf("%s\n", m.Payload)

	if c.SID == "" {
		// check for setup message
		prefix, setupMsg := RawToTypeAndJSON(m.Payload)
		if prefix == setupMessagePrefix {
			sm := &setupMessage{}
			err := json.Unmarshal([]byte(setupMsg), sm)
			if err != nil {
				log.Fatalln("Failed to parse setup message", err)
			}
			c.SID = sm.SID

			return nil
		}
	}

	gm := PayloadToGeneric(m.Payload)
	switch v := gm.EventData.(type) {
	case *clientAcceptedMessage:
		c.Hash = v.Hash
		c.sendClientInfo()
		c.sendOwack()
	case *clientInfoMessage:
		fmt.Println("ClientInfoMessage")
	}

	return nil
}

func (c *Client) sendMessage(m message) error {
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
	ci := NewClientInfoMessage(c.Hash, false)
	c.sendMessage(ci)
}

func (c *Client) sendOwack() {
	owack := &owackMessage{}
	c.sendMessage(owack)
}
