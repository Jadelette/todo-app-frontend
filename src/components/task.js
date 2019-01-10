import React from 'react';
import DeleteButton from './deletebutton';
import DoneButton from './donebutton';

class Task extends React.Component{

    render() {
        return (
        <div style={styles.task} class="row">
          <div class="col-sm-1">{this.props.taskNumber}</div>
          <div class="col-sm-6"> {this.props.taskDescription}  </div>
          <div class="col-sm-2"> <DoneButton /> </div>
          <div class="col-sm-2"> <DeleteButton />  </div>
        </div>

        )
}
}

const styles = {
    task : {
        color: 'rgb(85, 107, 47, 0.94)',
        textAlign: 'center',
        backgroundColor: 'rgba(240, 241, 229, 0.8)',
        fontFamily: 'Garamond',
        padding: '0.2em',
        fontSize: '2em',
        opacity: '50%',
        border: '0.07em',
        borderStyle: 'solid', 
        borderRadius: '0.5em',
        marginTop: '10px',
        fontStyle: 'italic'
    }

};

export default Task;