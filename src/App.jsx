// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

import './App.css'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
      <div className='app-container'>
        <Navbar/>
        <div className='main-sections'>
        <Welcome/>
        <Projects/> 
        </div>

      </div>

    </>
  )
}

export default App
