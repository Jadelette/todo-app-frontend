import React from 'react';
import InputField from './inputfield';
import GreenButton from './greenbutton';


class AddNewTask extends React.Component {

    //Constructor
    constructor(props) {
        super(props);

        this.state = {
            taskDescription: "",
            dueDate: "",
            taskStatus: ""
        };

        //event binding functions
        this.onAddClicked = this.onAddClicked.bind(this);
        this.onInputfieldUpdated = this.onInputfieldUpdated.bind(this);
    }

    //event handling
    onAddClicked() {
        const taskDescription = this.state.taskDescription;
        const dueDate = this.state.dueDate;

        this.setState({
            taskStatus: "red"
        });

        alert(this.state.taskStatus);


        //Ensure both fields contain an entry - if either field is empty alert user
        if (taskDescription && dueDate) {

            //If due date is past, alert user, otherwise add a new task to the active tasks array
            if (this.checkFutureDueDate()) {
                alert('Please select a valid date; due date cannot be in the past')
            } else {
                const taskToAdd = {
                    id: Math.floor((Math.random() * 100)),
                    description: taskDescription,
                    dueDate: dueDate,
                    done: false,
                    status: this.state.taskStatus
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

    checkFutureDueDate() {
        //get today's date and set time to 00:00
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        //change dueDate to date format
        const compareDate = new Date(this.state.dueDate)
        //if the dueDate is in the past, return true
        if (today > compareDate) {
            return true;
        }
    }

    /*  setTaskStatus() {
          if (this.checkFutureDueDate()) {
              this.setState({
                  taskStatus: "red"
              })
              alert(this.state.taskStatus)
          } else {
              this.setState({
                  taskStatus: "green"
              })
          }
      }*/

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
                <div style={styles.addTask} class="row">

                    <div className="col-sm-1"> </div>

                    <div className="col-sm-2">Task: </div>

                    <div className="col-sm-5">
                        <InputField
                            taskValue={this.state.taskDescription}
                            changeHandler={this.onInputfieldUpdated}
                            onEnterPressed={this.onAddClicked}
                            placeholder="enter new task"
                            type="text"
                            id="taskInput"
                        />
                    </div>
                </div>

                <div style={styles.addTask} class="row">

                    <div className="col-sm-1"> </div>

                    <div className="col-sm-2">Due: </div>

                    <div className="col-sm-5">
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
                        <GreenButton
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
        color: 'rgb(240, 193, 225)', //
        textAlign: 'left',
        fontFamily: 'Permanent Marker',
        fontSize: '1.7em',
        marginTop: '40px',
        marginBottom: '20px',
        fontWeight: 'bold',
        alignItems: 'center'
        /*fontStyle: 'italic'*/
    }
};

export default AddNewTask

