import React, { useRef, useState } from "react";

import s from './send.module.scss'
import content from './img/content.svg'
import voice from './img/voice.svg'
import send from './img/send.svg'

 
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

function setCaret (e, n, x ) {
        
        var children = Array.prototype.slice.call(e.target.childNodes)
        
        
        

        children.forEach((el, ind)=>{
            

                if (n<=el.length) {
                    x = el
                  
                    window.getSelection().setPosition(x, n)
            
                   
                }
    
                else {
                    n = n - el.textContent.length
                }
            
            
            
        })
        
        
    
}

function SendMes () {


    const [cState, setCstate] = useState({val: '', sel: 0 })
    const backState = useRef({pValList: [], pSelList: [], nValList: [], nSelList: []})
    
    function inputFunc (e) {
        
        if (e.target.firstChild===null) {
            return
        }

        backState.current.nValList = []
        backState.current.nSelList = []

        setCstate((prev)=>{var x = {}; for (var k in prev) {x[k]=prev[k]} x.val=e.target.innerHTML; x.sel=getCaret(e.target); return x})
        
        // adding last info to ref
        backState.current.pValList.push(cState.val)
        backState.current.pSelList.push(cState.sel)

    }            

    function pasteFunc(e) {

                e.preventDefault()
                const text = e.clipboardData.getData('text/plain')
                insertHTML(text, e)
                setCstate((prev)=>{var x = {}; for (var k in prev) {x[k]=prev[k]} x.val=e.target.innerHTML; x.sel=getCaret(e.target); return x})
                

                // adding last info to ref
                backState.current.pValList.push(cState.val)
                backState.current.pSelList.push(cState.sel)

    }
    
    function keyDownFunc(e) {


            if ((!e.shiftKey||!e.which===16||!e.keyCode===16) && ((e.which === 13) || (e.keyCode===13))) {
                    e.preventDefault()
            }

            if (e.ctrlKey&&((e.keyCode===26)||(e.which===26)||(e.keyCode===90)||(e.which===90))) {

                    

                        e.preventDefault()

                    

                        if (backState.current.pSelList.length===0||backState.current.pValList.length===0) {
                            return
                        }

                        else if (backState.current.pSelList.length===1||backState.current.pValList.length===1) {
                            backState.current.nValList.push(e.target.innerHTML)
                            backState.current.nSelList.push(getCaret(e.target))

                            setCstate({val: backState.current.pValList[0], sel: backState.current.pSelList[0]})

                            e.target.innerHTML = backState.current.pValList.splice(0, 1)[0]
                            setCaret(e, backState.current.pSelList.splice(0,1)[0])
                        
                            
                        }

                        else {
                            backState.current.nValList.push(e.target.innerHTML)
                            backState.current.nSelList.push(getCaret(e.target))

                            setCstate({val: e.target.innerHTML, sel: getCaret(e.target) })
                            e.target.innerHTML = backState.current.pValList.splice(backState.current.pValList.length-1, 1)[0]
                            setCaret(e, backState.current.pSelList.splice(backState.current.pSelList.length-1, 1)[0])
                            
                            
                        }

                    }


            if (e.ctrlKey&&((e.which===89)||(e.keyCode===89))) {
                 

                    if ( backState.current.nValList.length===0||backState.current.nValList.length===0) {
                        return
                    }

                    

                    else {

                        setCstate({val: e.target.innerHTML, sel: getCaret(e.target) })

                        backState.current.pValList.push(e.target.innerHTML)
                        backState.current.pSelList.push(getCaret(e.target))
                        
                       
                        e.target.innerHTML = backState.current.nValList.splice(backState.current.nValList.length-1,1)[0]
                        setCaret(e, backState.current.nSelList.splice(backState.current.nSelList.length-1,1)[0])
                    }                

                
            }

    }

   
    return (
        <div className={s.bottomDiv}>
           <img src={content} alt="" className={s.add} />

            <img src={voice} alt="" className={s.voice} />

            <div className={s.messageCont} >
            
            <div className={s.messageArea} onInput={inputFunc} onPaste={pasteFunc} onKeyDown={keyDownFunc} contentEditable='true' dir="auto"></div>
   
               
            </div>


            <img src={send} alt="" className={s.send} />
        </div>
    )
}

export default SendMes