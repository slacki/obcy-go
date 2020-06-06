package obcy

import (
	"unicode/utf8"
)

// InitMessage is a special message containing session details
type SessionMessage struct {
	// 0{"sid":"nRz2vmCnQ0ANJJ5","upgrades":[],"pingInterval":25000,"pingTimeout":40000}
	SID          string   `json:"sid"`
	Upgrades     []string `json:"upgrades"`
	PingInterval int      `json:"pingInterval"`
	PingTimeout  int      `json:"pingTimeout"`
}

type Message interface {
}

func rawToMessage(m *RawMessage) (*Message, error) {
	return nil, nil
}

func dropMessageType(s string) string {
	_, i := utf8.DecodeRuneInString(s)
	return s[i:]
}
