import question from '../question.js'
import { useCallback, useState } from 'react'
import Summary from './Summary.jsx'
import Question from './Question.jsx'
export default function Quiz(){
    
    const [useranswer,setuseranswer]=useState([])
    const activequestionindex=
    useranswer.length
    const quiziscomplete=activequestionindex===question.length
    const handleselectanswer=useCallback(function handleselectanswer(selectedanswer){
        setuseranswer((prevanswer)=>{return ([...prevanswer,selectedanswer])})        
    },[])
    const timersett=useCallback(()=>{handleselectanswer(null)},[handleselectanswer])
    if (quiziscomplete){
        return (
            <Summary useranswer={useranswer}/>
        )
    } 
    
    
    return(
        <>
        <div id='quiz'>
        <Question 
        key={activequestionindex}
        index={activequestionindex}
        onselect={handleselectanswer}
        timersett={timersett}
        
        />
        </div>
        </>
        
    )
}