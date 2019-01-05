import React from 'react';
import Task from './task';

class Tasklist extends React.Component{

    render() {
        return (
        <div  class="container">
        <Task />
        <Task />
        </div>
        )
}
}


export default Tasklist;