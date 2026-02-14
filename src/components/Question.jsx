import React, { useState } from 'react'
import Answer from './Answer'
import QuestionTimer from './QuestionTimer'
import QUESTION from '../question.js';

const Question = ({ index, onSelectAn, onSkipANswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect : null
  });

 function handleSelectedAnswer(answer){
  setAnswer({
    selectedAnswer : answer,
    isCorrect:null
  })

  setTimeout(()=>{
    setAnswer({
      selectedAnswer : answer,
      isCorrect:QUESTION[index].answers[0] === answer
    })
    setTimeout(()=> {
      onSelectAn(answer);
    }, 2000)


  }, 1000)
 }


let answerState = '';

if(answer.selectedAnswer && answer.isCorrect !== null){
  answerState = answer.isCorrect ? 'correct' : 'wrong';
} else if(answer.selectedAnswer){
  answerState= 'answered'
}


  return (
   <div id="questions">
       <QuestionTimer timeOut={10000} onTimeOut={onSkipANswer}/>
               <h2 className='text-2xl font-bold mx-2 my-5 text-[#c1b2dd] text-center'>{QUESTION[index].text}</h2>
               <Answer answer={QUESTION[index].answers} onSelect={handleSelectedAnswer} userAnswers={answer.selectedAnswer} 
               answerState={answerState}/>
   
          </div>
  )
}

export default Question