import React from 'react'
import Nav from '../nav/Nav'
import logo from '../../images/logo.png'
import { FaCog, FaBell } from 'react-icons/fa';

const Header = props => {
    return (
        <header style={styles.header}>
            <img src={logo} alt='Logo' style={styles.logo} />
            <h1 style={styles.h1}>{props.pgTitle}</h1>
            <span style={styles.headNot}>
                <p style={styles.notify}><FaBell /> </p>
                <p style={styles.notify}><FaCog /> </p>
            </span>

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
        fontFamily: 'Times New Roman, Times, serif'

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
        //marginBottom: '3%'
    },
    notify: {
        position: 'relative',
        left: '95%',
        top: '-180px',
        display: 'inline',
        marginRight: '10px',

    },
    headerNot: {
        display: 'flex',
        flexDirection: 'row'
    }
}