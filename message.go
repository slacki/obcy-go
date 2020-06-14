package obcy

import (
	"encoding/json"
	"fmt"
	"log"
	"strconv"
	"unicode/utf8"
)

const (
	setupMessagePrefix = 0
	pingMessagePrefix  = 2
	pongMessagePrefix  = 3
	eventMessagePrefix = 4
)

const (
	clientAcceptedMessageIdentifier = "cn_acc"
	clientInfoMessageIdentifier     = "_cinfo"
	owackMessageIdentifier          = "_owack"
)

type setupMessage struct {
	// 0{"sid":"nRz2vmCnQ0ANJJ5","upgrades":[],"pingInterval":25000,"pingTimeout":40000}
	SID          string   `json:"sid"`
	Upgrades     []string `json:"upgrades"`
	PingInterval int      `json:"pingInterval"`
	PingTimeout  int      `json:"pingTimeout"`
}

type message interface {
	Bytes() ([]byte, error)
	Prefix() int
	EventName() string
}

type genericMessage struct {
	Prefix    int
	EventName string  `json:"ev_name"`
	EventData message `json:"ev_data"`
}

func (gm *genericMessage) Bytes() ([]byte, error) {
	b, err := json.Marshal(gm)
	if err != nil {
		return nil, err
	}

	return []byte(fmt.Sprintf("%d%s", gm.Prefix, b)), nil
}

func PayloadToGeneric(b []byte) *genericMessage {
	prefix, jsonStr := RawToTypeAndJSON(b)
	jsonBytes := []byte(jsonStr)

	intermediate := &struct {
		EventName string      `json:"ev_name"`
		EventData interface{} `json:"ev_data"`
	}{}
	err := json.Unmarshal(jsonBytes, intermediate)

	evDataBytes, err := json.Marshal(intermediate.EventData)
	if err != nil {
		log.Fatalln("Failed to re-marshall ev_data", err)
	}

	var msg message
	switch intermediate.EventName {
	case clientAcceptedMessageIdentifier:
		msg = &clientAcceptedMessage{}
		err = json.Unmarshal(evDataBytes, msg)
	case clientInfoMessageIdentifier:
		msg = &clientInfoMessage{}
		err = json.Unmarshal(evDataBytes, msg)
	default:
		log.Println("Couldn't find message for ev_name", intermediate.EventName)
	}
	if err != nil {
		log.Fatalln("Failed to parse a message", err)
	}

	return &genericMessage{
		Prefix:    prefix,
		EventData: msg,
		EventName: intermediate.EventName,
	}
}

// RawToTypeAndJSON takes raw payload and returns message type and json string
func RawToTypeAndJSON(b []byte) (int, string) {
	s := string(b)
	_, i := utf8.DecodeRuneInString(s)
	prefix, err := strconv.Atoi(s[:i])
	if err != nil {
		log.Fatalln("Failed to parse message prefix", err)
	}

	return prefix, s[i:]
}

// 4
// {
//     "ev_name": "_cinfo",
//     "ev_data": {
//         "cvdate": "2017-08-01",
//         "mobile": false,
//         "cver": "v2.5",
//         "adf": "ajaxPHP",
//         "hash": "37#4#253#91",
//         "testdata": {
//             "ckey": 0,
//             "recevsent": false
//         }
//     }
// }
type clientInfoMessage struct {
	CVDate        string `json:"cvdate"`
	Mobile        bool   `json:"mobile"`
	ClientVersion string `json:"cver"`
	ADF           string `json:"adf"`
	Hash          string `json:"hash"`
	TestData      clientInfoMessageTestData
}

type clientInfoMessageTestData struct {
	CKey      int  `json:"ckey"`
	Recevsent bool `json:"recevsent"`
}

func NewClientInfoMessage(hash string, mobile bool) *clientInfoMessage {
	return &clientInfoMessage{
		CVDate:        "2017-08-01",
		Mobile:        mobile,
		ClientVersion: "v2.5",
		ADF:           "ajaxPHP",
		Hash:          hash,
		TestData: clientInfoMessageTestData{
			CKey:      0,
			Recevsent: false,
		},
	}
}

func (cim *clientInfoMessage) Bytes() ([]byte, error) {
	gm := &genericMessage{
		Prefix:    cim.Prefix(),
		EventName: cim.EventName(),
		EventData: cim,
	}

	b, err := gm.Bytes()
	if err != nil {
		return nil, err
	}

	return b, nil
}

func (cim *clientInfoMessage) Prefix() int {
	return 4
}

func (cim *clientInfoMessage) EventName() string {
	return clientInfoMessageIdentifier
}

// 4
// {
//     "ev_name": "cn_acc",
//     "ev_data": {
//         "conn_id": "VUfIn5CdzRvvOkG",
//         "hash": "37#4#253#91"
//     }
// }
type clientAcceptedMessage struct {
	ConnectionID string `json:"conn_id"`
	Hash         string `json:"hash"`
}

func (cam *clientAcceptedMessage) Bytes() ([]byte, error) {
	gm := &genericMessage{
		Prefix:    cam.Prefix(),
		EventName: cam.EventName(),
		EventData: cam,
	}

	b, err := gm.Bytes()
	if err != nil {
		return nil, err
	}

	return b, nil
}

func (cam *clientAcceptedMessage) Prefix() int {
	return 4
}

func (cam *clientAcceptedMessage) EventName() string {
	return clientAcceptedMessageIdentifier
}

// 4
// {"ev_name":"_owack"}
type owackMessage struct{}

func (om *owackMessage) Bytes() ([]byte, error) {
	gm := &genericMessage{
		Prefix:    om.Prefix(),
		EventName: om.EventName(),
		EventData: nil,
	}

	b, err := gm.Bytes()
	if err != nil {
		return nil, err
	}

	return b, nil
}

func (om *owackMessage) Prefix() int {
	return 4
}

func (om *owackMessage) EventName() string {
	return owackMessageIdentifier
}
