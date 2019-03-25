import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Home from './components/home/home';
import NoMatch from './components/noMatch/NoMatch'
import Contact from './components/contact/contact'


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
