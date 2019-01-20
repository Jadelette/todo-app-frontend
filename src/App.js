import React, { Component } from 'react';
import Header from './components/header';
import Tasklist from './components/tasklist';
import InfoBar from './components/infobar';
import AddNewTask from './components/addnewtask';
import CompletedTasklist from './components/completedTasklist';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    activeTasks: [],
    completedTasks: []
  };

  this.addTask=this.addTask.bind(this); 
  
}

addTask(task) {
  let currentListOfTasks = this.state.activeTasks;
  currentListOfTasks.push(task);
  this.setState({
    activeTasks: currentListOfTasks
  });
}


  render() {
    return (
      <div className="container">
      <Header />
      <AddNewTask onAddTaskHandler = {this.addTask}/>
      <hr/>
      <InfoBar description="Active Tasks" items={this.state.activeTasks}/>
      <Tasklist tasks={this.state.activeTasks} />
      <hr/>
      <InfoBar description="Completed Tasks" items={this.state.completedTasks}/>
      <CompletedTasklist tasks={this.state.completedTasks}/>
      </div>
    );
  }
}

export default App;
