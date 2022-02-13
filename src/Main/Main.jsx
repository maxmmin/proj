import React from "react";
import Chat from "./Chat/Chat";
import s from './main.module.scss'

function Main () {
    return (
        <main className={s.content}>
            <Chat />
        </main>
    )
}

export default Main