import Questiontimer from "./Questiontimer"
import Answer from "./Answer"
import { useState } from "react"
import question from "../question.js"
export default function Question({
    timersett,
    index,
    onselect,
}){
    const[answer,setAnswer]=useState({
        selectedanswer:'',
        iscorrect:null
    })
    let timer=10000
    if (answer.selectedanswer){
        timer=1000
    }
    if(answer.iscorrect!==null){
        timer=2000
    }
    function handleSelect(answer){
    setAnswer({
        selectedanswer:answer,
        iscorrect:null
    })
    setTimeout(() => {
        setAnswer({
            selectedanswer:answer,
            iscorrect:question[index].answers[0]===answer
        })
        setTimeout(()=>{
            onselect(answer)
        },2000)
    }, 1000);
}   
let answerstate=''
if (answer.selectedanswer && answer.iscorrect!==null){
    answerstate=answer.iscorrect ?'correct':'wrong'
}else if(answer.selectedanswer){
    answerstate='answered'
}
    return(
        <div id="question">
            <h2>{question[index].text}</h2>
            <Questiontimer 
            key={timer}
            timeout={timer} 
            onTimeout={answer.selectedanswer===''? timersett : null} 
            mode={answerstate}/>
            <Answer 
            selectedindexanswer={question[index].answers} 
            selecteanswer={answer.selectedanswer} 
            answered={answerstate}
            onselected={handleSelect}/>
        </div>
    )
}