import React from 'react';

class GoldButton extends React.Component{

    render() {
        return (
          <button style={styles.add} type="button" onClick={this.props.clickHandler}>{this.props.label}</button>
        )
    }
}

const styles = {
    add : {
       backgroundColor: 'rgb(153, 115, 0)',
       color: 'rgba(240, 241, 229, 0.8)', //204, 153, 0
       borderRadius: '1em',
       paddingLeft: '0.5em',
       paddingRight: '0.5em',
       fontFamily: 'Permanent Marker',
       fontSize: '0.7em',
       
    }

};

export default GoldButton;