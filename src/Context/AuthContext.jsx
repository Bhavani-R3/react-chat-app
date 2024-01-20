import React, { createContext, useState } from 'react'

// context instance
export const AuthContext = createContext()

function AuthProvider(props) {
    const { children } = props
    const [currentUser,setCurrentUser] = useState("john")

    const click = (val) => {
        setCurrentUser(val)
    }

    let data = {
        x: 12,
        y: 'this is string',
        click,
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