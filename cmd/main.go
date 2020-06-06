package main

import (
	"fmt"

	"github.com/slacki/obcy-go"
)

func main() {
	c, err := obcy.NewClient()
	if err != nil {
		panic(err)
	}
	fmt.Printf("%+v", c)
}
