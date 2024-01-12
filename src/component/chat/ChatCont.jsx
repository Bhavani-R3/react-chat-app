import React from 'react'
import SideBar from './SideBar'
import ChatWindow from './ChatWindow'
import "./css/chatcontainer.scss"

function ChatCont() {
  return (
    <div className='chat-container'>
        <SideBar/>
        <ChatWindow/>
    </div>
  )
}

export default ChatCont