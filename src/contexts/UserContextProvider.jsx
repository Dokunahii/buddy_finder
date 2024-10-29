import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase"

export const userContext = createContext()

export default function UserContextProvider({children}) {

  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() => {
    return( auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    }))
  }, [])
  
  const value = { currentUser }

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  )
}
