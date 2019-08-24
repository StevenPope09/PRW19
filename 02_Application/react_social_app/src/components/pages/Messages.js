import React, { useState } from 'react'

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

        <section>
            <p>Testing Messages</p>
        </section>

    )
}

const styles = {

}

export default Messages