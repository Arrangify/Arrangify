import React from 'react';
import Header from './Header.jsx';
import Login from './Login.jsx';
import MessageList from './MessageList.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
