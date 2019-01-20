import React from 'react';
import Task from './task';

class CompletedTasklist extends React.Component {

    render() {
        

        return (
            <div style={styles.mytasks} className="container">
                {this.props.tasks.map((task, i) => 
                    <Task 
                        taskDescription={task.description} 
                        key={i} 
                        taskNumber={i+1} 
                        showButtons={false}/>)}
            </div>
        )
    }
}

const styles = {
    myTasks: {
        paddingBottom: '5em'
    }
};


export default CompletedTasklist;