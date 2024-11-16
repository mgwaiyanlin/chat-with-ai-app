import React, { useState } from "react"
import StartPage from "./components/StartPage"
import ChatMainPage from "./components/ChatMainPage"

function App() {
  const [isChatting, setIsChatting] = useState(false)
  const [chats, setChats] = useState([])
  const [activeChat, setActiveChat] = useState(null)
  
  const handleStartChat = () => {
    setIsChatting(true)

    if (chats.length === 0) {
      const newChat = {
        id: `Chat ${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString()}`,
        messages: [],
      }

      setChats([newChat])
    }
  }

  const handleGoBack = () => {
    setIsChatting(false)
  }

  return (
    <div className="container">
      {isChatting ? (<ChatMainPage onGoBack={handleGoBack} chats={chats} setChats={setChats} />) : (<StartPage onStartChat={handleStartChat} />)}
    </div>
  )
}

export default App
