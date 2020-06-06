package main

import (
	"context"
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
	ctx, cancel := context.WithCancel(context.Background())
	go c.Connect(ctx)

outer:
	for {
		select {
		case m := <-c.Message:
			fmt.Println("Received message:", m)
		case t := <-c.IsTyping:
			fmt.Println("Obcy is typing?", t)
		case <-interrupt:
			log.Println("Received interrupt")
			cancel()
			break outer
		}
	}
}
