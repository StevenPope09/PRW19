import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NewsFeed from '../../App'
import Messages from '../pages/Messages'
import Watch from '../pages/Watch'

class Main extends Component {
    render() {
        return (
            <section>
                <Route exact path='/News-Feed' component={NewsFeed} />
                <Route exact path='/Messages' component={Messages} />
                <Route exact path='/Watch' component={Watch} />
            </section>
        )
    }
}

export default Main