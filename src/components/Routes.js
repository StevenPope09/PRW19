import React from 'react';
import { Route } from "react-router-dom";
import NewsFeed from '../components/pages/NewsFeed';
import Messages from '../components/pages/Messages';
import Watch from '../components/pages/Watch';
import Profile from '../components/pages/Profile';
import { makeStyles } from '@material-ui/core/styles';
//I would add the background color here.
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor: 'green',
        maxWidth: 900
    },
}));

function Routes(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* Add a route here for when page initally loads */}
            <Route exact path='/' component={NewsFeed} />
            <Route exact path='/NewsFeed' component={NewsFeed} />
            <Route exact path='/Messages' component={Messages} />
            <Route exact path='/Watch' component={Watch} />
            <Route exact path='/Profile' component={Profile} />
        </div>
    )
}
export default Routes;

