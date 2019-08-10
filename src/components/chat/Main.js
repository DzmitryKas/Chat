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

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
       messages: "Hello"
    }
  } 
  
  render() {
    return (
      <div className="app">
        <Header />
        <MessageList messages={this.state.messages}/>
        <SendMessage />
     </div>
    )
  }
}
