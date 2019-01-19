import React from 'react';
import Task from './task';

class Tasklist extends React.Component {

    render() {
        let listOfTasks = [
            {
                id: 1,
                description: "Take the dog for a walk",
                done: false
            },
            {
                id: 2,
                description: "Cook Dinner",
                done: false
            },
            {
                id: 3,
                description: "Complete coding homework",
                done: false
            },
            {
                id: 4,
                description: "Make sandwiches for lunch",
                done: false
            },

            {
                id: 5,
                description: "Take Ethan skateboarding",
                done: false
            }
        ]

        return (
            <div style={styles.mytasks} className="container">
                {listOfTasks.map((task, i) => <Task taskDescription={task.description} key={i} taskNumber={i+1} />)}
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