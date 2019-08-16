import React, {Component} from 'react'; 

export default class Exports extends Component {
    render() {
        return (
            <div className="App">
            <h1>Why Do we use export?</h1>
            <p>Exports are like the root file. If you are looking to export multiple 
            components from a single file the declaration should be export.</p>
            </div>
        );
    }
}

/**
 When using Exports they work well for building many components in a single file. So we can for example
 take a component which could involve the properties of an individual such as a profile picture, their name,
 and then maybe lets add a comment and a date of that comment. So now we have one component. What if we wanted 
 to expand on this single component and add 5 others? That's where we would look to utilize our Exports, that way in our 
 App.js we could add a simple render() and add our <Exports /> and render all of all components and make for easy reusabilty.
 */