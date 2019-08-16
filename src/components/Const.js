import React from 'react';

const Consts = props => {
    return (
        <form onSubmit={props.addName}>
            <p>Current Student: {props.displayName}</p>
            <input value={props.currentName}
            onChange={props.changeName}
            name="mName"
            placeholder="Name..." />
        </form>
    )
}
export default Consts;

/**
 When we use Consts these work great for passing props into appropriate places. Since React
 elements are cheap to make a simple const element = <h1> Hello World!</h1> allows us to take
 this element and render it directly on to the page. If I were to replace the form element above 
 with the const element I created instead of seeing Current Student: and a input for the name we
 would simply see Hello World! because our App.js is rendering our const.
 */

 //Good.  Const are great for buttons, forms, headers, etc.