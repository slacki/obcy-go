package obcy

import (
	"encoding/json"
	"fmt"
	"log"
	"strconv"
	"unicode/utf8"
)

type prefix int
type eventName string

const (
	setup prefix = 0
	ping  prefix = 2
	pong  prefix = 3
	event prefix = 4
)

const (
	clientAccepted eventName = "cn_acc"
	clientInfo     eventName = "_cinfo"
	owack          eventName = "_owack"
	initChat       eventName = "_sas"
	chatStarted    eventName = "talk_s"
)

func rawToTypeAndJSON(b []byte) (prefix, string) {
	s := string(b)
	_, i := utf8.DecodeRuneInString(s)
	p, err := strconv.Atoi(s[:i])
	if err != nil {
		log.Fatalln("Failed to parse message prefix", err)
	}

	return prefix(p), s[i:]
}

type setupMessage struct {
	SID          string   `json:"sid"`
	Upgrades     []string `json:"upgrades"`
	PingInterval int      `json:"pingInterval"`
	PingTimeout  int      `json:"pingTimeout"`
}

type message struct {
	Prefix    prefix
	EventName eventName   `json:"ev_name"`
	EventData interface{} `json:"ev_data"`
	CEID      int         `json:"ceid,omitempty"`
}

func payloadToMessage(b []byte) (*message, error) {
	pr, jsonStr := rawToTypeAndJSON(b)
	jsonBytes := []byte(jsonStr)

	eventNameInter := &struct {
		EventName eventName `json:"ev_name"`
	}{}
	err := json.Unmarshal(jsonBytes, eventNameInter)
	if err != nil {
		return nil, err
	}

	m := &message{
		Prefix:    pr,
		EventName: eventNameInter.EventName,
	}

	fillED := func(v interface{}) {
		if v == nil {
			m.EventData = v
		} else {
			json.Unmarshal(jsonBytes, v)
			m.EventData = v
		}
	}

	// oof, golang, this sucks
	switch en := m.EventName; en {
	case clientAccepted:
		fillED(&clientAcceptedED{})
	case clientInfo:
		fillED(&clientInfoED{})
	case owack:
		fillED(nil)
	case initChat:
		fillED(&clientAcceptedED{})
	case chatStarted:
		fillED(&clientAcceptedED{})
	}

	return m, nil
}

func newMessage(p prefix, en eventName, ed interface{}, ceid int) *message {
	m := &message{
		Prefix:    p,
		EventName: en,
		EventData: ed,
	}

	if ceid > 0 {
		m.CEID = ceid
	}

	return m
}

func (m *message) Bytes() ([]byte, error) {
	b, err := json.Marshal(m)
	if err != nil {
		return nil, err
	}

	return []byte(fmt.Sprintf("%d%s", m.Prefix, b)), nil
}

type clientInfoED struct {
	CVDate        string             `json:"cvdate"`
	Mobile        bool               `json:"mobile"`
	ClientVersion string             `json:"cver"`
	ADF           string             `json:"adf"`
	Hash          string             `json:"hash"`
	TestData      clientInfoTestData `json:"testdata"`
}

type clientInfoTestData struct {
	CKey      int  `json:"ckey"`
	Recevsent bool `json:"recevsent"`
}

func newClientInfoED(hash string, mobile bool) *clientInfoED {
	return &clientInfoED{
		CVDate:        "2017-08-01",
		Mobile:        mobile,
		ClientVersion: "v2.5",
		ADF:           "ajaxPHP",
		Hash:          hash,
		TestData: clientInfoTestData{
			CKey:      0,
			Recevsent: false,
		},
	}
}

type clientAcceptedED struct {
	ConnectionID string `json:"conn_id"`
	Hash         string `json:"hash"`
}

type initChatED struct {
	Channel     string       `json:"channel"`
	Myself      initChatPref `json:"myself"`
	Preferences initChatPref `json:"preferences"`
}

type initChatPref struct {
	Sex      int `json:"sex"`
	Location int `json:"location"`
}

func newInitChatED() *initChatED {
	pref := initChatPref{
		Sex:      0,
		Location: locationEntirePoland,
	}
	return &initChatED{
		Channel:     "main",
		Myself:      pref,
		Preferences: pref,
	}
}

type chatStartedED struct {
	ChatID  int    `json:"cid"`
	ChatKey string `json:"ckey"`
	// yes, it's their fault
	Flagged bool `json:"flaged"`
}

type chatStartedAnckowledgeED struct {
	CKey string `json:"ckey"`
}
