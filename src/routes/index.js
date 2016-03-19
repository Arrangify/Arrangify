import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router';

import Html from '../components/Html.jsx';
import App from '../components/App.jsx';
import Login from '../components/Login.jsx';

const routes = (
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
    </Route>
);

export default routes;
