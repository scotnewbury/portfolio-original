import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="masthead">
          <h1>Scot Newbury</h1>
          <h3>Web Developer and Technology Enthusiast</h3>
        </div>
      </div>
    )
  }
}

export default App
