import React from 'react'
import "./css/searchUser.scss"

function SearchUser() {
  return (
    <div className='search_chat'>
      <div>
        <input type="search" name='user' id='user' placeholder='Search or start new chat' />
        <i className='bi bi-search'></i>
      </div>
    </div>
  )
}

export default SearchUser