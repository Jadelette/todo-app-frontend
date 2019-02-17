import React, { Component } from 'react';
import Header from './components/header';
import Tasklist from './components/tasklist';
import InfoBar from './components/infobar';
import AddNewTask from './components/addnewtask';
import TasksService from './service/tasks';
import Axios from 'axios';


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

  async componentDidMount() {
    const activeTasks = await TasksService.getActiveTasks();
    const completedTasks = await TasksService.getCompletedTasks();
    this.setState({ activeTasks: activeTasks });
    this.setState({ completedTasks: completedTasks });
  }



  async addTask(task) {
    const response = await TasksService.saveTask(task);
    task.taskId = response.data.insertId;

    let currentListOfTasks = await TasksService.getActiveTasks();

    this.setState({
      activeTasks: currentListOfTasks
    });
  }

  checkPastDueDate(dueDate) {
    //get today's date and set time to 00:00
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    //change dueDate to date format
    const compareDate = new Date(dueDate)
    //if the dueDate is in the past, return true
    if (today > compareDate) {
      return true;
    }
  }



  async deleteTask(taskId) {
    await TasksService.deleteTask(taskId);

    let currentListOfTasks = await TasksService.getActiveTasks();

    this.setState({
      activeTasks: currentListOfTasks
    })
  }


  async completeTask(taskId) {
    let currentListOfTasks = await TasksService.getActiveTasks();
    const newTaskDetails = currentListOfTasks.filter((task) => task.taskId === taskId)[0];
    newTaskDetails.done = "true";

    await TasksService.updateTask(taskId, newTaskDetails);

    let updatedListOfActiveTasks = await TasksService.getActiveTasks();
    let updatedListOfCompletedTasks = await TasksService.getCompletedTasks();
    this.setState({
      activeTasks: updatedListOfActiveTasks,
      completedTasks: updatedListOfCompletedTasks
    })
  }



  async restoreTask(taskId) {
    let currentListOfTasks = await TasksService.getCompletedTasks();
    const newTaskDetails = currentListOfTasks.filter((task) => task.taskId === taskId)[0];
      newTaskDetails.done = "false";

    await TasksService.updateTask(taskId, newTaskDetails);

    let updatedListOfActiveTasks = await TasksService.getActiveTasks();
    let updatedListOfCompletedTasks = await TasksService.getCompletedTasks();
    this.setState({
      activeTasks: updatedListOfActiveTasks,
      completedTasks: updatedListOfCompletedTasks
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <AddNewTask onAddTaskHandler={this.addTask} checkDueDate={this.checkPastDueDate} />
        <hr />
        <InfoBar description="Active Tasks" items={this.state.activeTasks} />
        <Tasklist
          tasks={this.state.activeTasks}
          onDeleteTaskHandler={this.deleteTask}
          onCompleteTaskHandler={this.completeTask}
          setTaskStatusHandler={this.setTaskStatus}
          checkDueDate={this.checkPastDueDate}
        />
        <hr />
        <InfoBar description="Completed Tasks" items={this.state.completedTasks} />
        <Tasklist tasks={this.state.completedTasks} onRestoreTaskHandler={this.restoreTask} checkDueDate={this.checkPastDueDate} />
      </div>
    );
  }
}

export default App;
