import React, { useEffect } from "react";
import s from './navpanel.module.scss';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import noMadAFter from "./img/nomadlAfter.svg"




function Navpanel() {

  
  const [settingState, setSettingState] = useState(useLocation().pathname)
  
  const init = useEffect(() => {
    if(settingState==='/proj') {
      return 0
    }

    else if (settingState==='/proj/settings') {
      return 1
    }
  },[])

  const [counter, setCounter] = useState(init)
  
 useEffect(() => {
  setSettingState(counter?'/proj':'/proj/settings')
  
 }, [counter])

  function clickSetting () {    
    setCounter((prev)=>prev?0:1)
  }

  return (
    <nav className={s.nav}>
        <div className={s.navhead}>

            <div className={s.listNomCont}>
            <h3 className={s.listNom}>Nomad List</h3>
            <img src={noMadAFter} width='10px' h='7px' style={{marginLeft: '5px'}} alt="" className="noMadAfter" />
            </div>
           
           <Link style={{transform: `rotateZ(${counter?'0deg':'-180deg'})`}} className={s.settingsLink} to={settingState} onClick={clickSetting}>
            <svg className={s.settingsIc} viewBox="0 0 14 15"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  opacity={counter?1:0.6} viewBox="0 0 14 15" fillRule="evenodd" clipRule="evenodd" d="M13.5369 5.84992L12.4531 6.48092C12.5139 6.81222 12.5538 7.15072 12.5538 7.50011C12.5538 7.84934 12.5139 8.18784 12.4531 8.51916L13.5369 9.15012C13.9796 9.40783 14.1312 9.97861 13.8757 10.425L12.9501 12.0417C12.6945 12.488 12.1284 12.641 11.6857 12.3833L10.5907 11.7459C10.0792 12.1849 9.49763 12.5439 8.85126 12.7747V13.5666C8.85126 14.0821 8.43686 14.5 7.92558 14.5H6.07434C5.56322 14.5 5.14882 14.0821 5.14882 13.5666V12.7747C4.50245 12.5439 3.92091 12.1849 3.4093 11.7459L2.3144 12.3833C1.87163 12.641 1.30554 12.488 1.04994 12.0417L0.124336 10.425C-0.131248 9.97861 0.020448 9.40783 0.463136 9.15012L1.54694 8.51916C1.48619 8.18784 1.4463 7.84934 1.4463 7.50011C1.4463 7.15072 1.48619 6.81222 1.54694 6.48092L0.463136 5.84992C0.020448 5.59223 -0.131248 5.02132 0.124336 4.57504L1.04994 2.95842C1.30554 2.51196 1.87163 2.35894 2.3144 2.61677L3.4093 3.25421C3.92091 2.81499 4.50245 2.45618 5.14882 2.22547V1.43341C5.14882 0.917987 5.56322 0.500092 6.07434 0.500092H7.92558C8.43686 0.500092 8.85126 0.917987 8.85126 1.43341V2.22547C9.49763 2.45618 10.0792 2.81499 10.5907 3.25421L11.6857 2.61677C12.1284 2.35894 12.6945 2.51196 12.9501 2.95842L13.8757 4.57504C14.1312 5.02132 13.9796 5.59223 13.5369 5.84992ZM12.8427 4.63746L12.3799 3.82914C12.252 3.60606 11.969 3.52944 11.7477 3.65837L10.4618 4.40701C9.80906 3.66462 8.92702 3.13209 7.92558 2.9271V1.90004C7.92558 1.6423 7.71838 1.43341 7.4628 1.43341H6.5372C6.28152 1.43341 6.07434 1.6423 6.07434 1.90004V2.9271C5.07298 3.13209 4.19094 3.66462 3.5383 4.40701L2.2524 3.65837C2.03101 3.52944 1.74797 3.60606 1.62013 3.82914L1.15741 4.63746C1.02957 4.86068 1.10542 5.1462 1.32672 5.27499L2.61781 6.02659C2.46402 6.49078 2.37189 6.98356 2.37189 7.50011C2.37189 8.01652 2.46402 8.50924 2.61781 8.97354L1.32672 9.72507C1.10542 9.85402 1.02957 10.1394 1.15741 10.3626L1.62013 11.1708C1.74797 11.394 2.03101 11.4705 2.2524 11.3416L3.53822 10.5931C4.19094 11.3355 5.07298 11.868 6.07434 12.073V13.1001C6.07434 13.3578 6.28152 13.5666 6.5372 13.5666H7.4628C7.71838 13.5666 7.92558 13.3578 7.92558 13.1001V12.073C8.92702 11.868 9.80906 11.3355 10.4618 10.5931L11.7477 11.3416C11.969 11.4705 12.252 11.394 12.3799 11.1708L12.8427 10.3626C12.9705 10.1394 12.8946 9.85402 12.6733 9.72507L11.3822 8.97354C11.5361 8.50924 11.6281 8.01652 11.6281 7.50011C11.6281 6.98356 11.5361 6.49078 11.3822 6.02659L12.6733 5.27499C12.8946 5.1462 12.9705 4.86068 12.8427 4.63746ZM7 9.83328C5.72194 9.83328 4.68595 8.78867 4.68595 7.50011C4.68595 6.21127 5.72194 5.16666 7 5.16666C8.27798 5.16666 9.31405 6.21127 9.31405 7.50011C9.31405 8.78867 8.27798 9.83328 7 9.83328ZM7 6.10003C6.23322 6.10003 5.61162 6.72683 5.61162 7.50011C5.61162 8.2732 6.23322 8.89991 7 8.89991C7.76678 8.89991 8.38838 8.2732 8.38838 7.50011C8.38838 6.72683 7.76678 6.10003 7 6.10003Z" fill={counter?"#d3f5e7":"white"}/>
            </svg>
            </Link>

            <h5 className={s.allThreads}>All treads</h5>
        </div>

        <div className={s.channelsDiv} style={{display: 'flex', marginTop: '32px'}}>

            <h4 className="channelsTitle" style={{
              textTransform: 'uppercase',
              fontWeight: '700',
              color: 'rgba(145, 145, 145, 1)'
              
              
            }}>channels</h4>

            <h4 className="channelsCount" style={{
                fontWeight: '700',
                color: 'rgba(145, 145, 145, 1)',
                marginLeft: 'auto'
                
                
            }}>1</h4>
        </div>

        <div className={s.friendsDiv} style={{display: 'flex', marginTop: '32px'}}>

            <h4 className="friendsTitle" style={{
              textTransform: 'uppercase',
              fontWeight: '700',
              color: 'rgba(145, 145, 145, 1)'
              
              
            }}>friends</h4>

            <h4 className="friendsCount" style={{
                fontWeight: '700',
                color: 'rgba(145, 145, 145, 1)',
                marginLeft: 'auto'
                
                
            }}>1</h4>
        </div>
    </nav>
  );
}

export default Navpanel;
