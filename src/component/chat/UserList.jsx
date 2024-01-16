import React from 'react'
import {chatList} from './content/data'
import './css/userList.scss'

function UserList() {
  return (
    <div className='chat-list'>
      {
        chatList && chatList.map((item,index) => {
          return(
            <div className={ item.unread ? "blk unread" : "blk" } key={index}>
              <div className="imgbx">
                <img src={item.image} alt="no image" />
              </div>
              <div className="details">
                <div className="listhead">
                  <h4> { item.name } </h4>
                  <p className="time"> { item.chat_time } </p>
                </div>
                <div className="message_p">
                  <p> { item.chat_content } </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default UserList