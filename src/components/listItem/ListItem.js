import React from 'react'


//This should be your post component
const ListItem = props => {
    return(
        <li key={props.id} style={styles.list}>
            <span>{props.val.gName}</span>
            <span>{props.val.gPrice}</span>
            <button onClick={props.delMe}>Delete</button>
        </li>
    )
}

export default ListItem

const styles= {
    list: {
        padding: '0.5%',
        marginTop: '0.5%',
        fontSize: '1.25em',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
}