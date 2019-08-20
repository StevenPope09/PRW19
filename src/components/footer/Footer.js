import React from 'react'
import { FaHome } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            {/*Change this to your info.*/}
            <FaHome /> 2019 CS. All Rights reserved.       
        </footer>
    )
}
export default Footer

const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '0.65em',
        padding: '1%',
        justifyContent: 'center'
    }
}