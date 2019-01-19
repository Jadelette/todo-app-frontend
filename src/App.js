import React, { Component } from 'react';
import Header from './components/header';
import Tasklist from './components/tasklist';
import InfoBar from './components/infobar';
import AddNewTask from './components/addnewtask';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    tasks: []
  };

  this.addTask=this.addTask.bind(this); 
}


addTask(task) {
  let currentListOfTasks = this.state.tasks;
  currentListOfTasks.push(task);
  this.setState({
    tasks: currentListOfTasks
  });
}

  render() {
    return (
      <div className="container">
      <Header />
      <AddNewTask onAddTaskHandler = {this.addTask}/>
      <hr/>
      <InfoBar />
      <Tasklist tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
