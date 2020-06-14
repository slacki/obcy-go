package main

import (
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
	c.Connect()
	defer c.Disconnect()

	select {
	case <-interrupt:
		log.Println("Received interrupt")
	}
}
