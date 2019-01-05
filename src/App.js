import React, { Component } from 'react';
import Header from './components/header';
import Tasklist from './components/tasklist';
import InfoBar from './components/infobar';
import AddNewTask from './components/addnewtask';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Header />
      <AddNewTask />
      <hr/>
      <InfoBar />
      <Tasklist />
      </div>
    );
  }
}

export default App;
