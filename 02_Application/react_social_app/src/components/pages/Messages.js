import React, { useState } from 'react'

function UserMessage({ message, index }) {
    return <div className="messages" style={styles.messages}>
        <span style={styles.info}>
            {message.userName}
        </span>
        <span style={styles.info}>
            {message.text}
        </span>


    </div>
}

function Messages() {
    const [messages, setMessages] = useState([
        {
            text: 'Testing',
            userName: 'Steven'
        },
        {
            text: 'Testing',
            userName: 'Julie'
        },
        {
            text: 'Testing',
            userName: 'John'
        },
        {
            text: 'Testing',
            userName: 'William'
        }
    ])

    return (

        <section style={styles.section}>
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
        padding: '3%',
        marginTop: '3%'


    },
    messages: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid red',
        padding: '15px',
        marginBottom: '2%',
        width: '100%',
        height: '150px'
    }

}

export default Messages