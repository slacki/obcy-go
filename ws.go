package obcy

import (
	"encoding/json"
	"net/http"
)

const addressDataUrl = "https://6obcy.org/ajax/addressData"

// {"host":"server.6obcy.pl","port":"7002","from":"ajaxPHP","s6":"tak"}
type addressData struct {
	Host string `json:"host"`
	Port string `json:"port"`
	From string `json:"from"`
	S6   string `json:"s6"`
}

func WSAddr() (*addressData, error) {
	r, err := http.Get(addressDataUrl)
	if err != nil {
		return nil, err
	}
	defer r.Body.Close()

	addrData := &addressData{}

	err = json.NewDecoder(r.Body).Decode(addrData)
	return addrData, err
}
