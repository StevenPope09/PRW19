import React from 'react';
import MyBtn from '../buttons/MyBtn';
import { FaTimes, FaBlackTie } from 'react-icons/fa';


class Post extends React.Component {
    render() {
        return (
            <div style={styles.post}>
                <span>
                    <button style={styles.button} onClick={() => {
                        this.props.onDelete(this.props.id)
                    }}><FaTimes /></button>
                </span>
                <span style={styles.name}>
                    {this.props.userName}
                </span>
                <span style={styles.text}>
                    {this.props.postText}
                </span>
                <span >
                    <img style={styles.image} src={this.props.postImage}/>
                </span>
                <span style={styles.feedback}>
                    <p style={styles.pTag}>Like</p>
                    <p style={styles.pTag}>|</p>
                    <p style={styles.pTag}>Comment</p>
                    <p style={styles.pTag}>|</p>
                    <p style={styles.pTag}>Share</p>
                </span>

            </div>
        )
    }

}

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

export default Post;

const styles = {
    post: {
        height: '100%',
        width: '60%',
        margin: '1%',
        padding: '1%',
        backgroundColor: '#9BC4BC',
        color: 'rgb(163,173,194)',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20%'
    },
    button: {
        marginLeft: '1%',
        float: 'right'
    },
    text: {
        color: 'black',
        height: '50px',
        width: '75%',
        marginBottom: '20px'

    },
    name: {
        color: 'black',
        fontSize: '2.0em',
        marginBottom: '20px',
        marginTop: '20px'

    },
    image: {
        width: '100%'
    },
    feedback: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        border: '1px solid black',
        marginTop: '20px'
    },
    pTag: {
        fontSize: '1.5em',
        color: 'black',
        
    }

}