import React, { useContext, useRef, useState } from 'react'
import "./css/searchUser.scss"
import { AuthContext } from '../../Context/AuthContext'
import { toast } from 'react-toastify'
// firebase
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'


function SearchUser(props) {
  const fname = useRef()
  const [user,setUser] = useState(false)
  const context = useContext(AuthContext)

  const searchHandler = async (e) => {
    e.preventDefault()
    try {
      let name = fname.current.value 
      // console.log(`name =`, name)

      // query 
      let qry = query(collection(db, "users"), where("displayName", "==", name))

      // execute query
      const qrySnapshot = await getDocs(qry)
      qrySnapshot.forEach((item) => {
        setUser(item.data())
        props.setName(item.data())
      })
    } catch (err) {
      toast.error(err)
    }
  }

  return (
    <div className='search_chat'>
      <div>
        <input type="search" name='user' ref={fname} id='user' placeholder='Search or start new chat' onKeyUp={searchHandler} required/>
        <i className='bi bi-search'></i>
      </div>
    </div>
  )
}

export default SearchUser