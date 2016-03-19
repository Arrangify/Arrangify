import React from 'react';
import Header from './Header.jsx';
import Login from './Login.jsx';
import MessageList from './MessageList.jsx';

class Html extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title></title>
          <script src="main.js"></script>
        </head>
        <body>
          <div id="container"></div>
          { this.props.children }
        </body>
      </html>
    );
  }
}

export default Html;
