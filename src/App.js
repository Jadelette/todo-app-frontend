import React, { Component } from 'react';
import Header from './components/header';
import Tasklist from './components/tasklist';
import InfoBar from './components/infobar';
import AddNewTask from './components/addnewtask';


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
  this.restoreTask = this.restoreTask.bind(this);
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
  const indexToDelete = currentListOfTasks.findIndex(i => i.id===taskID);

  currentListOfTasks.splice(indexToDelete, 1);

  this.setState({
    activeTasks: currentListOfTasks
  });
}

completeTask(taskID) {
  let currentListOfTasks = this.state.activeTasks;
  let currentCompletedTasks = this.state.completedTasks;

 const newCompletedTask = currentListOfTasks.filter((task) => task.id===taskID)[0];
 newCompletedTask.done = true;
 currentCompletedTasks.push(newCompletedTask);


 const indexToDelete = currentListOfTasks.findIndex(i => i.id===taskID);
 currentListOfTasks.splice(indexToDelete, 1);
 
  this.setState({
    activeTasks: currentListOfTasks,
    completedTasks: currentCompletedTasks
  });
}


restoreTask(taskID) {
  let currentListOfTasks = this.state.activeTasks;
  let currentCompletedTasks = this.state.completedTasks;

  const newTaskToRestore = currentCompletedTasks.filter((task) => task.id===taskID) [0];
  newTaskToRestore.done = false;
  currentListOfTasks.push(newTaskToRestore);

 const indexToDelete = currentCompletedTasks.findIndex(i => i.id===taskID);
 currentCompletedTasks.splice(indexToDelete, 1);

 this.setState({
  activeTasks: currentListOfTasks,
  completedTasks: currentCompletedTasks
});
  alert('Task restored' + newTaskToRestore.description)
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
      <Tasklist tasks={this.state.completedTasks} onRestoreTaskHandler={this.restoreTask} />
      </div>
    );
  }
}

export default App;
