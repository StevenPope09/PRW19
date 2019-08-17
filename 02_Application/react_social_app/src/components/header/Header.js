import React from 'react'
import Nav from '../nav/Nav'
import logo from '../../images/logo.png'

const Header = props => {
    return (
        <header style={styles.header}>
            <img src={logo} alt='Logo' style={styles.logo} />
            <h1 style={styles.h1}>{props.pgTitle}</h1>

            <nav style={styles.nav}>
                <Nav />
            </nav>
        </header>
        
    )
}
export default Header

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'column',
        color: 'black',
        width: '100%',
        backgroundColor: '#279AF1',

    },
    logo: {
        width: '100px',
        height: '110px',
        marginLeft: '1.5%',
        marginTop: '5px'
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        color: 'black',
        width: '100%',
        marginLeft: '1.5%',
        marginBottom: '1.5%'
        
    },
    h1: {
        marginLeft: '1.5%',
        marginBottom: '3%'
    }
}