import React from 'react'
import { chatMsg } from './content/data'

function ChatMessage() {
  return (
    <div className='chat-box'>
      {
        chatMsg && chatMsg.map((item,index) => {
          return(
            <div className={ item.sen ? "message sen" : "message rec" } key={index}>
              <p> { item.msg } <br/> <span> {  item.time } </span> </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ChatMessage