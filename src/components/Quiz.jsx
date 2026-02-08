import React, { useDebugValue, useState } from 'react'
import completeImg from '../assets/quiz-complete.png';

import QUESTIONS from '../question';

const Quiz = () => {

    const [userAnswers, setUserAnswer] = useState([]);

    const  ouestionIndex = userAnswers.length;
    const quizComplted = ouestionIndex === QUESTIONS.length;
    
    
    function handleAnswerSubmit(selectedAnswer){
        setUserAnswer((preUserAnswer) =>{
           return [...preUserAnswer, selectedAnswer]
        })

    }

    if(quizComplted){
        return (
            <div id="summary" className='max-w-6/12 m-auto p-8 bg-[linear-gradient(180deg, #a17eda 0%, #895fc4 100%)] rounded-2xl shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] '>
               <img className='w-40 h-40  block drop-shadow-[0_0_4px_rgba(0,0,0,0.6)] border-2 object-contain mx-auto mb-4 p-4 border-[#3a2353] rounded-full bg-[#c18cfa]'  src={completeImg} alt="" />
               <h2 className='text-center font-bold text-3xl text-[#3a2353] uppercase'>Quiz Completed</h2> 
            </div>
        )
    }

  return (
   <div className='max-w-6/12 m-auto p-8 bg-[linear-linear-gradient(180deg, #3e2a60 0%, #321061 100%) rounded-lg shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] text-center ]'>
     <div id="questions">
         <h2 className='text-2xl font-bold mx-2 my-5 text-[#c1b2dd] text-center'>{QUESTIONS[ouestionIndex].text}</h2>
         <ul id='answers'>
            {
                QUESTIONS[ouestionIndex].answers.map(answer =>
                    <li key={answer} className='answer'>
                        <button onClick={() => handleAnswerSubmit(answer)}>{answer} </button></li>
                )

            }

         </ul>
    </div>
   </div>
  )
}

export default Quiz