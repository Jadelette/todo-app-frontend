import React from 'react';
import InputField from './inputfield';
import GoldButton from './goldbutton';


class AddNewTask extends React.Component {

    //Constructor
    constructor(props) {
        super(props);

        this.state = {
            taskDescription: "",
            dueDate: "",
            
        };

        //event binding functions
        this.onAddClicked = this.onAddClicked.bind(this);
        this.onInputfieldUpdated = this.onInputfieldUpdated.bind(this);
    }

    //event handling
    onAddClicked() {
        const taskDescription = this.state.taskDescription;
        const dueDate = this.state.dueDate;

        //Ensure both fields contain an entry - if either field is empty alert user
        if (taskDescription && dueDate) {
            //If due date is past, alert user, otherwise add a new task to the active tasks array
            const pastDue = this.props.checkDueDate(dueDate);
           
            if (pastDue) {
                alert('Please select a valid date; due date cannot be in the past')
            } else {
                const taskToAdd = {
                    description: taskDescription,
                    dueDate: dueDate,
                    done: "false",
                    status: "green",
                    userId: 1
                };
                
                this.props.onAddTaskHandler(taskToAdd);
    
                this.setState({
                    taskDescription: "",
                    dueDate: ""
                });
            }
        } else {
            alert("Please enter task description and select due date before clicking 'add'");
        }
    }


    onInputfieldUpdated(inputFieldValue, inputFieldId) {
        if (inputFieldId === "taskInput") {
            this.setState({ taskDescription: inputFieldValue });
        } else if (inputFieldId === "dateInput") {
            this.setState({ dueDate: inputFieldValue });
        }
    }


    render() {
        return (

            <div className="container">
                <div style={styles.addTask} className="row">

                <div className="col-sm-1"> </div>
                   
                    <div className="col-sm-1">Task: </div>

                    <div className="col-sm-3">
                        <InputField
                            taskValue={this.state.taskDescription}
                            changeHandler={this.onInputfieldUpdated}
                            onEnterPressed={this.onAddClicked}
                            placeholder="enter new task"
                            type="text"
                            id="taskInput"
                        />
                    </div>


                    <div className="col-sm-1">Due: </div>

                    <div className="col-sm-3">
                        <InputField
                            taskValue={this.state.dueDate}
                            changeHandler={this.onInputfieldUpdated}
                            onEnterPressed={this.onAddClicked}
                            placeholder="enter due date"
                            type="date"
                            id="dateInput"
                        />
                    </div>

                    <div className="col-sm-2">
                        <GoldButton
                            clickHandler={this.onAddClicked}
                            label={'add'}

                        />
                    </div>
                </div>

            </div>
        )
    }
}

const styles = {
    addTask: {
        color: 'rgba(230, 230, 255, 0.8)', //
        textAlign: 'left',
        fontFamily: 'Permanent Marker',
        fontSize: '1.7em',
        marginTop: '40px',
        marginBottom: '50px',
        alignItems: 'center'
       
    }
};

export default AddNewTask

