import React, { useContext, useEffect, useState } from 'react'
import {chatList} from './content/data'
import './css/userList.scss'
import { AuthContext } from '../../Context/AuthContext'

function UserList(props) {
  const [user, setUser] = useState(false)
  const context = useContext(AuthContext)

  useEffect(() => {
    // setUser(chatList)
  },[])

  if(!props.displayName) {
    return (
     <div className="chat-list">
       <div className="blk no-user">
        <p className='info'>Search for Users</p>
        <p className="alert">No Users</p>
      </div>
     </div>
    )
  }

  return (
    <div className='chat-list'>
      <div className={ "blk" } >
        <div className="imgbx">
          <img src={ props.photoURL } alt="no image" />
        </div>
        <div className="details">
          <div className="listhead">
            <h4> { props.displayName } </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserList