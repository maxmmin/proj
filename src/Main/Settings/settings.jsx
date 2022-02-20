import React from "react";
import Profile from "./components/profile";
import s from './settings.module.scss'

function Settings () {
    return (
        <div sx={s} className={s.settingsCont}>
            <Profile />
            
        </div>
    )
}

export default Settings