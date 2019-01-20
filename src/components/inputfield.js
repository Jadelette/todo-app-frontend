import React from 'react';

class InputField extends React.Component {

    constructor(props) {
        super(props);

        this.onTextFieldChange = this.onTextFieldChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = {
            textFieldValue: ""
        }
    }

    onTextFieldChange(event) {
        const textFieldValue = event.target.value;
        this.setState({ textFieldValue: textFieldValue });

        this.props.changeHandler(textFieldValue);
    }

    handleKeyPress(target) {
        if (target.charCode === 13) {
            this.props.onEnterPressed();
        }
    };

    render() {
        return (
            <form > 
                <input 
                    style={styles.input}
                    type="text" 
                    value={this.props.taskValue}
                    onChange={this.onTextFieldChange}
                    onKeyPress={this.handleKeyPress} 
                    placeholder="enter new task"
                    />
            </form>
        )
    }
}

const styles = {
    input: {
        color: 'rgb(85, 107, 47, 0.94)',
        textAlign: 'center',
        backgroundColor: 'rgba(240, 241, 229, 0.8)',
        fontFamily: 'Garamond',
        fontSize: '0.7em',
        border: '0.07em',
        borderStyle: 'solid',
        borderRadius: '0.5em',
        fontStyle: 'italic',
        
    }

};

export default InputField;