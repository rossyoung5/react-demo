import React from 'react';

import style from "./App.css";

import MessageInput from "./MessageInput/MessageInput.jsx";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className={style.topTitle}>HI THERE!</h1>
                <MessageInput />
            </div>
        );
    }
}