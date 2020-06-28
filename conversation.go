package obcy

// Conversation is a conversation with a stranger
type Conversation struct {
	client *Client

	ceid int

	messagesSubs     []chan string
	typingSubs       []chan bool
	disconnectedSubs []chan bool
}

// NewConversation returns new Conversation object
func NewConversation(c *Client) (*Conversation, error) {
	return &Conversation{
		client: c,
		ceid:   0,
	}, nil
}

func (c *Conversation) getCEID() int {
	c.ceid++
	return c.ceid
}

// Begin starts a conversation
func (c *Conversation) Begin() {
	c.ceid = 0
	m := newMessage(event, initChat, newInitChatED(), c.getCEID())
	c.client.sendMessage(m)
}

// End ends a conversation
func (c *Conversation) End() {
	// end
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
