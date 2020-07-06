package main

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"time"

	"github.com/slacki/obcy-go"
)

func yeet() {
	c1, err := obcy.NewClient(true)
	if err != nil {
		log.Fatalln(err)
	}
	err = c1.Connect()
	if err != nil {
		log.Fatalln(err)
	}
	defer c1.Disconnect()

	c2, err := obcy.NewClient(true)
	if err != nil {
		log.Fatalln(err)
	}
	err = c2.Connect()
	if err != nil {
		log.Fatalln(err)
	}
	defer c2.Disconnect()

	conv1, err := obcy.NewConversation(c1)
	if err != nil {
		log.Fatalln(err)
	}
	conv1messages := make(chan string)
	conv1typing := make(chan bool)
	conv1disconnected := make(chan bool)
	conv1.SubMessages(conv1messages)
	conv1.SubTyping(conv1typing)
	conv1.SubDisconnected(conv1disconnected)

	conv2, err := obcy.NewConversation(c2)
	if err != nil {
		log.Fatalln(err)
	}
	conv2messages := make(chan string)
	conv2typing := make(chan bool)
	conv2disconnected := make(chan bool)
	conv2.SubMessages(conv2messages)
	conv2.SubTyping(conv2typing)
	conv2.SubDisconnected(conv2disconnected)

	for {
		fmt.Println("Starting conversations...")
		err := conv1.Begin()
		if err != nil {
			log.Fatalln(err)
		}
		err = conv2.Begin()
		if err != nil {
			log.Fatalln(err)
		}

	outer:
		for {
			select {
			case t := <-conv1typing:
				conv2.SendTyping(t)
			case t := <-conv2typing:
				conv1.SendTyping(t)
			case <-conv1disconnected:
				conv2.End(false)
				break outer
			case <-conv2disconnected:
				conv1.End(false)
				break outer
			case m := <-conv1messages:
				fmt.Println(">>> Stranger 1:", m)
				conv2.SendMessage(m)
			case m := <-conv2messages:
				fmt.Println(">>> Stranger 2:", m)
				conv1.SendMessage(m)
			}
		}

		time.Sleep(5 * time.Second)
	}
}

func main() {
	interrupt := make(chan os.Signal, 1)
	signal.Notify(interrupt, os.Interrupt)

	go yeet()

	select {
	case <-interrupt:
		fmt.Println("Received interrupt")
		return
	}
}
