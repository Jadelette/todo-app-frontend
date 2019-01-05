import React from 'react';

class InputField extends React.Component {

    render() {
        return (
            <form> New task: <input style={styles.input} type="text" name="entry" multiple id="input-box" /> </form>
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
        fontStyle: 'italic'
    }

};

export default InputField;