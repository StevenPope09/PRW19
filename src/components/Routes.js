import React from 'react';
import { Route } from "react-router-dom";
import NewsFeed from '../components/pages/NewsFeed';
import Messages from '../components/pages/Messages';
import Watch from '../components/pages/Watch';
import Profile from '../components/pages/Profile';

const Routes = () => {
    return (
        <div>
            {/* Add a route here for when page initally loads */}
            <Route exact path='/NewsFeed' component={NewsFeed} />
            <Route exact path='/Messages' component={Messages} />
            <Route exact path='/Watch' component={Watch} />
            <Route exact path='/Profile' component={Profile} />
        </div>
    )
}
export default Routes;

