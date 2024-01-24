import React, { useState } from 'react'
import HeaderMenu from './HeaderMenu'
import SearchUser from './SearchUser'
import UserList from './UserList'
import "./css/sidebar.scss"

function SideBar() {
  const [sUser,setSUser] = useState('')
 
  return (
    <div className='left-side'>
        <HeaderMenu/>
        <SearchUser setName={setSUser} />
        <UserList {...sUser}/>
    </div>
  )
}

export default SideBar