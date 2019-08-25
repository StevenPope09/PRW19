import React from 'react'
//import MyBtn from '../buttons/MyBtn'
import {NavLink} from 'react-router-dom'


class Nav extends React.Component {
    render() {
        return (
            <nav style={styles.container}>
                <NavLink to="/News-Feed" style={styles.anchor}>News Feed</NavLink>
                <NavLink to="/Messages" style={styles.anchor}>Messages</NavLink>
                <NavLink to="/Watch" style={styles.anchor}>Watch</NavLink>
            </nav>
        )
    }
}

export default Nav

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
        
    },
    anchor: {
        marginBottom: '10px',
        color: 'black'
    }
}