import React from 'react';
//import MyBtn from '../buttons/MyBtn';
import { FaTimes, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';


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
                    <img style={styles.image} src={this.props.postImage} />
                </span>
                <span style={styles.feedback}>
                    <p style={styles.pTag}><FaThumbsUp /> Like</p>
                    <p style={styles.bar}>|</p>
                    <p style={styles.pTag}><FaComment  /> Comment</p>
                    <p style={styles.bar}>|</p>
                    <p style={styles.pTag}><FaShare /> Share</p>
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
        width: '90%',
        margin: '1%',
        padding: '2%',
        backgroundColor: '#4F5165',
        
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '3%',
        fontFamily: 'Times New Roman, Times, serif'
    },
    button: {
        marginLeft: '1%',
        float: 'right'
    },
    text: {
        color: 'white',
        height: '50px',
        width: '75%',
        marginBottom: '20px',
        fontSize: '1.5em'

    },
    name: {
        color: 'white',
        fontSize: '2.0em',
        fontWeight: 'bold',
        marginBottom: '40px',
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
        color: 'white',
        cursor: 'pointer'
        
    },
    bar: {
        fontSize: '1.5em',
        color: 'white',
        
    },

}