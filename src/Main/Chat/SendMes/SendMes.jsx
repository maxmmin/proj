import React from "react";
import s from './send.module.scss'
import content from './img/content.svg'
import voice from './img/voice.svg'
import send from './img/send.svg'

function SendMes () {
    
   
        
            
    return (
        <div className={s.bottomDiv}>
           <img src={content} alt="" className={s.add} />

            <img src={voice} alt="" className={s.voice} />

            <div className={s.messageCont}>
               <div className={s.messageArea}   contentEditable='true' dir="auto"></div>
            </div>


            <img src={send} alt="" className={s.send} />
        </div>
    )
}

export default SendMes