import React from 'react';

class Header extends React.Component{

    render() {
        return (
        <div style={styles.header} class="row">
        <div class="my-task-list col-sm-12"> <p> Things for Doing</p></div>
        </div>
        )
}
}

const styles = {
    header : {
        color: 'olive',
        textAlign: 'center',
        backgroundColor: 'rgba(240, 241, 229, 0.973)',
        fontFamily: 'Great Vibes',
        padding: '0.2em',
        fontSize: '5em',
        opacity: '50%',
        border: '0.1em',
        borderStyle: 'solid', 
        borderRadius: '0.5em'
        
    }

};

export default Header;