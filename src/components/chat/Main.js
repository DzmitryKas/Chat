import React from "react";
import MessageList from "./messageList/messageList";
import Header from "./header/header";
import SendMessage from "./sendMessage/sendMessage";
// import Header
// import { ReactDOM } from 'react-dom';

// export default class Main extends Component {
//   render() {
//     return <p>Hello world</p>;
//   }
// }
const url = "ws://st-chat.shas.tel";
// const DUMMY_DATA = [
//   {
//     time: "perborgen",
//     text: "who'll win?"
//   },
//   {
//     senderId: "janedoe",
//     text: "who'll win?"
//   }
// ]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.showMessage = this.showMessage.bind(this);
  }


  componentDidMount() {
    const socket = new WebSocket(url);
    socket.binaryType = "arraybuffer";
    socket.onmessage = function(event) {
      console.log();
      showMessage(event.data);
    };

    showMessage(message) {
      this.setState(() => {
        return { messages: message };
      });
    }
  }

  //     chatManager.connect()
  //     .then(currentUser => {
  //         this.currentUser = currentUser
  //         this.currentUser.subscribeToRoom({
  //         roomId: roomId,
  //         hooks: {
  //             onNewMessage: message => {

  //                 this.setState({
  //                     messages: [...this.state.messages, message]
  //                 })
  //             }
  //         }
  //     })
  //   })
  // }


  sendMessage(text) {
    this.currentUser.sendMessage({
      text
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <MessageList messages={this.state.messages} />
        <SendMessage sendMessage={this.sendMessage} />
      </div>
    );
  }
}
