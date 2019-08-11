import React from "react";

export default class MessageList extends React.Component {
  
  render() {
    console.log('this.props.messages', this.props.messages);
    return (
      <ul className="message-list">                 
        {this.props.messages.map(message => {
          return (
           <li key={message.id}>
             <div>
               {message.time}
             </div>
             <div>
               {message.id}
             </div>
             <div>
               {message.from}
             </div>
             <div>
               {message.message}
             </div>
           </li>
         )
       })}
     </ul>
    )
  }
}