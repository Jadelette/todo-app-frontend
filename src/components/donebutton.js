import React from 'react';

class DoneButton extends React.Component{

    render() {
        return (
        <div  class="row">
          <button style={styles.done} type="button">done</button>
        </div>

        )
}
}

const styles = {
    done : {
       backgroundColor: 'darkgreen',
       color: 'rgba(240, 241, 229, 0.8)',
       borderRadius: '1em',
       paddingLeft: '0.5em',
       paddingRight: '0.5em',
       fontFamily: 'Garamond',
       fontSize: '0.7em',
    }

};

export default DoneButton;