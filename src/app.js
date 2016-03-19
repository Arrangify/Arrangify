import ReactDOM from 'react-dom';
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from './components/App.jsx';
import Login from './components/Login.jsx';
import routes from './routes';

require('./main.scss');
require('../node_modules/bootstrap/dist/css/bootstrap.css');

ReactDOM.render(
  <Router history={createBrowserHistory()} routes={routes} />,
  document.getElementById('container'));
