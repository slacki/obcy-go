package obcy

import (
	"context"
)

type Client struct {
	Message  chan string
	IsTyping chan bool

	recv chan *RawMessage
	send chan *RawMessage
}

func NewClient() (*Client, error) {
	return &Client{
		Message:  make(chan string, 100),
		IsTyping: make(chan bool, 100),

		recv: make(chan *RawMessage, 100),
		send: make(chan *RawMessage, 100),
	}, nil
}

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

func (c *Client) processMessage(m *RawMessage) *Message {

}
