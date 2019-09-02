import React from 'react'
import logo from '../../images/logo.png'
import { FaSignOutAlt } from 'react-icons/fa';
import UserImage from '../../images/UserPic.png';
import {NavLink} from 'react-router-dom'
import { AppBar, Toolbar, Avatar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'no-wrap',
        alignItems: 'center'
    },
    logo: {
        //Make it responsive
        width: 80,
        height: 80,
        marginLeft: 25,
        padding: 10,
        //marginTop: '5px',
        cursor: 'pointer',
        // margin: '5px'
    },
    rtNav:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        marginRight: 25,
       

    }
});

//You can use appBar here from Material UI
//Remove extra spacing from header
const Header = props => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.header}>
                <NavLink to="/Messages">
                    <img src={logo} alt='Logo' className={classes.logo} />
                </NavLink>
                <Typography variant="h1" component="h2">
                    {props.pgTitle}
                </Typography>
                <div className={classes.rtNav}>
                    {/* It does not like whe you use picture in the alt tag.Throws a warning. */}
                    <NavLink to="/Profile">
                        {/* You can make this an Avatar now using Material UI */}
                    <Avatar alt="Remy Sharp" src={UserImage} className={classes.avatar} />
                        {/* <img src={UserImage} alt="user" style={styles.userImg}/> */}
                    </NavLink>
                    {/* If you use the image you dont need the FaCog icon. */}
                    {/* <NavLink to="/Profile" style={styles.anchor}><FaCog /></NavLink> */}
                    <NavLink to="/NewsFeed">
                        <IconButton
                            edge="end"
                            className={classes.menuButton}
                            color="secondary"
                        >
                            <FaSignOutAlt />
                        </IconButton>
                    </NavLink>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Header

// const styles = {
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
    // headerNot: {
    //     display: 'flex',
    //     flexDirection: 'column',
    // },
    //Make it responsive
    // userImg: {
    //     height: '55%',
    //     width: '35%',
    //     cursor: 'pointer'
    // }
// }