import { Input, Flex, FormLabel, Button, Box, Text} from "@chakra-ui/react"
import React, { useState,useContext } from "react"

import { AppContext } from "../../context/AppContext"

const Login = () => {
  const {auth,setAuth}  = useContext(AppContext)
    const [userCred, setUserCred] = useState({email:"", password:""})
 
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUserCred({...userCred, [name]:value})
        localStorage.setItem("token", "true")
    }

    
    const handleLogin = async(e)=>{
        e.preventDefault()
        
        // fetch("http://localhost:8080/login", {
        //   method:"POST"
        // }).then((res)=>{
        //   return res.text()
        // }) .then(xt=>{
        //   console.log(xt);
        // })
        let data = JSON.stringify({email:userCred.email, password:userCred.password})

        let responseData =  await fetch("http://localhost:8080/login", {
          method:"POST",
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body:data
        })

        let res2 = await responseData.json()
        if(res2.message){
          setAuth({...auth, isAuth:true})
        }
      

    }
   

  return (
    <Box w={["96%", "96%", "50%", "40%"]} mx={"auto"} boxShadow={"lg"} mt={"11%"} border={"1px solid #ddd"}> 
       <form onSubmit={handleLogin}>
       <Flex flexDirection={"column"} gap={"10px"} px={"20px"} py="10px">
            <Box>
                <Text textAlign={"center"} fontSize={"26px"}> LOGIN </Text>
            </Box>
            <FormLabel>Username</FormLabel>
            <Input onChange={handleChange} value={userCred.email}  name="email" placeholder="username" w={"100%"} type={"text"} />
            <FormLabel>Password</FormLabel>
            <Input onChange={handleChange}  value={userCred.password} name="password" placeholder="password" w={"100%"} type={"password"} />
            <Button my={"20px"} colorScheme={"twitter"} w={"100px"} type={"submit"}>Submit</Button>
        </Flex>
       </form>
    </Box>
  )
}


export  default Login