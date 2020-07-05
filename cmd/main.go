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

	c, err := obcy.NewClient(true)
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
	err = cv1.Begin()
	if err != nil {
		log.Fatal(err)
	}
	defer cv1.End()

	cv1m := make(chan string)
	cv1.SubMessages(cv1m)
	cv1t := make(chan bool)
	cv1.SubTyping(cv1t)

	for {
		select {
		case m := <-cv1m:
			fmt.Println("!!! message:", m)
		case m := <-cv1t:
			fmt.Println("!!! typing:", m)
		case <-interrupt:
			log.Println("Received interrupt")
			return
		}
	}
}
