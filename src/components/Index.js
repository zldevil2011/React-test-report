import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from '../logo.svg';
import '../App.css';

class Index extends Component {
  render() {

    return (
        <div>
        {
          this.props.children ? this.props.children:
          <div className="App">
            <p className="App-intro">
              Index
            </p>
            <ul>
                <li><Link to="/app">APP</Link></li>
              	<li><Link to="/game">Game</Link></li>
                <li><Link to="/todo">Todo</Link></li>
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default Index;
