import React from "react";
import Chat from "./Chat/Chat";
import s from './main.module.scss';
import {Route, Routes} from "react-router-dom"
import Settings from "./Settings/settings";

function Main () {
    return (
        <main className={s.content}>
         <Routes>
                <Route exact path="/proj" element={<Chat/>}></Route>
                <Route exact path="/proj/settings" element={<Settings/>}></Route>
         </Routes> 

        </main>
    )
}

export default Main