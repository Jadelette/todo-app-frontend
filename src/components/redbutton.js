import React from 'react';

class RedButton extends React.Component{

    render() {
        return (
          <button style={styles.delete} type="button" onClick={this.props.clickHandler}>{this.props.label} </button>
        )
}
}

const styles = {
    delete : {
       backgroundColor: 'rgb(102, 0, 51)',
       color: 'rgba(240, 241, 229, 0.8)',
       borderRadius: '1em',
       paddingLeft: '0.5em',
       paddingRight: '0.5em',
       fontFamily: 'Permanent Marker',
       fontSize: '0.7em'
    }

};

export default RedButton;