import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';
import Header from './components/layout/Header';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path = "/" render = {props => (
            <React.Fragment>
              <div className="masthead">
                <h1>Scot Newbury</h1>
                <h3>Web Developer and Technology Enthusiast</h3>
              </div>
          </React.Fragment>
          )} />
          <Route path = "/projects" component = {Projects} />
          <Route path = "/contactme" component = {ContactMe} />
        </div>
      </Router>
    )
  }
}


export default App
