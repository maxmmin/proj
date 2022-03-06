import React, { useEffect } from "react";

import './modal.scss'
import { useModal } from "./modalContext";

export default function Modal () {

    const modal = useModal()
    console.log(modal)

    function getAnim() {
        if (modal.modalState.mode===1) {
            return 'addFriendAnim'
        }
    }

    
    return (
        

       
      
            <>
            { (modal.modalState.isShown===true&&modal.modalState.mode===1)&&
                
            
                <div className={getAnim()}>
                
                <div className="modalWindow">
                <div className="friendIDcont">
                <input type="text" autoFocus={true} value='#' className="friendID" />
                <div className="addFriendButton"></div>
                </div>
                </div>      

                 </div>     

            }
        </>

       
        
        )
}