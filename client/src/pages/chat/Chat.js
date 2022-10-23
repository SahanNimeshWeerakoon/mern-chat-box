import React from 'react'
import styles from './style.module.css'
import MessageRecieved from './Messages'

const Chat = ({ socket }) => {
    return (
        <div className={styles.chartContainer}>
            <div>
                <MessageRecieved socket={socket} />
            </div>
        </div>
    )
}

export default Chat