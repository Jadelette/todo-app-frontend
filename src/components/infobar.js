import React from 'react';


class InfoBar extends React.Component {

   

   
    render() {
        return (
            <div style={styles.infobar} class="container" >
            <div className="row">
                <div  className="col-sm-2">Active Tasks: </div>
                <div className="col-sm-1" >{this.props.activeTasks.length}</div>
                </div>
            </div>
        )
    }
}

const styles = {
    infobar: {
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

export default InfoBar;