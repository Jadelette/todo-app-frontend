import React from 'react';

class Header extends React.Component{

    render() {
        return (
        <div  className="row">
        <div className="col-sm-4"></div>
        <div style={styles.header} className="my-task-list col-sm-4"> <p> Task List</p></div>
        
        </div>
        )
}
}

const styles = {
    header : {
        color: 'rgba(0,0,26, 0.90)', //51, 0, 25
        textAlign: 'center',
        backgroundColor: 'rgba(230, 230, 255, 0.8)', //  230, 230, 255
        fontFamily: 'Permanent Marker',
        padding:'0.1em',
        fontSize: '4em',
        border: '0.05em',
        borderStyle: 'solid', 
        borderRadius: '1em',
        marginTop: '50px',
        boxShadow: '10px 10px',
        textShadow: '1px 1px',
        
        
    }

};

export default Header;