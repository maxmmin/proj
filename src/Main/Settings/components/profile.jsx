import React from "react";
import s from '../settings.module.scss'

function Profile () {
    
    return (
        <div className={s.profile}>
            
            <div className={s.avatar}></div>

            <h3 className={s.userName}>Default User</h3>

            <h4 className={s.tagName}>@defuser</h4>

            <p className={s.description}>I love animals!</p>

        </div>
    )
}

export default Profile