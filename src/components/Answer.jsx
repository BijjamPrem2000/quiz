import { useRef } from "react"
export default function Answer({selectedindexanswer,onselected,answered,selecteanswer}){
    const suffledanswer=useRef()
    if(!suffledanswer.current){
        suffledanswer.current=[...selectedindexanswer]
        suffledanswer.current.sort((a,b)=>Math.random()-0.5)
    }
    return (
        <ul id="answers">{suffledanswer.current.map((answer)=>{
            const isselected=selecteanswer===answer
            let cssclass=''
            if(answered==='answered' && isselected){
                cssclass='selected'
            }
            if((answered==='correct' || answered==='wrong') && isselected){
                cssclass=answered
            }
            return(
                <li key={answer} className='answer'>
                <button className={cssclass} onClick={()=>onselected(answer)} disabled={answered !==''}>{answer}</button>
            </li>
            )
        }
            
        )}</ul>
    )
}