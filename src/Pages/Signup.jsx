import React,{useState} from 'react'
import { Image,Flex,Tooltip,Alert,AlertIcon,AlertTitle, Button,FormControl,Grid,GridItem,Heading,Input,Text,VStack,Box,Container} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn'
import { FaGoogle } from 'react-icons/fa'
import {GiSchoolBag} from "react-icons/gi"
import ProjectLogo from "../assets/projectlogo.png"
import Regimage from "../assets/regimage.png"
import { useMediaQuery } from "@chakra-ui/react"
import {GiDiscGolfBag} from "react-icons/gi"


const Signup = () => {
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[mobile,setMobile]=useState("")

const [flag,setFlag]=useState(false)
const[login,setLogin]=useState(true)
const navigate=useNavigate()
const [pass, setPass] = useState("");

  let handleChange = e => {
    console.log("handle change is triggering", e.target.value);
    setPass(e.target.value);
  };

const handelSubmit=(e)=>{
  e.preventDefault()
  if(!name || !email || !password ){
    setFlag(true)

  }else{
    setFlag(false)
    localStorage.setItem("Email",JSON.stringify(email))
    localStorage.setItem("Password",JSON.stringify(password))
    localStorage.setItem("Mobile",JSON.stringify(mobile))
  
    console.log("saved in local storage")
    setLogin(login)
    navigate("/signin")
  }

}
const handelClick=(e)=>{
  e.preventDefault()
  setLogin(!login)
  
}

const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

  return (
    <>
    {login ? (
    <form onSubmit={handelSubmit}>
      <Box 
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" >
          
      <Flex ml={"10%"} mr="10%" justifyContent={"space-between"} align="center">
      <Image src={ProjectLogo}  />
      {/* <Spacer></Spacer> */}
      <p  
      onClick={handelClick}
      >Already Registered? <span color="blue"> Login </span> here</p>
      </Flex>

      </Box>
     

      <Flex >
        <Box mt={-40} position="fixed">
          <Image src={Regimage} margin={"50%"}  w="70%" />
        </Box>
        <Box w="40%" margin="auto">

      
<VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
<VStack margin="auto" >
 <Heading>Find a job & grow your career</Heading>


 
</VStack >
<Grid  templateColumns="repeate(1,1fr)" gap={2} w="full">
<GridItem colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired >
         <Text>Full Name</Text>
         <Input
         type="text"
         placeholder='What is your name?'
         value={name}
         onChange={(e)=>setName(e.target.value)}
      
         />
     </FormControl>
 </GridItem>
 <GridItem colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired>
         <Text>Email</Text>
         <Input
         type="email"
         placeholder='Tell us your Email ID'
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
       
         />
     </FormControl>
 </GridItem>
 <GridItem  colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired>
         <Text>Password</Text>
         <Input
         type="password"
         placeholder='Create a password for your account'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         onInput={handleChange} 
         
         />
        
         {pass.length > 6 ? <p>Password is Strong</p> : <p>Password is Too short</p>}
       
     </FormControl>
 </GridItem>
 <GridItem  colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired>
         <Text>Mobile Number</Text>
         <Input
         type="number"
         placeholder='+91 Mobile Number'
         value={mobile}
         onChange={(e)=>setMobile(e.target.value)}
        
         />
     </FormControl>
 </GridItem>

<GridItem colSpan={{base:2 ,lg:2}}>
<Text>Work Status</Text>
<Container maxW='1000px' marginTop='30px'  marginBottom={"30px"} display='grid' gridTemplateColumns= {isLargerThan600?"repeat(5,1fr)":"repeat(2,1fr)"} gap='30px'>

  <Button  leftIcon={<GiDiscGolfBag/>} colorScheme='white' border='1px solid skyblue' color='black' width={isLargerThan600? "180px":"150px"} height='60px' size='lg' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='20px 4px 20px 4px'  p={"10px"} _focus={{ outline: 0, boxShadow: "outline" }}>
       
       I'm Experienced
      
  </Button>
      
    
      <Button leftIcon={<GiSchoolBag/>} colorScheme='white' border='1px solid skyblue' color='black' width={isLargerThan600? "180px":"150px"} height='60px' size='lg' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='20px 4px 20px 4px' p={"10px"} _focus={{ outline: 0, boxShadow: "outline" }}>
        
        I'm Fresher
      </Button>

</Container>

</GridItem>
  
 





 
 <GridItem colSpan={{base:2 , md:2}} >
    
     <p >By clicking Register, you agree to the Terms and Conditions & Privacy Policy of JobNest.in</p>
     <Tooltip isDisabled>
     <Button type="submit" w="full" >Register</Button>
      </Tooltip>
         
     
     
 </GridItem>
</Grid>






{flag && (
<Alert status='error'>
<AlertIcon />
<AlertTitle>Please fill the details!</AlertTitle>

</Alert>
)}

</VStack>



</Box>

<Box m="15%" ml="-30%" >
  <Text>Or Continue with</Text>
  <br />
  <Button leftIcon={<FaGoogle/>}>Google</Button>
</Box>

      </Flex>
     
  

    </form>
):(
    <SignIn/>
)}

<Flex justifyContent={"space-between"} w="25%" m="auto" fontSize={"10"} >
  <Text >About  |</Text>
  <Text>Contact Us |</Text>
  <Text>FAQs |</Text>
  <Text>Terms and Conditions |</Text>
  <Text>RePort a Problem |</Text>
  <Text>Privacy Policy </Text>
</Flex>
<Text w="30%" m="auto" ml="45%" fontSize={"10"}>All rights reserved © 2022 Info Edge India Ltd.</Text>


    </>
     

  )
}

export default Signup

