import React, { useState } from "react";
import { Box,  Text, Stack, Flex, Icon,Image,Button,Popover,PopoverContent,PopoverTrigger,Center, PopoverArrow, 
     PopoverBody,  ListItem, 
    UnorderedList, Container,HStack,MenuButton,MenuList,Menu} from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";
import ProjectLogo from "../assets/projectlogo.png"
import {  NavLink } from "react-router-dom";
import { ChevronDownIcon } from '@chakra-ui/icons'


const Logo = () => {
    
  return (
    
    <Box >
        
            <NavLink to="/"> <Image src={ProjectLogo} ml={{lg:"150px"}} /></NavLink>
    </Box>
    
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <Icon as={MdClose} /> : <Icon as={MdMenu} />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <NavLink href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </NavLink>
  );
};
const MenuLinks1 = ({ isOpen }) => {
    const links = {color:"grey", cursor:"pointer"};
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={20}
        align="center"
        justify={["center", "space-between", "flex-end"]}
        direction={["column", "row"]}
        paddingTop={[4, 4, 0]}
        ml={{lg:"-250px"}}
      >
           <MenuItem  >
        <Box  p="20%">
        <Popover trigger="hover">
        {({ isOpen, onClose }) => (
         <>
  <PopoverTrigger>
    <Center><NavLink to="/jobs"><Text fontSize=".95rem" fontWeight="500" _hover={links} align="center">Jobs </Text></NavLink></Center>
  </PopoverTrigger>
  <PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" width={{lg:"70%"}} fontWeight="500">
    <PopoverArrow />
    
    
    
    <PopoverBody>
      <Container minW="1200px" alignItems="start">

     <Flex>
      <HStack alignItems="start" mr="40px" ml="-20px">
      
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
         
         <ListItem ><b>Popular categories</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>IT jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>Sales jobs</ListItem>
  <ListItem onClick={onClose}  _hover={links}>Marketing jobs</ListItem>
  <ListItem onClick={onClose}  _hover={links}>Data Science jobs</ListItem>
  <ListItem onClick={onClose}  _hover={links}>HR jobs</ListItem>
  <ListItem onClick={onClose}  _hover={links}>Engineering jobs</ListItem>
</UnorderedList>
         </HStack>
         <HStack alignItems="start">
         <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
         <ListItem ><b>Jobs in demand</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>MFresher jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>MNC jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>Remote jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>Work from home jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>Walk-in jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>Part-time jobs</ListItem>
</UnorderedList>
         </HStack>
         <HStack alignItems="start">
         <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
         <ListItem ><b>Jobs by location</b></ListItem>
         <ListItem onClick={onClose} _hover={links}>MFresher jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>MNC jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>Remote jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>Work from home jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>Walk-in jobs</ListItem>
  <ListItem onClick={onClose} _hover={links}>Part-time jobs</ListItem>
  
</UnorderedList>
         </HStack>
         <HStack alignItems="start">
         <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
         <ListItem ><b>Explore more jobs</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>Jobs by category</ListItem>
  <ListItem onClick={onClose} _hover={links}>Jobs by skill</ListItem>
  <ListItem onClick={onClose} _hover={links}>Jobs by location</ListItem>
  <ListItem onClick={onClose} _hover={links}>Jobs by designation</ListItem>
  <ListItem onClick={onClose} _hover={links}>Create free job alert</ListItem>
  
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
        </MenuItem>

       
        <MenuItem to="#">
        <Box  p="20%">
        <Popover trigger="hover">
        {({ isOpen, onClose }) => (
         <>
  <PopoverTrigger>
    <Center>,<NavLink to="/companies"><Text fontSize=".95rem" fontWeight="500" _hover={links}>Companies </Text></NavLink></Center>
  </PopoverTrigger>
  <PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" width={{lg:"60%"}} fontWeight="500">
    <PopoverArrow />
    
    
    
    <PopoverBody>
      <Container minW="1200px" alignItems="start">

     <Flex>
      <HStack alignItems="start" mr="40px" ml="-20px">
      
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" >
         
         <ListItem ><b>Explore category</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>Unicorn</ListItem>
  <ListItem onClick={onClose} _hover={links}>MNC</ListItem>
  <ListItem onClick={onClose}  _hover={links}>Startup</ListItem>
  <ListItem onClick={onClose}  _hover={links}>Product based</ListItem>
  <ListItem onClick={onClose}  _hover={links}>Internet</ListItem>
  
</UnorderedList>
         </HStack>
         <HStack alignItems="start">
         <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
         <ListItem ><b>Explore collection</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>Top companies</ListItem>
  <ListItem onClick={onClose} _hover={links}>IT companies</ListItem>
  <ListItem onClick={onClose} _hover={links}>Fintech companies</ListItem>
  <ListItem onClick={onClose} _hover={links}>Sponsored companies</ListItem>
  <ListItem onClick={onClose} _hover={links}>Featured companies</ListItem>
  
</UnorderedList>
         </HStack>
         <HStack alignItems="start">
         <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
         <ListItem ><b>Research companies</b></ListItem>
         <ListItem onClick={onClose} _hover={links}>Interview questions</ListItem>
  <ListItem onClick={onClose} _hover={links}>Company salaries</ListItem>
  <ListItem onClick={onClose} _hover={links}>Company reviews</ListItem>
  <ListItem onClick={onClose} _hover={links}>Salary Calculator</ListItem>
  
  
</UnorderedList>
         </HStack>
         <HStack alignItems="start">
         <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
         <ListItem ><b>Explore more jobs</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>Jobs by category</ListItem>
  <ListItem onClick={onClose} _hover={links}>Jobs by skill</ListItem>
  <ListItem onClick={onClose} _hover={links}>Jobs by location</ListItem>
  <ListItem onClick={onClose} _hover={links}>Jobs by designation</ListItem>
  <ListItem onClick={onClose} _hover={links}>Create free job alert</ListItem>
  
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
        </MenuItem>

        <MenuItem to="#">
        <Box  p="20%">
        <Popover trigger="hover">
        {({ isOpen, onClose }) => (
         <>
  <PopoverTrigger>
    <Center><NavLink to="/services"><Text fontSize=".95rem" fontWeight="500" _hover={links}>Services </Text></NavLink></Center>
  </PopoverTrigger>
  <PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" width={{lg:"80%"}} fontWeight="500">
    <PopoverArrow />
    
    
    
    <PopoverBody>
      <Container minW="1200px" alignItems="start">

     <Flex>
      <HStack alignItems="start" mr="40px" ml="-20px">
      
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" >
         
         <ListItem ><b>Resume writing</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>Text resume</ListItem>
  <ListItem onClick={onClose} _hover={links}>Visual resume</ListItem>
  <ListItem onClick={onClose}  _hover={links}>Resume critique</ListItem>
  <br></br>
  <ListItem ><b>Find Jobs</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>Jobs4u</ListItem>
  <ListItem onClick={onClose} _hover={links}>Priority applicant</ListItem>
  <ListItem onClick={onClose}  _hover={links}>Contact us</ListItem>
 
  
</UnorderedList>
         </HStack>
         <HStack alignItems="start">
         <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
         <ListItem ><b>Get recruiter's attention</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>Resume display</ListItem>
  <ListItem onClick={onClose} _hover={links}>Recruiter connection</ListItem>
  <ListItem onClick={onClose} _hover={links}>Job search booster</ListItem>
  <br></br>
  <ListItem ><b>Monthly subscriptions</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>Basic & premium plans</ListItem>
  
  
</UnorderedList>
         </HStack>
         <HStack alignItems="start">
         <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
         <ListItem ><b>Research companies</b></ListItem>
         <ListItem onClick={onClose} _hover={links}>Interview questions</ListItem>
  <ListItem onClick={onClose} _hover={links}>Company salaries</ListItem>
  <ListItem onClick={onClose} _hover={links}>Company reviews</ListItem>
  <ListItem onClick={onClose} _hover={links}>Salary Calculator</ListItem>
  
  
</UnorderedList>
         </HStack>
         <HStack alignItems="start">
         <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
         <ListItem ><b>Learn & upskill</b></ListItem>
  <ListItem onClick={onClose} _hover={links}>Data Science courses</ListItem>
  <ListItem onClick={onClose} _hover={links}>Technology courses</ListItem>
  <ListItem onClick={onClose} _hover={links}>Management courses</ListItem>
  <ListItem onClick={onClose} _hover={links}>Finance courses</ListItem>
  <ListItem onClick={onClose} _hover={links}>Design courses</ListItem>
  <ListItem onClick={onClose} _hover={links}>Healthcare courses</ListItem>
  <ListItem onClick={onClose} _hover={links}>Degree programs</ListItem>
  
</UnorderedList>
         </HStack>

         
         <HStack alignItems="start">
         <UnorderedList listStyleType="none" spacing={1.5} textAlign="left" >
         <ListItem ><b>Free resume resources</b></ListItem>
         <ListItem onClick={onClose} _hover={links}>Resume maker for freshers</ListItem>
  <ListItem onClick={onClose} _hover={links}>Resume quality score</ListItem>
  <ListItem onClick={onClose} _hover={links}>Resume samples</ListItem>
  <ListItem onClick={onClose} _hover={links}>Job letter samples</ListItem>
  
  
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
        </MenuItem>
     
     
      
      </Stack>
    </Box>
  );
};

const MenuLinks = ({ isOpen }) => {
    
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end"]}
        direction={["column", "row"]}
        paddingTop={[4, 4, 0]}
        mr={{lg:"150px"}}
      >
       
     
        <MenuItem to="#">
            <NavLink to="/signin"><Button colorScheme='#457eff' variant='outline' borderRadius='md'>Login</Button></NavLink>
            </MenuItem>
            
        <MenuItem to="#">
            <NavLink to="/signup"><Button colorScheme="red" variant='solid' borderRadius='md'>Register</Button></NavLink>
        </MenuItem>
        <MenuItem to="#">
        <Menu>
                    <MenuButton color={"black"}
                    as={Button} rightIcon={<ChevronDownIcon />}>
                        For Employers
                    </MenuButton>
                    <MenuList backgroundColor={"white"} color={"black"} align="center">
                        <MenuItem>Buy Online</MenuItem>
                       <MenuItem>Hiring Solutions</MenuItem>
                       <MenuItem>Employer Login</MenuItem>
                        
                    </MenuList>
                </Menu>
      
       </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      width="100%"
      padding={1}
      
      bg={"transparent"}
      color={"gray.600"}
      maxW="100%"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        position="sticky"
        top="0"
        zIndex="10"
        background="white"
    >
      {children}
    </Flex>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo  />
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuLinks1 isOpen={isOpen}/>
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
    
  );
}

export default Navbar;
