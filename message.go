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
	initChatMessageIdentifier       = "_sas"
	chatStartedMessageIdentifier    = "talk_s"
)

const (
	locationEntirePoland = iota
	locationPodlaskie
	locationDolnoslaskie
	locationPodkarpackie
	locationKujawskoPomorskie
	locationPomorskie
	locationLubelskie
	locationSlaskie
	locationLubuskie
	locationSwietokrzyskie
	locationLodzkie
	locationWarminskoMazurskie
	locationMalopolskie
	locationWielkopolskie
	locationMazowieckie
	locationZachodnioPomorskie
	locationOpolskie
	locationOutsidePolan
)

// 0
// {
//     "sid": "wbWZ23LsEktuCKQ",
//     "upgrades": [],
//     "pingInterval": 25000,
//     "pingTimeout": 40000
// }
type setupMessage struct {
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
	CEID      int     `json:"ceid,omitempty"`
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

	return gm.Bytes()
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

	return gm.Bytes()
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

	return gm.Bytes()
}

func (om *owackMessage) Prefix() int {
	return 4
}

func (om *owackMessage) EventName() string {
	return owackMessageIdentifier
}

// 4
// {
//     "ev_name": "_sas",
//     "ev_data": {
//         "channel": "main",
//         "myself": {
//             "sex": 0,
//             "loc": 0
//         },
//         "preferences": {
//             "sex": 0,
//             "loc": 0
//         }
//     },
//     "ceid": 1
// }
type initChatMessage struct {
	Channel     string                     `json:"channel"`
	Myself      initChatMessagePreferences `json:"myself"`
	Preferences initChatMessagePreferences `json:"preferences"`
}

type initChatMessagePreferences struct {
	Sex      int `json:"sex"`
	Location int `json:"location"`
}

func newInitChatMessage() *initChatMessage {
	pref := initChatMessagePreferences{
		Sex:      0,
		Location: locationEntirePoland,
	}
	return &initChatMessage{
		Channel:     "main",
		Myself:      pref,
		Preferences: pref,
	}
}

func (ic *initChatMessage) Bytes() ([]byte, error) {
	gm := &genericMessage{
		Prefix:    ic.Prefix(),
		EventName: ic.EventName(),
		EventData: ic,
	}

	return gm.Bytes()
}

func (ic *initChatMessage) Prefix() int {
	return 4
}

func (ic *initChatMessage) EventName() string {
	return initChatMessageIdentifier
}

// 4
// {
//     "ev_name": "talk_s",
//     "ev_data": {
//         "cid": 41377010,
//         "ckey": "0:41377010_MS9MeFFRRPbJC",
//         "flaged": false
//     }
// }
type chatStartedMessage struct {
	ChatID  int    `json:"cid"`
	ChatKey string `json:"ckey"`
	// yes, it's their fault
	Flagged bool `json:"flaged"`
}

func (cs *chatStartedMessage) Bytes() ([]byte, error) {
	gm := &genericMessage{
		Prefix:    cs.Prefix(),
		EventName: cs.EventName(),
		EventData: cs,
	}

	return gm.Bytes()
}

func (cs *chatStartedMessage) Prefix() int {
	return 4
}

func (cs *chatStartedMessage) EventName() string {
	return chatStartedMessageIdentifier
}

// 4
// {
//     "ev_name": "_begacked",
//     "ev_data": {
//         "ckey": "0:41377010_MS9MeFFRRPbJC"
//     },
//     "ceid": 2
// }
type chatStartedAnckowledgeMessage struct {
	CKey string `json:"ckey"`
	CEID int
}

func (csa *chatStartedAnckowledgeMessage) Bytes() ([]byte, error) {
	gm := &genericMessage{
		Prefix:    csa.Prefix(),
		EventName: csa.EventName(),
		EventData: csa,
		CEID:      csa.CEID,
	}

	return gm.Bytes()
}

func (csa *chatStartedAnckowledgeMessage) Prefix() int {
	return 4
}

func (csa *chatStartedAnckowledgeMessage) EventName() string {
	return chatStartedMessageIdentifier
}
