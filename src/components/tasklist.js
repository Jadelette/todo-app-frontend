import React from 'react';
import Task from './task';

class Tasklist extends React.Component{

    render() {
        return (
        <div  class="container">
        <Task />
        </div>
        )
}
}

/*const styles = {
    header : {
        color: 'rgb(85, 107, 47, 0.94)',
        textAlign: 'center',
        backgroundColor: 'rgba(240, 241, 229, 0.8)',
        fontFamily: 'Great Vibes',
        padding: '0.2em',
        fontSize: '5em',
        opacity: '50%',
        border: '0.07em',
        borderStyle: 'solid', 
        borderRadius: '0.5em'
        
    }

};*/

export default Tasklist;