package obcy

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
)

const addrDataURL = "https://6obcy.org/ajax/addressData"
const wsURLSuffix = "/6eio/?EIO=3&transport=websocket"

// WS represents websocket connection to 6obcy's servers
type WS struct {
	Debug bool
}

// RawMessage is a raw websocket message with type and payload
type RawMessage struct {
	Type    int
	Payload []byte
}

// addressData is a JSON response from /ajax/addressData.
// It contains data used to establish a websocket connection.
type addressData struct {
	Host string `json:"host"`
	Port string `json:"port"`
	From string `json:"from"`
	S6   string `json:"s6"`
}

// Connect opens websocket connection.
// It takes send and receive channels as arguments and will
// exchange informations via those channels.
// Should be called asynchronously.
func (ws *WS) Connect(send, receive chan *RawMessage, stop chan bool) error {
	url, err := ws.getWebsocketURL(false)
	if err != nil {
		return err
	}
	log.Println("ws Connect:", url)

	conn, _, err := websocket.DefaultDialer.Dial(url, http.Header{
		// Origin is important, it won't connect otherwise
		"Origin": {"https://6obcy.org"},
		// User-Agent can be ommited, but we want to look legit
		"User-Agent": {"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"},
	})
	if err != nil {
		return err
	}
	defer conn.Close()

	doneCh := make(chan bool)
	setupCh := make(chan *setupMessage)

	// start recv goroutine
	go func() {
		initialized := false
		defer close(doneCh)
		for {
			msgType, msgBytes, err := conn.ReadMessage()
			if err != nil {
				log.Println("Failed to read:", err)
				return
			}

			if !initialized {
				prefix, msg := rawToTypeAndJSON(msgBytes)
				if prefix == setup {
					sm := &setupMessage{}
					err := json.Unmarshal([]byte(msg), sm)
					if err != nil {
						log.Fatalf("Failed to parse setup message %s %s\n", err, msg)
						return
					}
					setupCh <- sm
					initialized = true
				}
			}

			if ws.Debug {
				fmt.Println("ws ->:", string(msgBytes))
			}

			receive <- &RawMessage{
				Type:    msgType,
				Payload: msgBytes,
			}
		}
	}()

	// start send goroutine
	go func() {
		for {
			rm := <-send

			if ws.Debug {
				fmt.Println("ws <-:", string(rm.Payload))
			}

			err := conn.WriteMessage(rm.Type, rm.Payload)
			if err != nil {
				log.Println("Failed to write:", err)
			}
		}
	}()

	var setupMsg *setupMessage

	select {
	case sm := <-setupCh:
		setupMsg = sm
	case <-time.After(5 * time.Second):
		log.Println("Waited 5 seconds for setup message")
	}

	// create a ticker and take care of sending pings
	ticker := time.NewTicker(time.Millisecond * time.Duration(setupMsg.PingInterval))
	defer ticker.Stop()

	// start main ws goroutine
	for {
		select {
		case <-ticker.C:
			err := conn.WriteMessage(websocket.TextMessage, []byte("3"))
			if err != nil {
				log.Println("Failed to ping", err)
			}
		case <-stop:
			err := conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(websocket.CloseNormalClosure, ""))
			if err != nil {
				log.Println("write close:", err)
			}
			select {
			case <-doneCh:
			case <-time.After(time.Second):
			}
			stop <- true
			return nil
		}
	}
}

// getWebsocketURL asks server where to connect and prepares an URL.
func (ws *WS) getWebsocketURL(secure bool) (string, error) {
	r, err := http.Get(addrDataURL)
	if err != nil {
		return "", err
	}
	defer r.Body.Close()

	addrData := &addressData{}
	err = json.NewDecoder(r.Body).Decode(addrData)

	url := addrData.Host + ":" + addrData.Port + wsURLSuffix
	if secure {
		url = "wss://" + url
	} else {
		url = "ws://" + url
	}

	return url, nil
}
