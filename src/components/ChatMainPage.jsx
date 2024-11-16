import React from 'react'
import './ChatMainPage.css'

const ChatMainPage = () => {
  return (
    <div className='chat-app'>
        <div className="chat-list">
            <div className="chat-list-header">
                <h2>Chat List</h2>
                <i className='bx bx-edit-alt new-chat'></i>
            </div>
            <div className="chat-list-item active">
                <h4>Topic of the chat</h4>
                <i className="bx bx-x-circle"></i>
            </div>
            <div className="chat-list-item">
                <h4>Topic of the chat</h4>
                <i className="bx bx-x-circle"></i>
            </div>
        </div>

        <div className="chat-window">
            <div className="chat-title">
                <h3>Chat with AI</h3>
                <i className='bx bx-arrow-back arrow'></i>
            </div>
            <div className='chat'>
                <div className="prompt">Hi, How are you? <span>6:08 AM</span></div>
                <div className="response">Hey, I'm fine and you? <span>6:09 AM</span></div>
                <div className="typing">Tying...</div>
            </div>

            <div className="msg-form">
                <i className='fa-solid fa-face-smile emoji'></i>
                <input type="text" className="msg-input" placeholder='Type a message' />
                <i className="fa-solid fa-paper-plane"></i>
            </div>
        </div>
    </div>
  )
}

export default ChatMainPage