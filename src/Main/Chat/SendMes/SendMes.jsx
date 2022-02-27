import React, { useEffect, useRef } from "react";
import s from './send.module.scss'
import content from './img/content.svg'
import voice from './img/voice.svg'
import send from './img/send.svg'

function SendMes () {
    
   

const inp = useRef('')
const last = useRef({})


        function handleKey (event) {
            if ((!event.shiftKey||!event.which===16||!event.keyCode===16) && ((event.which === 13) || (event.keyCode===13))) {
                event.preventDefault()
        }

        }   

        function insertHTML(text,e) {
            var sel, range;
            if (window.getSelection && (sel = window.getSelection()).rangeCount) {
                range = sel.getRangeAt(0);
                range.collapse(true);
                var c = document.createTextNode(text) ;
                range.insertNode(c);
        
                // Move the caret immediately after the inserted 
                range.setStartAfter(c);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);


               

                
                
                
            }
        }
        
        

        useEffect(()=> {

            
            last.current.val = [' ']
            last.current.selc = [1]

            console.log(last.current.val)

            function ctrlZ (e) {
                if (e.ctrlKey&&((e.keyCode===26)||(e.which===26)||(e.keyCode===90)||(e.which===90))) {
                    
                    console.log('catched')

                    console.log(last.current.val)
                    last.current.val.splice( last.current.val.length-1, 1)
                    last.current.selc.splice( last.current.selc.length-1, 1)

                    if (last.current.val.length===0 && last.current.selc.length===0) return
                    
                    inp.current.innerText = last.current.val.splice([last.current.val.length-1], 1)
                    window.getSelection().setPosition(e.target.firstChild, last.current.selc.splice([last.current.selc.length-1],1))
                    
                    e.preventDefault()
                }} 

            function ctrlY (e) {

            }

            function getCaret(element) {
                    var caretOffset = 0;
                    var doc = element.ownerDocument || element.document;
                    var win = doc.defaultView || doc.parentWindow;
                    var sel;
                    if (typeof win.getSelection != "undefined") {
                        sel = win.getSelection();
                        if (sel.rangeCount > 0) {
                            var range = win.getSelection().getRangeAt(0);
                            var preCaretRange = range.cloneRange();
                            preCaretRange.selectNodeContents(element);
                            preCaretRange.setEnd(range.endContainer, range.endOffset);
                            caretOffset = preCaretRange.toString().length;
                        }
                    } else if ( (sel = doc.selection) && sel.type !== "Control") {
                        var textRange = sel.createRange();
                        var preCaretTextRange = doc.body.createTextRange();
                        preCaretTextRange.moveToElementText(element);
                        preCaretTextRange.setEndPoint("EndToEnd", textRange);
                        caretOffset = preCaretTextRange.text.length;
                    }
                    return caretOffset;
                }

            function val (e) {

                //
                last.current.val.push(e.target.innerText)
               last.current.selc.push(getCaret(e.target))

               console.log( last.current)
            }

            if (document.execCommand("insertText", false, '')) {
                
              } else {
            
                    inp.current.addEventListener('keydown', ctrlZ)
                    inp.current.addEventListener('input', val)
                    
                
              }

            function fo(e) {
                e.preventDefault()
                const text = e.clipboardData.getData('text/plain')
                
                try {
                  //   document.execCommand('insertHTML',false,text)
                  //document.execCommand('insertHTML',false,text)
                  insertHTML(text, e)
                }
                
                catch(error) {
                    insertHTML(text)
                } 
    
       }

            inp.current.addEventListener('paste', fo)

            inp.current.addEventListener('keydown', handleKey)

            const cur = inp.current

            return(
                ()=>  {
                cur.removeEventListener('paste', fo)
                cur.removeEventListener('keydown',handleKey)

                try {
                    cur.removeEventListener('keydown', ctrlZ)
                    cur.removeEventListener('input',val)
                }

                catch(error) {
                    console.log(error)
                }

            }
                
            )
        },[])
        
        


    
     
            
    return (
        <div className={s.bottomDiv}>
           <img src={content} alt="" className={s.add} />

            <img src={voice} alt="" className={s.voice} />

            <div className={s.messageCont} >
               <div className={s.messageArea} ref={inp}  contentEditable='true' dir="auto"></div>
            </div>


            <img src={send} alt="" className={s.send} />
        </div>
    )
}

export default SendMes