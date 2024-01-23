import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

// context instance
export const AuthContext = createContext()

function AuthProvider(props) {
    const { children } = props
    const [currentUser,setCurrentUser] = useState({})

    useEffect(() => {
      // mount state
      const changeAuth = onAuthStateChanged(auth, user => {
        setCurrentUser(user)
      })

      // unmount
      return () => {
        changeAuth()
      }
    },[])

    let data = {
      currentUser
    }

  return (
    <AuthContext.Provider value={ data }>
        {
          children
        }
    </AuthContext.Provider>
  )
}

export default AuthProvider