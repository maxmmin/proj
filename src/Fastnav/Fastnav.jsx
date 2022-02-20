import React, { useEffect, useState } from "react";
import s from './fastnav.module.scss'
import addIc from './img/addic.svg'

function Fastnav () {

    const [choice, setChoice] = useState()
    

    useEffect(()=> {
        console.log('rendered '  + choice)
    }, [choice])
    return (
        <nav className={s.nav}>
            <div className={s.addCont}>
                <img src={addIc} alt="" className={s.addIco} />
            </div>

            <h5>Choice: {choice}</h5>
            <button onClick={()=>setChoice(1)}>1</button><button onClick={()=>setChoice(2)}>2</button><button onClick={()=>setChoice(3)}>3</button>
        </nav>
    )
}

export default Fastnav