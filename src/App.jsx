import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Quiz from './components/Quiz'

function App() {
 

  return (
<>
<Header/>
<main>
  <Quiz/>
</main>
</>

   
  )
}

export default App
