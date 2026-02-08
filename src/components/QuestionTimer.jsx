import React, { useState } from 'react'
import { useEffect } from 'react';

const QuestionTimer = ({timeOut, onTimeOut}) => {

    const [remaningTime, setRemaningTime] = useState(timeOut);

    
    useEffect(() => {
         const timer = setTimeout(onTimeOut, timeOut);
         return () =>{clearTimeout(timer);}
         
    }, [onTimeOut, timeOut]);  

        useEffect(()=>{
            const inte = setInterval(() =>{
               setRemaningTime(preRemainigTime => preRemainigTime - 100);
            }, 100);
           return ()=> { clearInterval(inte)}
         }, []);


  return (
   <progress id='question-time' className="w-1/2 h-2 rounded-full overflow-hidden" max={timeOut} value={remaningTime}></progress>
  )
}

export default QuestionTimer