import React from "react";
import { Container, Flex, HStack, Box, Image, Center, Text, Stack, 
  Popover, PopoverTrigger, PopoverContent, PopoverArrow, 
  PopoverBody, ListItem, UnorderedList, Button } from "@chakra-ui/react";
import { Link} from "react-router-dom";
import ProjectLogo from "../../assets/projectlogo.png"
import SignIn from "../../Pages/SignIn"
import SmallScreenNavbar from "./SmallScreenNavbar";




function Navbar () {

   
    const links = {color:"gray", cursor:"pointer"};
    const links1 = {color:"#4A90E2", cursor:"pointer"}

    return (


        <Container minW="103%"
        ml="-18px"
        mb="3px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        position="sticky"
        top="0"
        zIndex="4"
        backgroundColor="white"
        >
            <Flex h="74px"  w={["95%","95%","80%"]} m="auto" justifyContent={"space-between"}>
            
      <Center>
      <Box>
        <Link to="/"><Image src={ProjectLogo} alt='Nifty Npm' h="30px" align="center" /></Link>
     </Box>
      </Center>
      

     <HStack display={["none", "none","flex"]} minW="64%" justifyContent="space-around">

     <HStack>
        <Box>
        <Popover trigger="hover">
        {({ isOpen, onClose }) => (
         <>
  <PopoverTrigger>
    <Center><Text fontSize=".95rem" fontWeight="500" _hover={links}>Jobs</Text></Center>
  </PopoverTrigger>
  <PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" fontWeight="500" maxW="300px" borderRadius="12px">
    <PopoverArrow />
  
    <PopoverBody>
      <Container alignItems="start">

     <Flex>
      <HStack alignItems="start">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
  <ListItem _hover={links1}><Link to="/user/recommendedjobs" onClick={onClose}>Recommended jobs</Link></ListItem>
  <ListItem onClick={onClose} _hover={links1}>Jobs from recruiters</ListItem>
  <ListItem onClick={onClose}  _hover={links1}>Jobs from alerts</ListItem>
  <ListItem onClick={onClose}  _hover={links1}>Application status</ListItem>
  <ListItem onClick={onClose}  _hover={links1}>Saved jobs</ListItem>
</UnorderedList>
         </HStack>
      
         </Flex>
      </Container>
    </PopoverBody>

  </PopoverContent>
  </>
        )}
</Popover>
        </Box>
     </HStack>





     <HStack mr="30px">
        <Box>
        <Popover trigger="hover">
        {({ isOpen, onClose }) => (
         <>
  <PopoverTrigger>
    <Center><Link to="/companies"><Text fontSize=".95rem" fontWeight="500" _hover={links}>Companies</Text></Link></Center>
  </PopoverTrigger>
  <PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" minW="700px" fontWeight="500">
    <PopoverArrow />
    
    <PopoverBody borderRadius="12px" alignItems="start" ml="0px">
      <Stack alignItems="start">

     <Flex pt="20px" minWidth="100%">
      <HStack alignItems="start" ml="-10px" borderRight="1px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pr="25px" pb="10px">
  <ListItem fontWeight="bold">Explore categories</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Unicorn</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">MNC</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Startup</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Product based</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Internet</ListItem>
</UnorderedList>
         </HStack>


         <HStack alignItems="start" ml="-10px" borderRight="1px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pr="25px" pl="25px" pb="10px">
  <ListItem fontWeight="bold">Explore collections</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Top companies</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">IT companies</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Fintech companies</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Sponsored companies</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Featured companies</ListItem>
</UnorderedList>
         </HStack>

         <HStack alignItems="start" ml="-10px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pl="25px" pr="25px" pb="10px">
  <ListItem fontWeight="bold">Research companies</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Interview questions</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Company salaries</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Company reviews</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Salary Calculator</ListItem>
</UnorderedList>
         </HStack>


         </Flex>
      </Stack>
    </PopoverBody>

  </PopoverContent>
  </>
        )}
</Popover>
        </Box>
     </HStack>







     <HStack mr="30px">
        <Box>
        <Popover trigger="hover">
        {({ isOpen, onClose }) => (
         <>


  <PopoverTrigger>
    <Center><Text fontSize=".95rem" fontWeight="500" _hover={links}>Services</Text></Center>
  </PopoverTrigger>
  <PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" ml={["0px", "0px","20px", "18px"]} minW={["","","800px","1010px"]} fontWeight="500">
    <PopoverArrow />

    <PopoverBody>
      <Container minW="100%" alignItems="start">

     <Flex pt="20px" minWidth="100%" fontSize={["14px", "14px","13px","17px"]}>
      <HStack alignItems="start" ml="-10px" borderRight="1px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pr="30px" pb="10px">
  <ListItem fontWeight="bold">Resume writing</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px"  color="#445578">Text resume</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px"  color="#445578">Visual resume</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px"  color="#445578">Resume critique</ListItem>

  <ListItem fontWeight="bold" pt="28px">Find Jobs</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Jobs4u</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Priority applicant</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Contact us</ListItem>

</UnorderedList>
         </HStack>


         <HStack alignItems="start" ml="-10px" borderRight="1px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pl="30px" pr="30px" pb="10px">

  <ListItem fontWeight="bold">Get recruiter's attention</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Resume display</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Recruiter connection</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Job search booster</ListItem>

  <ListItem fontWeight="bold" pt="28px">Monthly subscriptions</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Basic & premium plans</ListItem>

</UnorderedList>
         </HStack>




         <HStack alignItems="start" ml="-10px" borderRight="1px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pl="30px" pr="30px" pb="10px">

  <ListItem fontWeight="bold">Learn & upskill</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Data Science courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Technology courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Management courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Finance courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Design courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Healthcare courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Degree programs</ListItem>


</UnorderedList>
         </HStack>



         <HStack alignItems="start" ml="-10px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pl="30px" pb="10px">

  <ListItem fontWeight="bold">Free resume resources</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Resume maker for freshers</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Resume quality score</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Resume samples</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" color="#445578">Job letter samples</ListItem>

</UnorderedList>
         </HStack>


         </Flex>
      </Container>
    </PopoverBody>

  </PopoverContent>
  </>
        )}
</Popover>
        </Box>
     </HStack>


     <HStack>
        <Box>
        <Center>
          <HStack>
         
          <Box  ><SignIn /></Box>
          </HStack>
          
          </Center>
        </Box>
     </HStack>

     <HStack mr="30px">
        <Box>
        <Link to="/signup"><Button colorScheme="red" variant='solid' borderRadius='md'>Register</Button></Link>
        </Box>
     </HStack>

     <HStack mr="30px">
        <Box>
        <Link to='/admin'><Button color={"#fff"} _hover={{bgColor:"#609DE6"}}
                     backgroundColor="#4A90E2">
                        For Employers
                    </Button></Link>
        </Box>
     </HStack>

    

     </HStack>


     <HStack display={["flex","flex","none"]}>
     <SmallScreenNavbar/>
     </HStack>

    
            </Flex>
        </Container>
    )
}

export default Navbar;


































































// import React, { useState } from "react";
// import { Box,  Text, Stack, Flex, Icon,Image,Button,Popover,PopoverContent,PopoverTrigger,Center, PopoverArrow, 
//      PopoverBody,  ListItem, 
//     UnorderedList, Container,HStack,MenuButton,MenuList,Menu} from "@chakra-ui/react";
// import { MdClose, MdMenu } from "react-icons/md";
// import ProjectLogo from "../assets/projectlogo.png"
// import {  Link, NavLink, useNavigate } from "react-router-dom";
// import { ChevronDownIcon } from '@chakra-ui/icons'
// import SignIn from "../Pages/SignIn";
// // import { useNavigate } from "react-router-dom";

// const Logo = () => {
    
//   return (
    
//     <Box >
        
//             <NavLink to="/"> <Image src={ProjectLogo} ml={{lg:"150px"}} w="100px" alt="logo"/></NavLink>
//     </Box>
    
//   );
// };

// const MenuToggle = ({ toggle, isOpen }) => {
//   return (
//     <Box display={{ base: "block", md: "none" }} onClick={toggle}>
//       {isOpen ? <Icon as={MdClose} /> : <Icon as={MdMenu} />}
//     </Box>
//   );
// };

// const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
//   return (
//     <NavLink href={to}>
//       <Text display="block" {...rest}>
//         {children}
//       </Text>
//     </NavLink>
//   );
// };
// const MenuLinks1 = ({ isOpen }) => {
//     const links = {color:"grey", cursor:"pointer"};
//   return (
//     <Box
//       display={{ base: isOpen ? "block" : "none", md: "block" }}
//       flexBasis={{ base: "100%", md: "auto" }}
//     >
//       <Stack
//         spacing={20}
//         align="center"
//         justify={["center", "space-between", "flex-end"]}
//         direction={["column", "row"]}
//         paddingTop={[4, 4, 0]}
//         ml={{lg:"-100px"}}
//         // border="1px solid red"
//       >
//            <MenuItem  >
//         <Box  p="20%"  >
//         <Popover trigger="hover">
//         {({ isOpen, onClose }) => (
//          <>
//   <PopoverTrigger>
//     <Center><NavLink to="/user"><Text fontSize=".95rem" fontWeight="500" _hover={links} align="center">Jobs </Text></NavLink></Center>
//   </PopoverTrigger>
//   <PopoverContent m="auto" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" width={{lg:"80%"}} fontWeight="500">
//     <PopoverArrow />
    
    
    
//     <PopoverBody >
//       <Container minW="1300px" alignItems="start" >

//      <Flex>
//       <HStack p="5" alignItems="start" mr="40px" ml="-20px" borderRight={"1px"}>
      
//          <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
         
//          <ListItem ><b>Popular categories</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>IT jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Sales jobs</ListItem>
//   <ListItem onClick={onClose}  _hover={links}>Marketing jobs</ListItem>
//   <ListItem onClick={onClose}  _hover={links}>Data Science jobs</ListItem>
//   <ListItem onClick={onClose}  _hover={links}>HR jobs</ListItem>
//   <ListItem onClick={onClose}  _hover={links}>Engineering jobs</ListItem>
// </UnorderedList>
//          </HStack>
//          <HStack p="5" alignItems="start" borderRight={"1px"}>
//          <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
//          <ListItem ><b>Jobs in demand</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>MFresher jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>MNC jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Remote jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Work from home jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Walk-in jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Part-time jobs</ListItem>
// </UnorderedList>
//          </HStack>
//          <HStack p="5" alignItems="start" borderRight={"1px"}>
//          <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
//          <ListItem ><b>Jobs by location</b></ListItem>
//          <ListItem onClick={onClose} _hover={links}>MFresher jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>MNC jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Remote jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Work from home jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Walk-in jobs</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Part-time jobs</ListItem>
  
// </UnorderedList>
//          </HStack>
//          <HStack p="5" alignItems="start">
//          <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
//          <ListItem ><b>Explore more jobs</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>Jobs by category</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Jobs by skill</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Jobs by location</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Jobs by designation</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Create free job alert</ListItem>
  
// </UnorderedList>
//          </HStack>
//          </Flex>
//       </Container>
//     </PopoverBody>
    
    

//   </PopoverContent>
//   </>
//         )}
// </Popover>
//         </Box>
//         </MenuItem>

       
//         <MenuItem to="#">
//         <Box  p="20%" >
//         <Popover trigger="hover">
//         {({ isOpen, onClose }) => (
//          <>
//   <PopoverTrigger>
//     <Center><NavLink to="/companies"><Text fontSize=".95rem" fontWeight="500" _hover={links}>Companies </Text></NavLink></Center>
//   </PopoverTrigger>
//   <PopoverContent m="auto" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" width={{lg:"70%"}} fontWeight="500">
//     <PopoverArrow />
    
    
    
//     <PopoverBody>
//       <Container minW="1500px" alignItems="start">

//      <Flex>
//       <HStack p="5" alignItems="start" mr="40px" ml="-20px" borderRight={"1px"}>
      
//          <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" >
         
//          <ListItem ><b>Explore category</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>Unicorn</ListItem>
//   <ListItem onClick={onClose} _hover={links}>MNC</ListItem>
//   <ListItem onClick={onClose}  _hover={links}>Startup</ListItem>
//   <ListItem onClick={onClose}  _hover={links}>Product based</ListItem>
//   <ListItem onClick={onClose}  _hover={links}>Internet</ListItem>
  
// </UnorderedList>
//          </HStack>
//          <HStack p="5" alignItems="start" borderRight={"1px"}>
//          <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
//          <ListItem ><b>Explore collection</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>Top companies</ListItem>
//   <ListItem onClick={onClose} _hover={links}>IT companies</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Fintech companies</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Sponsored companies</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Featured companies</ListItem>
  
// </UnorderedList>
//          </HStack>
//          <HStack p="5" alignItems="start" borderRight={"1px"}>
//          <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
//          <ListItem ><b>Research companies</b></ListItem>
//          <ListItem onClick={onClose} _hover={links}>Interview questions</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Company salaries</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Company reviews</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Salary Calculator</ListItem>
  
  
// </UnorderedList>
//          </HStack>
//          <HStack p="5" alignItems="start" >
//          <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
//          <ListItem ><b>Explore more jobs</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>Jobs by category</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Jobs by skill</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Jobs by location</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Jobs by designation</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Create free job alert</ListItem>
  
// </UnorderedList>
//          </HStack>
//          </Flex>
//       </Container>
//     </PopoverBody>
    
    

//   </PopoverContent>
//   </>
//         )}
// </Popover>
//         </Box>
//         </MenuItem>

//         <MenuItem to="#">
//         <Box  p="20%"  >
//         <Popover trigger="hover">
//         {({ isOpen, onClose }) => (
//          <>
//   <PopoverTrigger>
//     <Center><NavLink to="/services"><Text fontSize=".95rem" fontWeight="500" _hover={links}>Services </Text></NavLink></Center>
//   </PopoverTrigger>
//   <PopoverContent m="auto" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" width={{lg:"90%"}} fontWeight="500">
//     <PopoverArrow />
    
    
    
//     <PopoverBody>
//       <Container minW="1400px" alignItems="start">

//      <Flex>
//       <HStack p="5" alignItems="start" mr="40px" ml="-20px" borderRight={"1px"}>
      
//          <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" >
         
//          <ListItem ><b>Resume writing</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>Text resume</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Visual resume</ListItem>
//   <ListItem onClick={onClose}  _hover={links}>Resume critique</ListItem>
//   <br></br>
//   <ListItem ><b>Find Jobs</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>Jobs4u</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Priority applicant</ListItem>
//   <ListItem onClick={onClose}  _hover={links}>Contact us</ListItem>
 
  
// </UnorderedList>
//          </HStack>
//          <HStack p="5" alignItems="start" borderRight={"1px"}>
//          <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
//          <ListItem ><b>Get recruiter's attention</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>Resume display</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Recruiter connection</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Job search booster</ListItem>
//   <br></br>
//   <ListItem ><b>Monthly subscriptions</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>Basic & premium plans</ListItem>
  
  
// </UnorderedList>
//          </HStack>
//          <HStack p="5" alignItems="start" borderRight={"1px"}>
//          <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
//          <ListItem ><b>Research companies</b></ListItem>
//          <ListItem onClick={onClose} _hover={links}>Interview questions</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Company salaries</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Company reviews</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Salary Calculator</ListItem>
  
  
// </UnorderedList>
//          </HStack>
//          <HStack p="5" alignItems="start" borderRight={"1px"}>
//          <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
//          <ListItem ><b>Learn & upskill</b></ListItem>
//   <ListItem onClick={onClose} _hover={links}>Data Science courses</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Technology courses</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Management courses</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Finance courses</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Design courses</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Healthcare courses</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Degree programs</ListItem>
  
// </UnorderedList>
//          </HStack>

         
//          <HStack p="5" alignItems="start" >
//          <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
//          <ListItem ><b>Free resume resources</b></ListItem>
//          <ListItem onClick={onClose} _hover={links}>Resume maker for freshers</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Resume quality score</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Resume samples</ListItem>
//   <ListItem onClick={onClose} _hover={links}>Job letter samples</ListItem>
  
  
// </UnorderedList>
//          </HStack>
//          </Flex>
//       </Container>
//     </PopoverBody>
    
    

//   </PopoverContent>
//   </>
//         )}
// </Popover>
//         </Box>
//         </MenuItem>
     
     
      
//       </Stack>
//     </Box>
//   );
// };

// const MenuLinks = ({ isOpen }) => {
    



//   return (
//     <Box
//       display={{ base: isOpen ? "block" : "none", md: "block" }}
//       flexBasis={{ base: "100%", md: "auto" }}
//     >
//       <Stack
//         spacing={8}
//         align="center"
//         justify={["center", "space-between", "flex-end"]}
//         direction={["column", "row"]}
//         paddingTop={[4, 4, 0]}
//         mr={{lg:"150px"}}
//         // border="1px solid red"
//       >
       
     
//         <MenuItem to="#">
//         <Flex gap="10"> 
//               <SignIn />
              
//               </Flex>
//             </MenuItem>
            
//         <MenuItem to="#">
//             <NavLink to="/signup"><Button colorScheme="red" variant='solid' borderRadius='md'>Register</Button></NavLink>
//         </MenuItem>
//         <MenuItem to="#">
//         <Menu>
//                     <Link to='/admin'><Button color={"#fff"} _hover={{bgColor:"#609DE6"}}
//                      backgroundColor="#4A90E2">
//                         For Employers
//                     </Button></Link>
//                     {/* <MenuList backgroundColor={"white"} color={"black"} align="center">
//                        <MenuItem>Hiring Solutions</MenuItem>
//                        <MenuItem onClick={adminLoginFunc}>Employer Login</MenuItem>
//                        <MenuItem>
//                         <Button onClick={handelLogout}>LOGOUT</Button>
//                         </MenuItem> *
//                     </MenuList> */}
//                 </Menu>
      
//        </MenuItem>
//       </Stack>
//     </Box>
//   );
// };

// const NavBarContainer = ({ children }) => {
//   return (
//     <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       // wrap="wrap"
//       // width="100%"
//       // overflowX={"hidden"}
//       boxSizing="border-box"
//       padding={1}
//       // border="1px solid red"
//       bg={"transparent"}
//       color={"gray.600"}
//       maxW="100%"
//         boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
//         position="sticky"
//         top="0"
//         zIndex="10"
//         background="white"
//     >
//       {children}
//     </Flex>
//   );
// };

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <NavBarContainer>
//       <Logo  />
//       <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
//       <MenuLinks1 isOpen={isOpen}/>
//       <MenuLinks isOpen={isOpen} />
//     </NavBarContainer>
    
//   );
// }

// export default Navbar;
























