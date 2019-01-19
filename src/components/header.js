import React from 'react';

class Header extends React.Component{

    render() {
        return (
        <div style={styles.header} className="row">
        <div class="my-task-list col-sm-12"> <p> Things for Doing</p></div>
        </div>
        )
}
}

const styles = {
    header : {
        color: 'rgb(85, 107, 47, 0.94)',
        textAlign: 'center',
        backgroundColor: 'rgba(240, 241, 229, 0.8)',
        fontFamily: 'Great Vibes',
        padding: '0.1em',
        fontSize: '5em',
        opacity: '50%',
        border: '0.07em',
        borderStyle: 'solid', 
        borderRadius: '0.5em',
        marginTop: '50px'
        
    }

};

export default Header;