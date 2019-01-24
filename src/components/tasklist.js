import React from 'react';
import Task from './task';

class Tasklist extends React.Component {

    setTaskStatus(dueDate){
        
        const pastDue = this.props.checkDate(dueDate);  
        
        //set status to green for future due date and red for past due date
        if(pastDue) {
          this.taskStatus = "red";
        } else {
          this.taskStatus = "green";
        }
      } //need to figure out how to make this fire on tasklist refresh/render



    render() {
        return (
            <div style={styles.mytasks} className="container">
                {this.props.tasks.map((task, i) => 
                <Task 
                    taskDescription={task.description} 
                    taskDueDate={task.dueDate}
                    taskSortDate=""
                    key={i} 
                    taskNumber={i+1} 
                    taskID={task.id} 
                    taskCompleted={task.done}
                    onDeleteTaskHandler={this.props.onDeleteTaskHandler}
                    onCompleteTaskHandler={this.props.onCompleteTaskHandler}
                    onRestoreTaskHandler={this.props.onRestoreTaskHandler}
                    taskStatus={this.setTaskStatus(task.dueDate)}
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