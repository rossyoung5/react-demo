import React from 'react';

import styles from "./MessageInput.css";

class MessageInput extends React.Component {
    render() {
        return (
            <div className={styles.message_input}>
                <label htmlFor="#myinput">Your Name</label>
                <input id="myinput" type="text"/>
                <button>Send</button>
            </div>
        );
    }
}

export default MessageInput;