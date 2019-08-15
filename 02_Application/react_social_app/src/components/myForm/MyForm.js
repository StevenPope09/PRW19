import React from 'react';
import MyBtn from '../buttons/MyBtn';


const MyForm = props => {
    return (
        <form
        style={styles.MyForm}
        onSubmit={props.addName}>
        
        <input
        style={styles.input}
        placeholder="Name" />
        <MyBtn btnText="Add" />
        </form>
    )
}

export default MyForm;

const styles= {
    myForm: {
        margin: '1%',
        padding: '1%',
        backgroundColor: 'rgba(163,173,194,0.5)',
        color: 'rgb(163,173,194)',
        display: 'flex',
        flexDirection:'column'
    }
}