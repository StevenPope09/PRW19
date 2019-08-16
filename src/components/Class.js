import React, {Component} from 'react'; 

class Classes extends Component {
    render() {
        return (
            <div className="App">
                <h1> Why Do we use classes?</h1>
                <p> Classes are larger and more powerful. They are known as
                smart components. They pass data through to the state </p>
            </div>    
        )
    }
}

/* 
We use classes in React when we want to expand on a function. The classes allow you to setState() where a normal function is
more of just passing in props and returning a React element. A class also allows an easier way to set a state. If you need a 
state in your component your choices are rather create a class which can setState() or you would have lift the state up to the parent
component and pass it down the fucntional component via props. To me creating a Class is the way to go when faced with these choices.

Jöch, D. (2019, March 29). Functional vs Class-Components in React. Retrieved August 11, 2019, from https://medium.com/@Zwenza/functional
-vs-class-components-in-react-231e3fbd7108
*/

export default Classes;

//Very good!