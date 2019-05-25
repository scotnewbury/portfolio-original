import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path = "/" render = {props => (
            <React.Fragment>
              <div className="masthead text-center">
                <h1>Scot Newbury</h1>
                <h3>Web Developer and Technology Enthusiast</h3>
                <a href="https://github.com/scotnewbury"><i className="fab fa-github"></i></a>
                <a href="http://www.linkedin.com/in/scotnewbury"><i className="fab fa-linkedin"></i></a>
                <a href="mailto:scot@scotnewbury.com"><i className="fas fa-envelope"></i></a>
              </div>
          </React.Fragment>
          )} />
          <Route path = "/projects" component = {Projects} />
          <Route path = "/contactme" component = {ContactMe} />
        </div>
        <Footer />
      </Router>
      
    )
  }
}


export default App
