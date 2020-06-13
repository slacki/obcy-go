package obcy

import (
	"context"
	"fmt"
)

// Client is the 6obcy client
type Client struct {
	Message  chan string
	IsTyping chan bool

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
			fmt.Println(string(m.Message))
			c.processMessage(m)
		case <-ctx.Done():
			stopCh <- true
			<-stopCh
			return
		}
	}
}

func (c *Client) processMessage(m *RawMessage) *message {
	return nil
}
