import React from "react";
import s from './cheader.module.scss'


function ChatHeader () {
    return (<div className={s.header}>
        <div className={s.currentChatDiv}>
           
            <h5 className={s.currentChat}>#</h5>
            
            <svg className={s.savedState} width="15.5" height="15" viewBox="0 0 15.5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M11.0064 8.93379L11.8336 14L7.50002 11.6071L3.16648 14L3.99359 8.93379L0.50003 5.35675L5.32924 4.62L7.50002 5.50151e-05L9.67088 4.62L14.5 5.35675L11.0064 8.93379ZM9.12831 5.38874L7.50002 1.88675L5.8572 5.38874L2.07224 5.88107L4.87029 8.73728L4.24995 12.4141L7.50002 10.5919L10.7091 12.4279L10.1297 8.75103L12.9004 5.92385L9.12831 5.38874Z" fill="black"/>
            </svg>

        </div>

        <div className={s.headerNav}>
                <h5 className={s.currentOnline}>1</h5>
                
                <div className={s.searchDiv}>
                    <input type="text" className={s.searchInp} placeholder='Search...' />
                    <button className={s.searchButton}>
                            <svg className={s.searchIco} width="15.5" height="15.5" viewBox="0 0 15.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M14.3638 13.866C14.1868 14.04 13.9001 14.04 13.7231 13.866L10.0951 10.2957C9.08286 11.1041 7.79404 11.5901 6.38879 11.5901C3.13655 11.5901 0.500061 8.99556 0.500061 5.79508C0.500061 2.59454 3.13655 2.99811e-05 6.38879 2.99811e-05C9.64103 2.99811e-05 12.2776 2.59454 12.2776 5.79508C12.2776 7.29154 11.6962 8.65109 10.7499 9.67925L14.3638 13.2354C14.5407 13.4097 14.5407 13.6919 14.3638 13.866ZM6.38879 0.891621C3.63681 0.891621 1.40594 3.08689 1.40594 5.79508C1.40594 8.50324 3.63681 10.6986 6.38879 10.6986C9.14069 10.6986 11.3715 8.50324 11.3715 5.79508C11.3715 3.08689 9.14069 0.891621 6.38879 0.891621Z" fill="black"/>
                            </svg>
                    </button>
                </div>

                <svg  className={s.notifications} width="14.5" height="15.5" viewBox="0 0 14.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M9.27469 12.1334C9.05948 13.1983 8.12304 13.9999 7.00002 13.9999C5.877 13.9999 4.94056 13.1983 4.72543 12.1334H0.500032L2.35713 8.39999V4.6666C2.35713 2.08934 4.43587 -1.75238e-05 7.00002 -1.75238e-05C9.56424 -1.75238e-05 11.6429 2.08934 11.6429 4.6666V8.39999L13.5 12.1334H9.27469ZM7.00002 13.0667C7.6056 13.0667 8.11569 12.6759 8.30763 12.1334H5.6925C5.88435 12.6759 6.39444 13.0667 7.00002 13.0667ZM10.7143 8.39999V4.6666C10.7143 2.6049 9.05138 0.933346 7.00002 0.933346C4.94865 0.933346 3.28573 2.6049 3.28573 4.6666V8.39999L1.89284 11.2H12.1071L10.7143 8.39999Z" fill="black"/>
                </svg>
                
                <svg className={s.menu} width="6" height="17" viewBox="0 0 6 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.25001 7C4.21649 7 4.99997 7.78349 4.99997 8.75C4.99997 9.7165 4.21649 10.5 3.25001 10.5C2.28353 10.5 1.49997 9.7165 1.49997 8.75C1.49997 7.78349 2.28353 7 3.25001 7Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.25 1.00001C4.21648 1.00001 4.99996 1.7835 4.99996 2.75C4.99996 3.7165 4.21648 4.5 3.25 4.5C2.28353 4.5 1.49997 3.7165 1.49997 2.75C1.49997 1.7835 2.28353 1.00001 3.25 1.00001Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.25 13C4.21648 13 4.99996 13.7835 4.99996 14.75C4.99996 15.7165 4.21648 16.5 3.25 16.5C2.28353 16.5 1.49997 15.7165 1.49997 14.75C1.49997 13.7835 2.28353 13 3.25 13Z" fill="black"/>
                </g>
                </svg>


        </div>
    </div>)
}

export default ChatHeader