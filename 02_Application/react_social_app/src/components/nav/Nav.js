import React from 'react'
import MyBtn from '../buttons/MyBtn'

const Nav = () => {
    return (
        <nav style={styles.container}>
            <a href="" style={styles.anchor}>News Feed</a>
            <a href="" style={styles.anchor}>Messages</a>
            <a href="" style={styles.anchor}>Watch</a>
        </nav>
    )
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