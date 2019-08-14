import React from "react";
import MessageList from "./messageList/messageList";
import Header from "./header/header";
import SendMessage from "./sendMessage/sendMessage";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const url = "ws://st-chat.shas.tel";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      name: this.props.user,
      ws: null,
      connect: ""
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
    
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
      console.log(message);
      this.addNotification(message[0].message, message[0].from);
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

  addNotification(msg, from) {
    this.notificationDOMRef.current.addNotification({
      title: from,
      message: msg,
      type: "success",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
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
        <Header connect={this.state.connect} logOut={this.props.logout}/>
        <MessageList messages={this.state.messages} name={this.state.name}/>
        <SendMessage sendMessage={this.sendMessage} />
        <ReactNotification ref={this.notificationDOMRef} />
      </div>
    );
  }
}
