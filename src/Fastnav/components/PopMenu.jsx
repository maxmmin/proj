import React from "react";
import addContIc from '../img/addCont.png'
import addChatIc from '../img/addChat.png'
import { CSSTransition } from 'react-transition-group';
import './PopupAnim.scss'


export default function PopMenu ({isActive}) {

    function ActionItemDiv ({imgSrc, imgStyle}) {
        return (
        <div className="itemActionBlock" onClick={(e)=>{e.stopPropagation();console.log('clicked')}} style={{
            width: '41.5px',
            height: '41.5px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'

            
        }}>
            <img src={imgSrc} alt=""  className="addContact"  style={imgStyle}/>
        </div>
        )
    } 


    
    return (
        
        <div className={isActive?'popMenu active':'popMenu'} style={
            {
                width: '100%',
                height: '95px',
                justifyContent: "space-between",
                position: 'absolute',
                bottom: '80px',
                display: "flex",
                flexDirection: "column",
                perspective: '500px',
                cursor: 'default'
                
            }
        }>

            < ActionItemDiv imgSrc={addContIc}  imgStyle={{
                width: '20px',
                opacity: '0.5',
                paddingBottom: '3px',
                
                
            }} />

            < ActionItemDiv imgSrc={addChatIc}  imgStyle={{
                            width: '20px',
                            opacity: '0.5',
                            paddingBottom: '3px'
                            
                        }} />
            
            
            </div>
       
    )

   
    
}