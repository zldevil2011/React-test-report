import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import routes from './routes';
import Index from './routes/components/Index';
import App from './routes/components/App';
import Game from './routes/components/Game';


ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);

