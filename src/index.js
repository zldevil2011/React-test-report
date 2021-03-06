import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);

