import React, { useCallback, useDebugValue, useRef, useState } from 'react'
import completeImg from '../assets/quiz-complete.png';

import QUESTIONS from '../question';
import Question from './Question';
import Sumary from './Sumary';


const Quiz = () => {

    const [userAnswers, setUserAnswer] = useState([]);

    
    const  ouestionIndex = userAnswers.length;
    const quizComplted = ouestionIndex === QUESTIONS.length;
    
    
    const handleAnswerSubmit = useCallback(function handleAnswerSubmit(selectedAnswer){
          setUserAnswer((preUserAnswer) =>{
           return [...preUserAnswer, selectedAnswer]
        });
    },[]);

    const handleSkipAnswers = useCallback(() => handleAnswerSubmit(null), [handleAnswerSubmit])

    if(quizComplted){
        return (
           <Sumary userAnswers={userAnswers}/> 
        )}

  


  return (
   <div className='max-w-6/12 m-auto p-8 bg-[linear-linear-gradient(180deg, #3e2a60 0%, #321061 100%) rounded-lg shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] text-center ]'>
    <Question index={ouestionIndex} key={ouestionIndex} onSelectAn={handleAnswerSubmit} onSkipANswer={handleSkipAnswers}/>
         
     
   </div>
  )
}

export default Quiz