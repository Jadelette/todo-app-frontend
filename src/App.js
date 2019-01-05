import React, { Component } from 'react';
import Header from './components/header';
import Tasklist from './components/tasklist';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Header />
      <Tasklist />
      </div>
    );
  }
}

export default App;
