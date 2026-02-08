import React from 'react'

import logo from '../assets/quiz-logo.png';

const Header = () => {
  return (
    <header className='my-8 text-center'>
        <img src={logo} className='w-12 h-12 drop-shadow-amber-800 m-auto'/>
        <h1 className='font-bold text-3xl bg-[linear-gradient(90deg,#e781fb_40%,#8e76fa_60%)] bg-clip-text text-transparent space-x-0.5 uppercase'>React Quiz</h1>
    </header>
  )
}

export default Header