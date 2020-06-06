package main

import (
	"fmt"

	"github.com/slacki/obcy-go"
)

func main() {
	v, _ := obcy.WSAddr()
	fmt.Printf("%+v", v)
}
