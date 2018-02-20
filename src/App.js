import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/Board';
import './App.css';

import Nav from './common/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/board" component={Board} />
      </div>
    );
  }
}

export default App;
