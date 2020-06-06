package obcy

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// {"host":"server.6obcy.pl","port":"7002","from":"ajaxPHP","s6":"tak"}
type addressData struct {
	Host string `json:"host"`
	Port string `json:"port"`
	From string `json:"from"`
	S6   string `json:"s6"`
}

const addrDataUrl = "https://6obcy.org/ajax/addressData"
const wsUrlSuffix = "/6eio/?EIO=3&transport=websocket"

type WS struct {
	conn *websocket.Conn
}

func NewWS() (*WS, error) {
	var ws = &WS{}
	err := ws.connect()
	if err != nil {
		return nil, err
	}
	return ws, nil
}

func (ws *WS) connect() error {
	r, err := http.Get(addrDataUrl)
	if err != nil {
		return err
	}
	defer r.Body.Close()

	addrData := &addressData{}
	err = json.NewDecoder(r.Body).Decode(addrData)

	url := "ws://" + addrData.Host + ":" + addrData.Port + wsUrlSuffix
	log.Println(">>> Connecting to", url)

	c, _, err := websocket.DefaultDialer.Dial(url, http.Header{
		"Origin":     {"https://6obcy.org"},
		"User-Agent": {"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"},
	})
	if err != nil {
		return err
	}

	ws.conn = c

	return nil
}
