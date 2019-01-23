import React from 'react';

class InputField extends React.Component {

    constructor(props) {
        super(props);

        this.onTextFieldChange = this.onTextFieldChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = {
            inputFieldValue: ""
        }
    }

    onTextFieldChange(event) {
        const inputFieldValue = event.target.value;
        this.setState({ inputFieldValue: inputFieldValue });

        const inputFieldId = event.target.id;

        this.props.changeHandler(inputFieldValue, inputFieldId);
    }

    handleKeyPress(target) {
        if (target.charCode === 13) {
            this.props.onEnterPressed();
            target.preventDefault();
        }


    };

    render() {
        return (
            <form >
                <input
                    style={styles.input}
                    type={this.props.type}
                    value={this.props.taskValue}
                    onChange={this.onTextFieldChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder={this.props.placeholder}
                    id={this.props.id}
                />
            </form>
        )
    }
}

const styles = {
    input: {
        color: 'rgba(51, 0, 25, 0.94)',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 230, 242, 0.7)',
        fontFamily: 'Cursive',
        fontSize: '0.6em',
        border: '0.07em',
        borderStyle: 'solid',
        borderRadius: '0.5em',
        fontStyle: 'italic',
        boxShadow: '6px 6px'
        
    }

};

export default InputField;