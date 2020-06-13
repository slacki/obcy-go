package obcy

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/gorilla/websocket"
)

const addrDataUrl = "https://6obcy.org/ajax/addressData"
const wsUrlSuffix = "/6eio/?EIO=3&transport=websocket"

// WS represents websocket connection to 6obcy's servers
type WS struct {
}

type RawMessage struct {
	Type    int
	Message []byte
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

	done := make(chan bool)
	setup := make(chan *setupMessage)

	// start recv goroutine
	go func() {
		initialized := false
		defer close(done)
		for {
			msgType, msgBytes, err := conn.ReadMessage()
			if err != nil {
				log.Println("Failed to read:", err)
				return
			}

			if !initialized {
				msgStr := string(msgBytes)
				if strings.HasPrefix(msgStr, "0") {
					msg := []byte(dropMessageType(msgStr))
					sm := &setupMessage{}
					err := json.Unmarshal(msg, sm)
					if err != nil {
						log.Println("Failed to parse setup message", err, msgStr)
						return
					}
					setup <- sm
					initialized = true
				}
			}

			receive <- &RawMessage{
				Type:    msgType,
				Message: msgBytes,
			}
		}
	}()

	// start send goroutine
	go func() {
		for {
			rm := <-send
			err := conn.WriteMessage(rm.Type, rm.Message)
			if err != nil {
				log.Println("Failed to write:", err)
			}
		}
	}()

	var setupMsg *setupMessage

	select {
	case sm := <-setup:
		setupMsg = sm
	case <-time.After(5 * time.Second):
		log.Println("Waited 5 seconds for setup message")
	}

	// create a ticker and take care of sending pings
	// for now it's hardcoded how often wa wanna do this
	ticker := time.NewTicker(time.Millisecond * time.Duration(setupMsg.PingInterval))
	defer ticker.Stop()

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
			case <-done:
			case <-time.After(time.Second):
			}
			stop <- true
			return nil
		}
	}
}

// getWebsocketURL asks server where to connect and prepares an URL.
func (ws *WS) getWebsocketURL(secure bool) (string, error) {
	r, err := http.Get(addrDataUrl)
	if err != nil {
		return "", err
	}
	defer r.Body.Close()

	addrData := &addressData{}
	err = json.NewDecoder(r.Body).Decode(addrData)

	url := addrData.Host + ":" + addrData.Port + wsUrlSuffix
	if secure {
		url = "wss://" + url
	} else {
		url = "ws://" + url
	}

	return url, nil
}
