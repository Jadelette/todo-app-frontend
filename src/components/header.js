import React from 'react';

class Header extends React.Component{

    render() {
        return (<h1 style={styles.header}>My Tasks</h1>)
}
}

const styles = {
    header : {
        color: "green"
    }
};

export default Header;