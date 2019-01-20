import React from 'react';
import InputField from './inputfield';
import GreenButton from './greenbutton';


class AddNewTask extends React.Component {

    //Constructor
    constructor(props) {
        super(props);

        this.state = {
            taskDescription: ""
        };

        //event binding functions
        this.onAddClicked = this.onAddClicked.bind(this);
        this.onInputfieldUpdated = this.onInputfieldUpdated.bind(this);
    }

    //event handling
    onAddClicked() {
        const taskToAdd = {
            id: Math.floor((Math.random() * 100)),
            description: this.state.taskDescription,
            done: false
        };

        this.props.onAddTaskHandler(taskToAdd);
        this.setState({
            taskDescription: ""
        });
    }

    onInputfieldUpdated(textFieldValue) {
        this.setState({
            taskDescription: textFieldValue
        });
    }


    render() {
        return (
            <div style={styles.addTask} class="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-3">
                    <InputField
                        taskValue={this.state.taskDescription}
                        changeHandler={this.onInputfieldUpdated}
                        onEnterPressed={this.onAddClicked}
                    />
                </div>

                <div className="col-sm-1">
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
        color: 'rgb(85, 107, 47)',
        textAlign: 'left',
        fontFamily: 'Great Vibes',
        fontSize: '1.7em',
        marginTop: '20px',
        marginBottom: '20px',
        fontWeight: 'bold',
        /*fontStyle: 'italic'*/
    }
};

export default AddNewTask

