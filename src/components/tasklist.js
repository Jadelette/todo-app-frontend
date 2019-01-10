import React from 'react';
import Task from './task';

class Tasklist extends React.Component {

    render() {
        let listOfTasks = [
            //"Take the dog for a walk",
            "Cook Dinner",
            "Complete coding homework",
            "Make sandwiches for lunch",
            "Wash clothes",
            "Hang out clothes"
        ]

        return (
            <div class="container">
                {listOfTasks.map((task, i) => <Task taskDescription={task} key={i} taskNumber={i+1}/>)}
        </div>
        )
    }
}


export default Tasklist;