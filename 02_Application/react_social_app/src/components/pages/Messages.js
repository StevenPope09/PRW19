import React, { useState } from 'react'

function UserMessage({ message, index }) {
    return <div className="messages" style={styles.messages}>

        <span style={styles.name}>
            {message.userName}
        </span>
        <span style={styles.text}>
            {message.text}
        </span>
        <span style={styles.date}>
            {message.date}
        </span>


    </div>
}

function Messages() {
    const [messages, setMessages] = useState([
        {
            text: 'Hey man, did you happen to get that info we need for the fire chief? He was asking for it yesterday.',
            userName: 'Cory Yaws',
            date: '08/24/2019'
        },
        {
            text: 'CALL ME ASAP!!!! I have some BIG news for you!',
            userName: 'Julie Boberts',
            date: '08/20/2019'
        },
        {
            text: 'Hey! Remember that tomorrow is your day to bring in dinner for the shift. Burgers sound great! See ya then bud',
            userName: 'John Smith',
            date: '08/13/2019'
        },
        {
            text: 'You still excited about deer hunting this year? I have the land ready to go! Be sure to get your rifle sighted in',
            userName: 'William Dodge',
            date: '08/10/2019'
        }
    ])

    return (

        <section style={styles.section}>
            <h2 style={styles.title}>Messages</h2>
            {messages.map((message, index) => (
                <UserMessage key={index} index={index} message={message} />
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
        padding: '4%',
        marginTop: '1%',
        fontFamily: 'Times New Roman, Times, serif',


    },
    messages: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid black',
        borderRadius: '15px',
        padding: '15px',
        marginBottom: '2%',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    name: {
        marginBottom: '5%',
        fontSize: '2.0em',
        fontStyle: 'bold',
        fontFamily: 'Times New Roman, Times, serif'
    },
    text: {
        marginBottom: '5%',
        fontSize: '1.25em',
        fontFamily: 'Times New Roman, Times, serif'
    },
    date: {
        fontSize: '.95em',
        color: '#000',
        fontFamily: 'Times New Roman, Times, serif'
    },
    title: {
        fontSize: '2.5em',
        marginLeft: '40%',
        marginBottom: '2.5%',
        fontFamily: 'Times New Roman, Times, serif'
    }

}

export default Messages