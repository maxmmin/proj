import React from "react";
import s from './chat.module.scss'
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatWindow from "./ChatWindow/ChatWindow";
import SendMes from "./SendMes/SendMes";

function Chat () {

    

    return (
        <div className={s.chat}>
            <ChatHeader/>
            <ChatWindow/>
            <SendMes/>
        </div>
    )
}

export default Chat