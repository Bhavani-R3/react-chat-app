import React from 'react'
import Header from './Header'
import Search from './Search'
import UserList from './UserList'

function SideBar() {
  return (
    <div>
        <Header/>
        <Search/>
        <UserList/>
    </div>
  )
}

export default SideBar