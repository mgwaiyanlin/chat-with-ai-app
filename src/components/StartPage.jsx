import React from 'react'
import './StartPage.css'

const StartPage = ({ onStartChat }) => {
  return (
    <div className='start-page'>
      <h1 className='header1'>Let's chat with AI</h1>
      <button className='start-page-btn' onClick={onStartChat}>Start</button>
    </div>
  )
}

export default StartPage