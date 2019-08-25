import React, { useState } from 'react'

function WatchList({ watchItem, index }) {
    return <div className="messages" style={styles.messages}>
        <span style={styles.name}>
            {watchItem.watchName}
        </span>
        <span style={styles.text}>
            {watchItem.text}
        </span>
        <span style={styles.date}>
            {watchItem.date}
        </span>


    </div>
}

function Watch() {
    const [watchItems, setWatch] = useState([
        {
            text: 'FLASH SALE!!! Be on the lookout for PC parts',
            watchName: '*---IBuyPower---*',
            date: '08/24/2019'
        },
        {
            text: '2019 Finals September 29th!!! Get your tickets now',
            watchName: '*---Overwatch League---*',
            date: '08/20/2019'
        },
        {
            text: 'New monthly price $9.99, this price will not last for long!',
            watchName: '*---Code Academy---*',
            date: '08/13/2019'
        },
        {
            text: 'We have updated our latest logos for our premium members. What are you waiting for? Get to work!',
            watchName: '*---Flat Icon---*',
            date: '08/10/2019'
        }
    ])

    return (

        <section style={styles.section}>
        <h2 style={styles.title}>Watch List</h2>
            {watchItems.map((watchItem, index) => (
                <WatchList key={index} index={index} watchItem={watchItem} />
            ))}


        </section>

    )
}

const styles = {
    section: {
        display: 'block',
        alignContent: 'center',
        width: '65%',
        backgroundColor: '#CFC7D2',
        marginLeft: '15%',
        padding: '5%',
        marginTop: '3%',
        fontFamily: 'Times New Roman, Times, serif',


    },
    messages: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid black',
        borderRadius: '15px',
        padding: '15px',
        marginBottom: '1.5%',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    name: {
        marginBottom: '.5%',
        fontSize: '2.0em',
        fontStyle: 'bold'
    },
    text: {
        marginBottom: '.5%',
        fontSize: '1.25em'
    },
    date: {
        fontSize: '.95em',
        color: '#000',
        
    },
    title: {
        fontSize: '2.5em',
        marginLeft: '40%',
        marginBottom: '2.5%',
        fontFamily: 'Times New Roman, Times, serif'
    }

}

export default Watch