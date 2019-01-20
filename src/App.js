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
  this.deleteTask=this.deleteTask.bind(this);
  this.completeTask=this.completeTask.bind(this);
}

addTask(task) {
  let currentListOfTasks = this.state.activeTasks;
  currentListOfTasks.push(task);
  this.setState({
    activeTasks: currentListOfTasks
  });
}

deleteTask(taskID) {
  let currentListOfTasks = this.state.activeTasks;
  currentListOfTasks.splice(currentListOfTasks.indexOf(taskID));
  this.setState({
    activeTasks: currentListOfTasks
  });
}

completeTask(taskID) {
  let currentListOfTasks = this.state.activeTasks;
  let currentCompletedTasks = this.state.completedTasks;

  const completedTask = currentListOfTasks.filter((task) => task.id===taskID);
  alert(JSON.stringify(completedTask));

  currentCompletedTasks.push(completedTask);

  currentListOfTasks.splice(currentListOfTasks.indexOf(taskID));
  
  this.setState({
    activeTasks: currentListOfTasks,
    completedTasks: currentCompletedTasks
  });
}

  render() {
    return (
      <div className="container">
      <Header />
      <AddNewTask onAddTaskHandler = {this.addTask}/>
      <hr/>
      <InfoBar description="Active Tasks" items={this.state.activeTasks}/>
      <Tasklist tasks={this.state.activeTasks} onDeleteTaskHandler={this.deleteTask} onCompleteTaskHandler={this.completeTask} />
      <hr/>
      <InfoBar description="Completed Tasks" items={this.state.completedTasks}/>
      <CompletedTasklist tasks={this.state.completedTasks}/>
      </div>
    );
  }
}

export default App;
