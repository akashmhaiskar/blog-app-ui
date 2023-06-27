import React, { useEffect } from 'react'
import userContext from './userContext'
import { useState } from 'react'

function UserProvider({children}) {

    const [user, setUser] = useState({
        name:'Durgesh'
    })


    useEffect(()=>{
      setUser({
        name:"Akash"
      })
    },[])

  return (
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider