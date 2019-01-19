import React from 'react';
import RedButton from './redbutton';
import GreenButton from './greenbutton';

class Task extends React.Component{

    constructor(props) {
        super(props);

        this.onDoneClicked = this.onDoneClicked.bind(this);
    }

    onDoneClicked() {
        alert('this task is done');
    }

    onDeleteClicked(){
        alert('this task has been deleted');
    }

    render() {
        return (
        <div style={styles.task} className="row">
          <div className="col-sm-1">{this.props.taskNumber}</div>
          <div className="col-sm-6"> {this.props.taskDescription}  </div>
          <div className="col-sm-2"> <GreenButton label={'done'} clickHandler={this.onDoneClicked} /> </div>
          <div className="col-sm-2"> <RedButton label={'delete'} clickHandler={this.onDeleteClicked}/>  </div>
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
        marginBottom: '20px',
        fontStyle: 'italic'
    }

};

export default Task;