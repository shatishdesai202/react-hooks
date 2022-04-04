import React, { useState, useEffect, useRef } from 'react';

function TimerUseHook() {
    const [timer, setTimer] = useState(0);
    const clearTimerRef = useRef()
    useEffect( ()=>{
        clearTimerRef.current = setInterval( ()=>{
            setTimer(prev => prev + 1)
        },1000)
        
        return () => {
         clearInterval(clearTimerRef.current)
        }        
    },[])



    return (
        <div>
            <h1> {timer} </h1>
            <button onClick={()=> clearInterval(clearTimerRef.current)}> Stop Timer </button>
        </div>
    )
}

export default TimerUseHook
