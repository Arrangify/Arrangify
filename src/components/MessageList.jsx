import React from 'react';
import Message from './Message.jsx';
import _ from 'lodash';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

  }

  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div key={message._id}>{message.body}</div>
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}

export default MessageList;
