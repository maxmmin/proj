import React, { useRef } from "react";
import addContIc from '../img/addCont.png'
import addChatIc from '../img/addChat.png'
import './PopupAnim.scss'
import { useModal } from "../../Modal/modalContext";



export default function PopMenu ({isActive}) {

    const popRef = useRef()

    function ActionItemDiv ({imgSrc, imgStyle, onClick}) {
        return (
        <div className="itemActionBlock" onClick={onClick} style={{
            width: '41.5px',
            height: '41.5px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'

            
        }}>
            <img src={imgSrc} alt=""  className="addContact" style={imgStyle}/>
        </div>
        )
    } 

    const modal = useModal()

    
    return (
        
        <div ref={popRef} className={isActive?'popMenu active':'popMenu'} style={
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
        }
        
        onClick={(e)=>e.stopPropagation()}
        >

            < ActionItemDiv imgSrc={addContIc}
              imgStyle={{
                width: '20px',
                opacity: '0.5',
                paddingBottom: '3px',
                
                
            }} 
            onClick={(e)=>{e.stopPropagation(); popRef.current.classList.remove('active'); modal.setModalState((prev)=>{
                var x = {}; for (var k in prev) {x[k]=prev[k]; x.isShown = !x.isShown; x.mode=1; return x}
            })}}
            />

            < ActionItemDiv imgSrc={addChatIc}  imgStyle={{
                            width: '20px',
                            opacity: '0.5',
                            paddingBottom: '3px'
                            
            }} 
            
            onClick={(e)=>{e.stopPropagation(); popRef.current.classList.remove('active'); modal.setModalState((prev)=>{
                var x = {}; for (var k in prev) {x[k]=prev[k]; x.isShown = !x.isShown; x.mode=2; return x}
            })}}

            />
            
            
            </div>
       
    )

   
    
}