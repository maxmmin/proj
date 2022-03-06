import React, { useState } from "react";
import s from './fastnav.module.scss'
import addIc from './img/addic.svg'
import PopMenu from './components/PopMenu'
import { useModal } from "../Modal/modalContext";


function Fastnav () {

        const [isMenuActive, setMenuActive] = useState(false)
        const modal = useModal()
        
        
    
    return (
        <nav className={s.nav} style={{userSelect: 'none'}}>

            <div className={isMenuActive?`${s.addCont} ${s.addContActive}`:s.addCont}  onClick={()=> {
            setMenuActive((prev)=>{return !prev})
            if (modal.modalState.isShown) {
            modal.setModalState((prev)=>{var x = {}; for (var k in prev) { x[k]=prev[k]} x.isShown=false; return x})
            }
        }
            }>
                <img src={addIc} alt="" className={s.addIco} />
                < PopMenu isActive={isMenuActive}/>
                
            </div>

            


        </nav>
    )
}

export default Fastnav