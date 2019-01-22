import React from 'react';
import InputField from './inputfield';
import GreenButton from './greenbutton';


class AddNewTask extends React.Component {

    //Constructor
    constructor(props) {
        super(props);

        this.state = {
            taskDescription: "",
            dueDate: ""
        };

        //event binding functions
        this.onAddClicked = this.onAddClicked.bind(this);
        this.onInputfieldUpdated = this.onInputfieldUpdated.bind(this);
    }

    //event handling
    onAddClicked() {
        const taskDescription = this.state.taskDescription;
        const dueDate = this.state.dueDate;

        if(taskDescription && dueDate) {

        const today = new Date();
        today.setHours(0,0,0,0);
        
        const compareDate = new Date(dueDate)
        compareDate.setHours(0,0,0,0)

        if(today > compareDate){
            alert('Please select a valid date; due date cannot be in the past')
        } else {
            
        const taskToAdd = {
            id: Math.floor((Math.random() * 100)),
            description: taskDescription,
            dueDate: dueDate,
            done: false,
            status: ""
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
            <div style={styles.addTask} class="row">
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
                    <GreenButton
                        clickHandler={this.onAddClicked}
                        label={'add'}

                    />
                </div>

            </div>
        )
    }
}

const styles = {
    addTask: {
        color: 'rgb(240, 193, 225)',
        textAlign: 'left',
        fontFamily: 'Great Vibes',
        fontSize: '1.7em',
        marginTop: '40px',
        marginBottom: '20px',
        fontWeight: 'bold',
        alignItems: 'center'
        /*fontStyle: 'italic'*/
    }
};

export default AddNewTask

