import React from 'react';
import RedButton from './redbutton';
import GreenButton from './greenbutton';

class Task extends React.Component{

    constructor(props) {
        super(props);

        this.onDoneClicked = this.onDoneClicked.bind(this);
        this.onDeleteClicked = this.onDeleteClicked.bind(this);
        this.onRestoreClicked = this.onRestoreClicked.bind(this);
    }

    onDoneClicked() {
        const completedTask = this.props.taskID;
        this.props.onCompleteTaskHandler(completedTask);
    }

    onDeleteClicked(){
        const taskToDelete = this.props.taskID
        this.props.onDeleteTaskHandler(taskToDelete);
    }

    onRestoreClicked(){
        const taskToRestore = this.props.taskID;
        this.props.onRestoreTaskHandler(taskToRestore);
    }

    render() {
        return (
        <div style={styles.task} className="row">
          <div className="col-sm-1">{this.props.taskNumber}</div>
          <div className="col-sm-4"> {this.props.taskDescription}</div>
          <div className="col-sm-2">{this.props.taskDueDate}</div>
          {!(this.props.taskCompleted) &&
          <div className="col-sm-2"> <GreenButton label={'done'} clickHandler={this.onDoneClicked} /> </div>
          }
          {(this.props.taskCompleted) &&
          <div className="col-sm-2"> <GreenButton label={'restore'} clickHandler={this.onRestoreClicked} /> </div>
          }
          {!(this.props.taskCompleted) &&
          <div className="col-sm-2"> <RedButton label={'delete'} clickHandler={this.onDeleteClicked} />  </div>
          }
        </div>
          

        )
}
}

const styles = {
    task : {
        color: 'rgba(51, 0, 25, 0.94)',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 230, 242, 0.8)',
        fontFamily: 'Garamond',
        padding: '0.2em',
        fontSize: '1.8em',
        opacity: '50%',
        border: '0.07em',
        borderStyle: 'solid', 
        borderRadius: '0.5em',
        marginBottom: '20px',
        fontStyle: 'italic',
        alignItems: 'center',
        boxShadow: '7px 7px'
    }

};

export default Task;