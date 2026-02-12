import React, { useRef } from 'react'

const Answer = ({answer, userAnswers, ansertState, onSelect}) => {
const ShuffledAnswer = useRef();

  if(!ShuffledAnswer.current){
        ShuffledAnswer.current = [...answer];
        ShuffledAnswer.current.sort(() => Math.random() - 0.5)
    }

  return (<ul id='answers'>
               {ShuffledAnswer.current.map((answer) =>{
                           const isSelected = userAnswers === answer;
                           let cssClases='';  
                           
                           if(ansertState === 'answerd' && isSelected){
                               cssClases = 'selected'
                           }
   
                           if((ansertState === 'correct' || ansertState === 'wrong') && isSelected ){
                               cssClases = ansertState;
                           }
   
                       return (
                           <li key={answer} className='answer'>
                           <button className={cssClases} 
                           onClick={() => onSelect(answer)}>{answer}</button></li>
                       )
                   })
   
               }
   
            </ul>
    
  )
}

export default Answer