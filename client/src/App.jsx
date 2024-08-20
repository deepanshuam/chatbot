import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ChatBot from './pages/Chatbot'

const App = () => {
  return (

    <>
    <Routes>
<Route  path='/' element={<Homepage/>}/>

<Route path='/chatbot' element={<ChatBot/>}/>
    </Routes>
    
    </>
  )
}

export default App
