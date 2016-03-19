import React from 'react';
import Actions from '../actions'
import { History } from 'react-router'

import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem, Button, ButtonInput } from 'react-bootstrap';
import _ from 'lodash';

import connectToStores from 'alt/utils/connectToStores';
import LoginStore from '../stores/LoginStore';

@connectToStores
class Header extends React.Component {
  constructor() {
    super();
  }

  static getStores() {
    return [LoginStore];
  }

  static getPropsFromStores() {
    return LoginStore.getState();
  }

  logout() {
    Actions.logout();
    this.props.history.pushState(null, '/');
  }

  login() {
    this.props.history.pushState(null, '/login');
  }

  render() {
    var rightLinks = null;
    if(this.props.user) {
       rightLinks = (
         <Nav pullRight>
           Logged in as {_.values(this.props.user)}
           <ButtonInput value="Logout" onClick={this.logout.bind(this)} />
         </Nav>
       );
    }
    else {
      rightLinks = (
        <Nav pullRight>
          <NavItem href="/login" onClick={this.login.bind(this)} eventKey={1}>Login</NavItem>
        </Nav>
      );
    }

    return (
      <Navbar>
        <NavBrand><a href="/">Arrangify</a></NavBrand>
        <Nav>
          <NavItem eventKey={1} href="#">Events</NavItem>
        </Nav>
        { rightLinks }
      </Navbar>
    );
  }
}

export default Header;
