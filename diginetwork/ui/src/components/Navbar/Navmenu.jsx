import {
    Box, Flex, Text
  } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
  
  
  export const Navmenu = () => {
    const {auth, setAuth} = useContext(AppContext)

    const handleLogout=()=>{
      setAuth({...auth, isAuth:false})
      localStorage.removeItem("token")
    }
    return (
      <Flex gap="20px">
        <Link to="/"><Text fontSize={["14px", "16px", "16px", "18px"]}> Home</Text> </Link>
        {!auth.isAuth?
        <Link to="/login"> <Text fontSize={["14px", "16px", "16px", "18px"]}>Login</Text> </Link>
        :
        <Link > <Text onClick={handleLogout} fontSize={["14px", "16px", "16px", "18px"]}>Logout</Text> </Link>
        }
        </Flex>
    )
  }
  