import React from 'react';
import RedButton from './redbutton';
import GoldButton from './goldbutton';

class Task extends React.Component{

    constructor(props) {
        super(props);

        this.onDoneClicked = this.onDoneClicked.bind(this);
        this.onDeleteClicked = this.onDeleteClicked.bind(this);
        this.onRestoreClicked = this.onRestoreClicked.bind(this);
    }

    onDoneClicked() {
        const completedTask = this.props.taskId;
        this.props.onCompleteTaskHandler(completedTask);
    }

    onDeleteClicked(){
        const taskToDelete = this.props.taskId
        this.props.onDeleteTaskHandler(taskToDelete);
    }

    onRestoreClicked(){
        const taskToRestore = this.props.taskId;
        this.props.onRestoreTaskHandler(taskToRestore);
    }

    render() {
        return (
        <div style={styles.task} className="row">
          <div className="col-sm-1">{this.props.taskNumber}</div>
          <div className="col-sm-4"> {this.props.taskDescription}</div>
          <div className="col-sm-2">{this.props.taskDueDate}</div>
          {(this.props.taskCompleted === "false") &&
          <div className="col-sm-2"> <GoldButton label={'done'} clickHandler={this.onDoneClicked} /> </div>
          }
          {(this.props.taskCompleted === "true") &&
          <div className="col-sm-2"> <GoldButton label={'restore'} clickHandler={this.onRestoreClicked} /> </div>
          }
          {(this.props.taskCompleted === "false") &&
          <div className="col-sm-2"> <RedButton label={'delete'} clickHandler={this.onDeleteClicked} /></div>
          }
          {(this.props.taskStatus === "green") && (this.props.taskCompleted === "false") &&
          <div className="col-sm-1"> <img src={'assets/greenicon.png'} height="30px"/>  </div>
          }
          {(this.props.taskStatus === "red") && (this.props.taskCompleted === "false") &&
          <div className="col-sm-1"> <img src={'assets/redicon.png'} height="30px"/>  </div>
          }
        </div>
          

        )
}
}

const styles = {
    task : {
        color: 'rgba(0, 0, 26, 0.94)',
        textAlign: 'center',
        backgroundColor: 'rgba(230, 230, 255, 0.8)',
        fontFamily: 'Cursive',
        padding: '0.2em',
        fontSize: '1.5em',
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