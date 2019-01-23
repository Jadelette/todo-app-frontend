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

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.restoreTask = this.restoreTask.bind(this);
  }



  addTask(task) {
    let currentListOfTasks = this.state.activeTasks;
    //Create a numerical version of the duedate that will allow the array to be sorted in date order
    const fullDate = new Date(task.dueDate);
    const taskSortDate = String(fullDate.getFullYear())+String(fullDate.getMonth())+String(fullDate.getDate());
    task.taskSortDate = taskSortDate;
    //set status of task to green or red, depending on whether due date is past
    this.setTaskStatus(task);
    //add task to active tasks array
    currentListOfTasks.push(task);
    //sort array in date order (based on due date)
    currentListOfTasks.sort((a,b) => (a.taskSortDate > b.taskSortDate) ? 1 : -1);
    //set the state of active task list to incorporate new task
    this.setState({
      activeTasks: currentListOfTasks
    });
  }

  setTaskStatus(task){
    //get today's date and set time to 00:00
    const today = new Date();
    today.setHours(0,0,0,0);
    //change format of due date from field entry to date
    const fullDate = new Date(task.dueDate);
    //set status to green for future due date and red for past due date
    if(today > fullDate) {
      task.status = "red";
    } else {
      task.status = "green";
    }
  } //need to figure out how to make this fire on tasklist refresh/render



  deleteTask(taskID) {
    let currentListOfTasks = this.state.activeTasks;
    //find task object in array based on task id property
    const indexToDelete = currentListOfTasks.findIndex(i => i.id === taskID);
    //remove task object from active tasks array
    currentListOfTasks.splice(indexToDelete, 1);

    this.setState({
      activeTasks: currentListOfTasks
    });


  }


  completeTask(taskID) {
    let currentListOfTasks = this.state.activeTasks;
    let currentCompletedTasks = this.state.completedTasks;

     //find task in active tasks array and push a compy to completed task array (change 'done' to true)
    const newCompletedTask = currentListOfTasks.filter((task) => task.id === taskID)[0];
    newCompletedTask.done = true;
    currentCompletedTasks.unshift(newCompletedTask);

    //Remove task from active tasks array
    const indexToDelete = currentListOfTasks.findIndex(i => i.id === taskID);
    currentListOfTasks.splice(indexToDelete, 1);

    this.setState({
      activeTasks: currentListOfTasks,
      completedTasks: currentCompletedTasks
    });
  }



  restoreTask(taskID) {
    let currentListOfTasks = this.state.activeTasks;
    let currentCompletedTasks = this.state.completedTasks;

    //find task in completed task array and push a copy to active task array (change 'done' to false and reset 'status')
    const newTaskToRestore = currentCompletedTasks.filter((task) => task.id === taskID)[0];
    newTaskToRestore.done = false;
    this.setTaskStatus(newTaskToRestore);
    currentListOfTasks.push(newTaskToRestore);

    //Sort active tasks array in date order (including restored task)
    currentListOfTasks.sort((a,b) => (a.taskSortDate > b.taskSortDate) ? 1 : -1);

    //Remove task form completed tasks array
    const indexToDelete = currentCompletedTasks.findIndex(i => i.id === taskID);
    currentCompletedTasks.splice(indexToDelete, 1);

    this.setState({
      activeTasks: currentListOfTasks,
      completedTasks: currentCompletedTasks
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <AddNewTask onAddTaskHandler={this.addTask} />
        <hr/>
        <InfoBar description="Active Tasks" items={this.state.activeTasks} />
        <Tasklist 
        tasks={this.state.activeTasks} 
        onDeleteTaskHandler={this.deleteTask} 
        onCompleteTaskHandler={this.completeTask} 
        />
        <hr/>
        <InfoBar description="Completed Tasks" items={this.state.completedTasks} />
        <Tasklist tasks={this.state.completedTasks} onRestoreTaskHandler={this.restoreTask} />
      </div>
    );
  }
}

export default App;
