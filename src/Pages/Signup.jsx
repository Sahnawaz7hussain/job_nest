import React,{useState} from 'react'
import { Image,Flex, Button,FormControl,Grid,GridItem,Heading,Input,Text,VStack,Box,Container,useDisclosure, HStack} from '@chakra-ui/react'
import { useNavigate,Link,NavLink} from 'react-router-dom'
// import SignIn from './SignIn'
// import { FaGoogle } from 'react-icons/fa'
import {GiSchoolBag} from "react-icons/gi"
import ProjectLogo from "../assets/projectlogo.png"
// import Regimage from "../assets/regimage.png"
import { useMediaQuery } from "@chakra-ui/react"
import {GiDiscGolfBag} from "react-icons/gi"
import {FcGoogle} from "react-icons/fc"
import { FaCheckCircle } from 'react-icons/fa'




const Signup = () => {

  const navigate=useNavigate()
  const [passType1, setPassType1] = useState(true);
  let arr=JSON.parse(localStorage.getItem("signupData")) || []
	
  const [input,setInput]=useState({
    name:"",
    email:"",
    password:"",
    mobile:""
  })

	const handelSubmit=(e)=>{
    e.preventDefault()
    // console.log(input)
    arr.push(input)
    console.log(arr)
    localStorage.setItem("signupData",JSON.stringify(arr))
    navigate("/signin")
   
  }



const [isLargerThan600] = useMediaQuery('(min-width: 600px)')


  return (
    <>
   
    <form onSubmit={handelSubmit} >
      <Box 
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" p="5">
          
      <Flex ml={"10%"} mr="10%" justifyContent={"space-between"} align="center">
        
      <Link to="/"><Image  src={ProjectLogo} /></Link>
      {/* <Spacer></Spacer> */}
      
      <Text as={"p"}>Already Registered? 
        <Link to="/signin">
       <Box as='span' color="blue"> Login </Box></Link>
        here</Text>
      </Flex>

      </Box>


      <HStack minW="100%"bgColor="#fafbfe">

     
     

      <HStack maxW="80%" m="auto" alignItems="start">

        {/* https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg */}

        {/* <HStack>
        <Box>
          <Image src={Regimage} alt="" />
        </Box>
        </HStack> */}

        <VStack  maxW="290px" mt="135px" position="fixed" bgColor="#FFF" boxShadow={"md"} rounded='md' alignItems={"start"} p="0px 22px" pb="15px">
          <Box ml="72px" mt="-55px" >
            <Image src=" https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg" alt="" />
          </Box>

          <Box>
            <Text fontWeight="bold" fontSize="18px">On registering, you can</Text>
          </Box>

          <HStack minW="100%">
            <Box mt="4px"><FaCheckCircle color="green" fontSize="16px" /></Box>
            <Box lineHeight="20px"><Text mt="8px" fontSize="16px" color="#445578">Build your profile and let recruiters find you</Text></Box>
            </HStack>

            <HStack minW="100%">
            <Box  mt="4px"><FaCheckCircle color="green" fontSize="16px" /></Box>
            <Box lineHeight="20px"><Text mt="8px" fontSize="16px" color="#445578">Get job postings delivered right to your email</Text></Box>
            </HStack>

            <HStack  minW="100%">
            <Box mt="24px"><FaCheckCircle color="green" fontSize="16px" /></Box>
            <Box lineHeight="20px"><Text mt="8px" fontSize="16px" color="#445578">Find a job and grow your career</Text></Box>
            </HStack>
        </VStack>




        <HStack w="73%">

      
<VStack p="0px 90px"  ml="320px" minW="full" h="full" spacing={10} alignItems="flex-start" bgColor="#FFF" boxShadow={"md"} rounded='md'>
<VStack margin="auto">
 <Text fontWeight="bold" ml="-250px" textAlign="left" fontSize="32px" pt="60px">Find a job & grow your career</Text>


 
</VStack >


<Grid  templateColumns="repeate(1,1fr)" gap={2} w="40%">
<GridItem colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired >
         <Text>Full Name</Text>
         <Input
         isRequired
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
         isRequired
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
         isRequired
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
         isRequired
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
    
     <Text as={"p"} fontSize="12px">By clicking Register, you agree to the Terms and Conditions & Privacy Policy of JobNest.in</Text>
     
     <Input bg="blue.200" _hover={{bg:"blue"}} mt="4" color="white" type="submit" w="50%" value={"Register"}></Input>
     
         
     
     
 </GridItem>
</Grid>








</VStack>



</HStack>

<VStack >
  <Box mt="190px" ml="120px">
  <Text textAlign="center" mb='-10px'>Or</Text>
  <Text>Continue with</Text>

  <Button color="#4A90E2" bgColor="#fff" border="1px solid #4A90E2" borderRadius="50px" leftIcon={<FcGoogle size="25"/>}>Google</Button>
  </Box>
 
</VStack>

      </HStack>
     
      </HStack>

    </form>

    



<Container minW="100%" bg="#fafbfe">
<HStack pb="1px" mt="20px" justifyContent={"space-between"} color="blue" w="35%" m="auto" fontSize={"12"} >
  <Box mt="40px">
    <HStack minW="100%">
    <Text >About  |</Text>
  <Text>Contact Us |</Text>
  <Text>FAQs |</Text>
  <Text>Terms and Conditions |</Text>
  <Text>RePort a Problem |</Text>
  <Text>Privacy Policy </Text>
    </HStack>
  </Box>
</HStack>
<Text w="30%" m="auto" mb="10%" ml="45%" fontSize={"10"}>All rights reserved © 2022 Info Edge India Ltd.</Text>

</Container>

    </>
     

  )
}

export default Signup
