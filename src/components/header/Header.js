import React from 'react'
import logo from '../../images/logo.png'
import { FaBell } from 'react-icons/fa';
import UserImage from '../../images/UserPic.png';
import {NavLink} from 'react-router-dom'


//Remove extra spacing from header
const Header = props => {
    return (
        <header style={styles.header}>
            <NavLink to="/"><img src={logo} alt='Logo' style={styles.logo} /></NavLink>
            <h1 style={styles.h1}>{props.pgTitle}</h1>
            <div style={styles.headNot}>
                {/* It does not like whe you use picture in the alt tag.Throws a warning. */}
                <NavLink to="/Profile"><img src={UserImage} alt="user" style={styles.userImg}/></NavLink>
                {/* If you use the image you dont need the FaCog icon. */}
                {/* <NavLink to="/Profile" style={styles.anchor}><FaCog /></NavLink> */}
                <FaBell />
            </div>
        </header>
    )
}
export default Header

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'black',
        width: '100%',
        backgroundColor: '#FAE1DF',
        fontFamily: 'Times New Roman, Times, serif',
        paddingTop: '15px',
        paddingBottom: '15px',
        
    },
    logo: {
        //Make it responsive
         width: '80px',
        height: '80px',
        padding: '2.5%',
        marginTop: '5px',
        cursor: 'pointer',
        margin: '5px'
    },
    // nav: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     color: 'black',
    //     width: '100%',
    //     marginLeft: '1.5%',
    //     marginBottom: '1.5%'

    // },
    // h1: {
    //     marginLeft: '1.5%',
    //     //marginBottom: '3%'
    // },
    // notify: {
    //     position: 'relative',
    //     left: '90%',
    //     top: '-180px',
    //     display: 'inline',
    //     marginRight: '30px',
    //     cursor: 'pointer'

    // },
    headerNot: {
        display: 'flex',
        flexDirection: 'column',
       

    },
    //Make it responsive
    userImg: {
        height: '65%',
        width: '35%',
        cursor: 'pointer'
    }
}