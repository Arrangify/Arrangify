import React from 'react';
import { Grid, Row, Col, Input, ButtonInput } from 'react-bootstrap';
import Actions from '../actions';

class Login extends React.Component {
  constructor() {
    super();
  }

  login() {
    Actions.login({
      email: this.refs.email.getValue()
    });

    this.props.history.pushState(null, '/');
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <Input
            type="text"
            placeholder="Enter email address"
            hasFeedback
            ref="email"
            groupClassName="group-class"
            labelClassName="label-class"
            onChange={this.handleChange} />
            <ButtonInput value="Login" onClick={this.login.bind(this)} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Login;
