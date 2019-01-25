import React from 'react';
import Task from './task';

class Tasklist extends React.Component {

    constructor(props) {
        super(props);

        this.setTaskStatus = this.setTaskStatus.bind(this);
    }

    setTaskStatus() {
        let currentListOfTasks = this.props.tasks;

        for (let task of currentListOfTasks) {
        
           const pastDue =  this.props.checkDueDate(task.dueDate);
            //set status to green for future due date and red for past due date
            if (pastDue) {
                task.status = "red";
            } else {
                task.status = "green";
            }
        }
        return currentListOfTasks;
    }

    render() {

        const tasks = this.setTaskStatus();

        return (
            <div style={styles.mytasks} className="container">
                {tasks.map((task, i) =>
                    <Task
                        taskDescription={task.description}
                        taskDueDate={task.dueDate}
                        taskSortDate=""
                        key={i}
                        taskNumber={i + 1}
                        taskID={task.id}
                        taskCompleted={task.done}
                        onDeleteTaskHandler={this.props.onDeleteTaskHandler}
                        onCompleteTaskHandler={this.props.onCompleteTaskHandler}
                        onRestoreTaskHandler={this.props.onRestoreTaskHandler}
                        taskStatus={task.status}
                    />)}
            </div>
        )
    }
}

const styles = {
    myTasks: {
        paddingBottom: '5em'
    }
};


export default Tasklist;