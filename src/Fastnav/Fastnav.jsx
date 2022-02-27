import React, { useState } from "react";
import s from './fastnav.module.scss'
import addIc from './img/addic.svg'
import PopMenu from './components/PopMenu'
import {CSSTransition} from 'react-transition-group'

function Fastnav () {

        const [isMenuActive, setMenuActive] = useState(false)
        
    
    return (
        <nav className={s.nav} style={{userSelect: 'none'}}>

            <div className={isMenuActive?`${s.addCont} ${s.addContActive}`:s.addCont}  onClick={()=>setMenuActive((prev)=>{return !prev})}>
                <img src={addIc} alt="" className={s.addIco} />
                < PopMenu isActive={isMenuActive}/>
                
            </div>

            


        </nav>
    )
}

export default Fastnav