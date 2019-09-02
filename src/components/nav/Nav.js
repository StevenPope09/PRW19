import React from 'react'
//import MyBtn from '../buttons/MyBtn'
import { NavLink } from 'react-router-dom'
//Using Material UI
//import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 260,
        //backgroundColor: theme.palette.background.paper,
        marginLeft: 25,
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
}));

function Nav() {  
    const classes = useStyles();
    return (
        <nav className={classes.root}>
            <Typography variant="subtitle1" gutterBottom>
                Using Links From Material UI
            </Typography>

            <Link component={RouterLink} to="/NewsFeed" color="secondary" underline="none">
                NewsFeed
            </Link>
            <Link component={RouterLink} to="/Messages" color="secondary">
                Messages
            </Link>
            <Link component={RouterLink} to="/Watch" color="secondary">
                Watch
            </Link>

            <Typography variant="subtitle1" gutterBottom>
                Using just React Router
            </Typography>

            <NavLink to="/" style={styles.anchor}>News Feed</NavLink>
            <NavLink to="/Messages" style={styles.anchor}>Messages</NavLink>
            <NavLink to="/Watch" style={styles.anchor}>Watch</NavLink>

            <div>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="News Feed" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Messages" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Watch" />
                </ListItem>
            </List>
            </div>
        </nav>
    )
}

export default Nav

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        

    },
    anchor: {
        marginBottom: '10px',
        color: 'black'
    }
}