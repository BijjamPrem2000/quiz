import { useState,useEffect } from "react";

export default function Questiontimer({timeout,onTimeout,mode}){
    const [timerremain,settimerstarted]=useState(timeout)
    useEffect(()=>{
    const time=setTimeout(() => {
        onTimeout
    }, timeout)
    return ()=>{
        clearTimeout(time)
    }
    },[timeout,onTimeout])
    useEffect(()=>{
        const interval=setInterval(() => {
        settimerstarted((prevtime)=>prevtime-100)
        }, 100);
        return ()=>{
            clearInterval(interval)
        }
    },[])
    
    return(
        <progress className={mode} id="question-time" max={timeout} value={timerremain}></progress>
    )
}
