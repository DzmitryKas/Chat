import React from "react";
import MessageList from "./messageList/messageList";
import Header from "./header/header";
import SendMessage from "./sendMessage/sendMessage";

const url = "ws://st-chat.shas.tel";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      name: "try",
      ws: null,
      connect: ""
    };
    this.sendMessage = this.sendMessage.bind(this);
    // this.showMessage = this.showMessage.bind(this);
  }

  ws = new WebSocket(url);
  componentDidMount() {
    this.ws.onopen = () => {
      this.setState({
        connect: "connected",        
      });
    };

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };

    this.ws.onclose = () => {
      console.log("disconnected");
      // automatically try to reconnect on connection loss
      this.setState({
        connect: "disconnected",
        ws: new WebSocket(url)
      });
    };
  }

  addMessage = message =>
    this.setState(state => ({ messages: [...state.messages, message] }));

  sendMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { from: this.state.name, message: messageString };
    this.ws.send(JSON.stringify(message));
    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };
  };

  render() {
    return (
      <div className="app">
        <Header connect={this.state.connect}/>
        <MessageList messages={this.state.messages} name={this.state.name}/>
        <SendMessage sendMessage={this.sendMessage} />
      </div>
    );
  }
}
