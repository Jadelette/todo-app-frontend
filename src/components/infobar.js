import React from 'react';


class InfoBar extends React.Component {


    render() {
        return (
            <div style={styles.infobar} className="container" >
                <div className="row">
                    
                    <div className="col-sm-3    "> {this.props.description} </div>
                    <div className="col-sm-1" >{this.props.items.length}</div>
                </div>
            </div>
        )
    }
}

const styles = {
    infobar: {
        color: 'rgba(230, 230, 255, 0.8)', //255, 77, 166
        textAlign: 'left',
        fontFamily: 'Permanent Marker',
        fontSize: '1.7em',
        marginTop: '20px',
        marginBottom: '20px',
        
    }

};

export default InfoBar;