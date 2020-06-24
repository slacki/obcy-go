package obcy

// Conversation is a conversation with a stranger
type Conversation struct {
	client *Client
}

// NewConversation returns new Conversation object
func NewConversation(c *Client) (*Conversation, error) {
	return &Conversation{
		client: c,
	}, nil
}

func (c *Conversation) Begin() {
	// c.client.send/
}
