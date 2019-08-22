import React from 'react';
//import '/MyBtn.css';


//Dummy Components
const MyBtn = props => {
    return (
        <button onClick={props.onClick} className="prtyBtn" style={styles.myBtn}>
            {props.btnText}
        </button>
    )
}

const styles = {
    myBtn: {
        
        color: 'black',
        marginLeft: '.5%',
        fontSize: '1.5em',     
        cursor: 'pointer',
        width: '8%',
        height: '40px',
        fontFamily: 'Times New Roman, Times, serif'
        
        
//Remove the spacing


    }
}

export default MyBtn;