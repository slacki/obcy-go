package main

import (
	"fmt"
	"log"
	"os"
	"os/signal"

	"github.com/slacki/obcy-go"
)

func main() {
	interrupt := make(chan os.Signal, 1)
	signal.Notify(interrupt, os.Interrupt)

	c, err := obcy.NewClient()
	if err != nil {
		panic(err)
	}
	err = c.Connect()
	if err != nil {
		panic(err)
	}
	defer c.Disconnect()

	cv1, err := obcy.NewConversation(c)
	if err != nil {
		panic(err)
	}
	cv1.Begin()

	cv1m := make(chan string)
	cv1.SubMessages(cv1m)

	for {
		select {
		case m := <-cv1m:
			fmt.Println("!!! m:", m)
		case <-interrupt:
			log.Println("Received interrupt")
			break
		}
	}
}
