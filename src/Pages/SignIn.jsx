import React,{useState} from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,Input,useDisclosure,Text,Flex,
    FormLabel,Stack,Box,Spacer

  } from '@chakra-ui/react'
  import {FcGoogle} from "react-icons/fc"
  import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [passType1, setPassType1] = useState(true);
  const navigate=useNavigate()
  const [input,setInput]=useState({
    
    email:"",
    password:"",
    
  })
  const handelLogin=(e)=>{
    e.preventdefault()
    const loggeduser=JSON.parse(localStorage.getItem("user"))
    if(input.email===loggeduser.email && input.password===loggeduser.password){
      localStorage.setItem("loggedin",true)
      navigate("/")
    }
    else{
      alert("wrong credentials")
    }
  }
  return (
    <>
      <Button onClick={onOpen}>Login</Button>
      <Drawer isOpen={isOpen} onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader p={10}>
                <Flex justifyContent={"space-between"}>
                    <Text fontSize={"30"}>Login</Text>
                    <Text fontSize={"18"}  p="2" color="blue">Register for free</Text>
                </Flex>

          </DrawerHeader>

          <DrawerBody>
          
            <form
              id='my-form'
             onSubmit={handelLogin}
            >
                <Stack spacing='10%' p={10}>
                <Box>
                <FormLabel htmlFor='username'>Username</FormLabel>
              <Input 
              placeholder='Enter your active Email ID / Username' 
              name="email"
         value={input.email}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
			
              />
                </Box>
                 
                <Box>
                <FormLabel htmlFor='username'>Password</FormLabel>
                <Flex>
                <Input placeholder="Enter your password"
              type={passType1?'password':'text'}
              name="password"
         value={input.password}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
            
              
              />
              <Button onClick={()=>{setPassType1(!passType1)}}>
			{passType1?'show':'hide'}</Button>

            </Flex>

              <Text color="blue" align="end" fontSize={12}>Forgot Password ?</Text>
                </Box>
                <Box backgroundColor={"blue"} >
                <Input color="white" type={"submit"} value="Login"  form='my-form' 
                />
                </Box>
                <Box align="center">
                    <Text color="blue">Use OTP to Login</Text>
                </Box>
                <Box display={"flex"}>
                    <Text w="50%" >
                        <hr >
                       </hr>
                    </Text>
                    <Text mt="-3">or</Text>
                    <Text w="50%" >
                        <hr >
                       </hr>
                    </Text>
                </Box>
                <Box align="center">
                <Button  w="100%" borderRadius={"20"} leftIcon={<FcGoogle size={25} align="start"/>}>
             Sign in with Google
            </Button>
                </Box>
                </Stack>
              
            </form>
            
          </DrawerBody>
          
          

          
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SignIn

