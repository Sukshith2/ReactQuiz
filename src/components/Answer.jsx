import React, { useRef } from 'react'

const Answer = ({answer, userAnswers, answerState, onSelect}) => {
const ShuffledAnswer = useRef();

  if(!ShuffledAnswer.current){
        ShuffledAnswer.current = [...answer];
       
        ShuffledAnswer.current.sort(() => Math.random() - 0.5)
    }

  return (<ul id='answers'>
               {ShuffledAnswer.current.map((answer) =>{
                           const isSelected = userAnswers === answer;
                           let cssClases='';

                           
                           if(answerState === 'answerd' && isSelected){
                               cssClases = 'selected'
                           }
   
                           if((answerState === 'correct' || answerState === 'wrong') && isSelected ){
                               cssClases = answerState;
                           }
                           
   
                       return (
                           <li key={answer} className='answer'>
                           <button className={cssClases} onClick={() => onSelect(answer)} disabled={answerState !== ''}>{answer}</button></li>
                        
                       )
                   })
   
               }
   
            </ul>
    
  )
}

export default Answer