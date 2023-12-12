import completedimg from '../assets/quiz-complete.png'
import Questions from '../question.js'
export default function Summary({useranswer}){
    const skippedAnswer=useranswer.filter((answer)=>answer===null)
    const correctAnswer=useranswer.filter((answer,index)=>
    answer===Questions[index].answers[0])
    const skippedShare=Math.round(skippedAnswer.length/useranswer.length)*100
    const correctShare=Math.round(correctAnswer.length/useranswer.length)*100
    return(
        <div id='summary'>
            <img src={completedimg} alt='completedimage'></img>
            <h2>Quiz completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedShare}</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctShare}</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{100-(skippedShare+correctShare)}</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {useranswer.map((answer,index)=>{
                    let cssclass="user-answer"
                    if (answer === null){
                        cssclass +=' skipped'
                    }else if(answer ===Questions[index].answers[0]){
                        cssclass+=' correct'
                    }else{
                        cssclass+=' wrong'
                    }
                    return(
                        <li key={answer}>
                    <h3>{index+1}</h3>
                    <p className="question">{Questions[index].text}</p>
                    <p className={cssclass}>{answer ?? 'skipped'}</p>
                        </li>
                    )
                })}
                
            </ol>
        </div>
    )
}