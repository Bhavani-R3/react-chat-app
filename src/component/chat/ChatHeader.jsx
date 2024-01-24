import React, { useContext } from 'react'
import {chatList} from './content/data';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { AuthContext } from './../../Context/AuthContext';
import { toast } from 'react-toastify';

function ChatHeader() {
  const { currentUser } = useContext(AuthContext)

  const signOutHandler = () => {
    if(window.confirm(`Are you sure to logout?`)) {
      signOut(auth)
      toast.success('Logout successfully')
    }
  }
  
  return (
    <div className='header'>
      <div className="imgText">
        <div className="userimg">
          <img src={currentUser.photoUrl ? currentUser.photoUrl : "https://robohash.org/Terrill.png?set=set4"} alt="" className='cover' />
        </div>
        <h4> {currentUser.displayName ? currentUser.displayName : "Guest"} </h4>
      </div>
      <div className="icons">
        <div><i className='bi bi-search'></i></div>
        <div className='dropdown'>
          <i className='bi bi-three-dots-vertical'></i>
          <ul className='dropdown-menu'>
            <li>
              <NavLink onClick={signOutHandler} to={`/`}>Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader