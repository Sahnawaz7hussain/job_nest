import React,{useState} from 'react'
import { Image,Flex,Tooltip,Alert,AlertIcon,AlertTitle, Button,FormControl,Grid,GridItem,Heading,Input,Text,VStack,Box,Container,useDisclosure} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn'
// import { FaGoogle } from 'react-icons/fa'
import {GiSchoolBag} from "react-icons/gi"
import ProjectLogo from "../assets/projectlogo.png"
import Regimage from "../assets/regimage.png"
import { useMediaQuery } from "@chakra-ui/react"
import {GiDiscGolfBag} from "react-icons/gi"
import {FcGoogle} from "react-icons/fc"



const Signup = () => {

  const navigate=useNavigate()
  const [passType1, setPassType1] = useState(true);
	
  const [input,setInput]=useState({
    name:"",
    email:"",
    password:"",
    mobile:""
  })

	const handelSubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem("user",JSON.stringify(input))
    navigate("/signin")
   
  }



const [isLargerThan600] = useMediaQuery('(min-width: 600px)')


  return (
    <>
   
    <form onSubmit={handelSubmit} >
      <Box 
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" >
          
      <Flex ml={"10%"} mr="10%" justifyContent={"space-between"} align="center">
      <Image src={ProjectLogo}  />
      {/* <Spacer></Spacer> */}
      <p  
    
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
        name="name"
         value={input.name}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
         />
     </FormControl>
 </GridItem>
 <GridItem colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired>
         <Text>Email</Text>
         <Input
         type="email"
         placeholder='Tell us your Email ID'
         name="email"
         value={input.email}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
       
         />
     </FormControl>
 </GridItem>
 <GridItem  colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired>
         <Text>Password</Text>
         <Flex justifyContent={"space-evenly"}>
         <Input
         type={passType1?'password':'text'}
         placeholder='Create a password for your account'
         name="password"
         value={input.password}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
         
         >
          
         </Input>
         
         
         
         <Button  onClick={()=>{setPassType1(!passType1)}}>
			  {passType1?'show':'hide'}</Button>
         </Flex>
         
         
     </FormControl>
 </GridItem>
 
 <GridItem  colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired>
         <Text>Mobile Number</Text>
         <Input
         type="number"
         placeholder='Enter your Mobile Number'
         name="mobile"
         value={input.mobile}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
        
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
     
     <Input  type="submit" w="full" value={"Register"}></Input>
     
         
     
     
 </GridItem>
</Grid>








</VStack>



</Box>

<Box m="15%" ml="-30%" >
  <Text>Or Continue with</Text>
  <br />
  <Button leftIcon={<FcGoogle size="25"/>}>Google</Button>
</Box>

      </Flex>
     
  

    </form>



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

