import React, {createContext, useState} from 'react'
import { useEffect } from 'react'


export const AppContext = createContext()

 const AppContextProvider = ({children}) => {
const [auth, setAuth] = useState({name:"", email:"", isAuth:false})
let token = localStorage.getItem("token")||false;

  useEffect(()=>{
    setAuth({...auth,isAuth:token})
  },[])
  return (
   <AppContext.Provider value={{auth, setAuth}}>
    {children}
   </AppContext.Provider>
  )
}

export default AppContextProvider