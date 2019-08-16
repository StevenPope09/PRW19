import React from 'react';
import MyBtn from '../buttons/MyBtn';

const Search = props => {
    return (
        <form 
            style={styles.searchForm}
            onSubmit={props.searchMe}>
            <input 
                style={styles.input}
                placeholder="Search..." />
            <MyBtn btnText="Search" />
        </form>
    )
}

export default Search

const styles = {
    searchForm: {
        padding: '1%',
        backgroundColor: 'rgba(163,173,194,0.5)',
        color: 'rgb(163,173,194)',
        
    }
    
}