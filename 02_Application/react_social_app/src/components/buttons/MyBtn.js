import React from 'react';
//import '/MyBtn.css';


//Dummy Components
const MyBtn = props => {
    return (
        <button className="prtyBtn" style={styles.myBtn}>
            {props.btnText}
        </button>
    )
}

const styles= {
    myBtn: {
        padding: '3%',
        color: 'rgb(163,173,194)',
        margin: '5%',
        fontSize: '1.23em',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '10%'
    }
}

export default MyBtn;