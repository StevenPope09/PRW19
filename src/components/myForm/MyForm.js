import React from 'react';
import MyBtn from '../buttons/MyBtn';
//import UserImage from '../../images/UserPic.png';

//This should be more dynamic. So you can reuse it. Change it to a const var and use props. Pass the props to the parent.

//You can import the component module from the react library. 
//Ex. class Post extends Component {}
class MyForm extends React.Component {
    state = { text: "" }

    render() {
        return (
            <div style={styles.container}>
                <form
                    style={styles.myForm}>
                    
                    <input type='text'
                        style={styles.input}
                        name='text'
                        value={this.state.text}
                        onChange={(e) => {
                            let text = e.target.value;
                            this.setState({ text })
                            console.log(text)
                        }}
                        placeholder="Create Post" />
                        <p style={styles.mind}>What's on your mind Steven? </p>
                    <p style={styles.typing}>You are typing: {this.state.text} </p>
                    
                    <MyBtn btnText="Post" onClick={(e) => {
                        e.preventDefault()
                        //Added extra =
                        if (this.state.text === "") {
                            alert("Please fill out fields before submitting post!")
                            return
                        }
                        this.props.onSubmit(this.state.text, "Steven")
                        //Mutating the state. You dont want to do that.
                        //this.state.text = ""
                    }} />
                </form>
            </div>

        )
    }

}

//You should use this form.  React is all about small components fo reusable code.

// const MyForm = props => {
//     return (
//         <form
//             style={styles.MyForm}
//             onSubmit={props.addPost}>
//             <input type='text'
//                 style={styles.input}
//                 name='text'
//                 value={props.text}
//                 onChange={props.changeMeMan}
//                 placeholder="Name" />
//             <p>New Item: {props.myInput}</p>
//             <MyBtn btnText="Add" />
//         </form>
//     )
// }

export default MyForm;

const styles = {
    myForm: {
        height: '100%',
        width: '90%',
        margin: '1%',
        padding: '2%',
        backgroundColor: '#A1A6B4',
        color: 'rgb(163,173,194)',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '3%',
        fontFamily: 'Times New Roman, Times, serif' 
    },
    mind: {
        color: 'black',
        fontSize: '1.5em'
    },
    input: {
        height: '75px',
        width: '100%',
        fontSize: '1.50em',
        fontFamily: 'Times New Roman, Times, serif',
        borderRadius: '15px',
        border: '.5px solid black',
        paddingLeft: '7px'

    },
    typing: {
        color: 'rgba(0,0,0,.5)',
        fontFamily: 'Times New Roman, Times, serif'
    }
    
}