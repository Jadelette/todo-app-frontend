import React from 'react';
import Task from './task';

class Tasklist extends React.Component {

    render() {
        let listOfTasks = [
            "Take the dog for a walk",
            "Cook Dinner",
            "Complete coding homework",
            "Make sandwiches for lunch",
            "Wash clothes",
            "Hang out clothes",
            "something else",
            "another task",
            "I just want to see what happens when this list gets longer then the image",
            "blah blah blah",
            "all the stuff and things",
            "make a cake"
        ]

        return (
            <div style={styles.mytasks} class="container">
                {listOfTasks.map((task, i) => <Task taskDescription={task} key={i} taskNumber={i+1}/>)}
        </div>
        )
    }
}   

    const styles = {
        myTasks : { 
            paddingBottom: '5em'
    }
};


export default Tasklist;