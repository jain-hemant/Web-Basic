import { useContext } from "react"
import { Login } from "../components"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { useEffect } from "react"
const LoginPage = () => {
  const {auth} = useContext(AppContext)
  const navigate =  useNavigate()
 
  useEffect(()=>{
    if(auth.isAuth){
      return navigate("/")
  }
  },[auth.isAuth])
  
  return (
    <div>
      <Login />
    </div>
  )
}

export  default LoginPage