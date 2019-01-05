import React from 'react';
import InputField from './inputfield';
import AddButton from './addbutton';


class AddNewTask extends React.Component {

    render() {
        return (
            <div style={styles.addTask} class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-4"> <InputField /> </div>
                <div class="col-sm-2"> <AddButton /> </div>
                <div class="col-sm-3"></div>
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

export default AddNewTask;