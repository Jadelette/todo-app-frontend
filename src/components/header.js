import React from 'react';

class Header extends React.Component{

    render() {
        return (
        <div style={styles.header} className="row">
        <div class="my-task-list col-sm-12"> <p> Task List</p></div>
        </div>
        )
}
}

const styles = {
    header : {
        color: 'rgba(51, 0, 25, 0.90)', // 85, 107, 47
        textAlign: 'center',
        backgroundColor: 'rgba(255, 230, 242, 0.7)', // 204, 0, 102  255, 230, 242
        fontFamily: 'Permanent Marker',
        
        padding:'0.1em',
        fontSize: '5em',
        border: '0.05em',
        borderStyle: 'solid', 
        borderRadius: '1em',
        marginTop: '50px',
        boxShadow: '10px 10px',
        textShadow: '1px 1px',
        
        
    }

};

export default Header;