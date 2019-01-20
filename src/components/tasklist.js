import React from 'react';
import Task from './task';

class Tasklist extends React.Component {

    render() {
        

        return (
            <div style={styles.mytasks} className="container">
                {this.props.tasks.map((task, i) => 
                <Task 
                    taskDescription={task.description} 
                    key={i} 
                    taskNumber={i+1} 
                    taskID={task.id} 
                    onDeleteTaskHandler={this.props.onDeleteTaskHandler}
                    onCompleteTaskHandler={this.props.onCompleteTaskHandler}
                    showButtons = {true}
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