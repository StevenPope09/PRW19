import React from 'react';
import MyBtn from '../buttons/MyBtn';
import { FaSearch } from 'react-icons/fa';

const Search = props => {
    // console.log(props);
    return (
        <form
            style={styles.searchForm}
            onSubmit={props.searchMe}>
            <div style={styles.searchBar}>
                <div>
                    <input
                        value={props.search}
                        onChange={props.onSearchChange}
                        style={styles.input}
                        placeholder="Search..." />
                    <MyBtn btnText={<FaSearch />} />
                </div>

            </div>

        </form>
    )
}

export default Search

const styles = {
    searchForm: {
        marginTop: '1%',
        marginBottom: '5%',
        color: 'rgb(163,173,194)',
        border: '5px soild black'

    },
    // searchBar: {
    //     display: 'flex',
    //    justifyContent: 'right'
    // },
    input: {
        height: '35px',
        width: '40%',
        marginLeft: '19%',
        fontSize: '1.0em',
        
    },


}