import React from 'react'
import completeImg from '../assets/quiz-complete.png';
import QUESTIONS from '../question';

const Sumary = ({userAnswers}) => {


    const skipped = userAnswers.filter(answer => answer === null);
    const correct = userAnswers.filter((answer,index )=> answer == QUESTIONS[index].answers[0]);
    

    const skipedshare = Math.round((skipped.length / userAnswers.length) * 100);
    const correctshare = Math.round((correct.length / userAnswers.length) * 100);
    const wrongshare = 100 - correctshare - skipedshare

  return (
      
        <div id="summary" className='max-w-6/12 m-auto p-8 bg-[linear-gradient(180deg, #a17eda 0%, #895fc4 100%)] rounded-2xl shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] '>
                       <img className='w-40 h-40  block drop-shadow-[0_0_4px_rgba(0,0,0,0.6)] border-2 object-contain mx-auto mb-4 p-4 border-[#3a2353] rounded-full bg-[#c18cfa]'  src={completeImg} alt="" />
                       <h2 className='text-center font-bold text-3xl mb-8 text-[#3a2353] uppercase'>Quiz Completed</h2> 
        
         <div className='flex gap-8 w-8/12 m-auto pb-8 border-b-2 border-[#594276]'>
                    <p className='flex flex-1 flex-col m-0'> <span className='number'>{skipedshare}%</span>
                        <span className='text'>skipped</span>
                    </p>
                    <p className='flex flex-1 flex-col m-0'> <span className='number'>{correctshare}%</span>
                        <span className='text'> answered correctly</span>
                    </p>
                    <p className='flex flex-1 flex-col m-0'> <span className='number'>{wrongshare}%</span>
                        <span className='text'> answered incorrectly </span>
                    </p>
                    </div>
                    <ol>
                        {userAnswers.map((ans, index)=>{
                            let cssClas = 'user-answer'

                            if(ans === null){
                                cssClas += ' skipped';
                            } else if(ans === QUESTIONS[index].answers[0]){
                                  cssClas += ' correct';
                            } else {
                                   cssClas += ' wrong';
                            }

                            return (<li key={ans}>
                            <div className='flex gap-1 mt-3'>
                                <h3>{index + 1 }.</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            </div>
                            <p className={cssClas}>{ans}</p>
                        </li>)
                        })}
                        

                    </ol>
                       
                    </div>
            
               

  )
}

export default Sumary