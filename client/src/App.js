import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { default as Home } from './pages/Home/Home.js';
import { default as Lists } from './pages/All/All.js';
import { default as List } from './pages/List/List.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/lists" component={Lists}/>
            <Route exact path="/list/:id" component={List}/>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
