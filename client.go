package obcy

type Client struct {
	ws *WS
}

func NewClient() (*Client, error) {
	c := &Client{}
	wsc, err := NewWS()
	if err != nil {
		return nil, err
	}
	c.ws = wsc

	return c, nil
}
