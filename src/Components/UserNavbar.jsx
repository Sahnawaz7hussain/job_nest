import { Container, Flex, HStack, Box, Image, Center, Text, Stack, Button,
    color, Popover, PopoverTrigger, PopoverContent, PopoverArrow, 
    PopoverCloseButton, PopoverHeader, PopoverBody, VStack, List, ListItem, ListIcon,
    OrderedList,UnorderedList, Input, } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../assets/projectlogo.png"
import { FaAlignLeft, FaBell } from "react-icons/fa";
import ProfileSection from "./ProfileSection";


function UserNavbar () {

   
    const links = {color:"gray", cursor:"pointer"};
    const links1 = {color:"#4A90E2", cursor:"pointer"}
    const navigate = useNavigate()

    // const userProfileSection = () => {

    //   <Flex><ProfileSection /></Flex>
    // }

    //   const handleSignup = () => {
    //     navigate("/signup")
      
    // }

    return (
        <Container maxW="100%"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        position="sticky"
        top="0"
        zIndex="4"
        backgroundColor="white"
        >
            <Flex h="74px"  p="0px 9.5%" justifyContent={"space-between"}>
            
      <Center>
      <Box>
        <Link to="/user"><Image src={ProjectLogo} alt='Nifty Npm' h="30px" align="center" /></Link>
     </Box>
      </Center>
      

     <HStack minW="64%" justifyContent="space-between">

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
    <Center><Text fontSize=".95rem" fontWeight="500" _hover={links}>Companies</Text></Center>
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
  <PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" minW="1010px" fontWeight="500">
    <PopoverArrow />

    <PopoverBody>
      <Container minW="100%" alignItems="start">

     <Flex pt="20px" minWidth="100%">
      <HStack alignItems="start" ml="-10px" borderRight="1px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pr="30px" pb="10px">
  <ListItem fontWeight="bold">Resume writing</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Text resume</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Visual resume</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Resume critique</ListItem>

  <ListItem fontWeight="bold" pt="28px">Find Jobs</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Jobs4u</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Priority applicant</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Contact us</ListItem>

</UnorderedList>
         </HStack>


         <HStack alignItems="start" ml="-10px" borderRight="1px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pl="30px" pr="30px" pb="10px">

  <ListItem fontWeight="bold">Get recruiter's attention</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Resume display</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Recruiter connection</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Job search booster</ListItem>

  <ListItem fontWeight="bold" pt="28px">Monthly subscriptions</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Basic & premium plans</ListItem>

</UnorderedList>
         </HStack>




         <HStack alignItems="start" ml="-10px" borderRight="1px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pl="30px" pr="30px" pb="10px">

  <ListItem fontWeight="bold">Learn & upskill</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Data Science courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Technology courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Management courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Finance courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Design courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Healthcare courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Degree programs</ListItem>


</UnorderedList>
         </HStack>



         <HStack alignItems="start" ml="-10px">
         <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" pl="30px" pb="10px">

  <ListItem fontWeight="bold">Free resume resources</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Resume maker for freshers</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Resume quality score</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Resume samples</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="4px" fontSize="17px" color="#445578">Job letter samples</ListItem>

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
          <Input _hover={{cursor:"pointer"}} h="40px" mr="-45px" placeholder="Search jobs here" borderRadius="50px" />
          <Box boxSize="27px" bgColor="#457EFF" p="0px 6px" borderRadius="50px"><Search2Icon fontSize="14px" color="#fff" /></Box>
          </HStack>
          
          </Center>
        </Box>
     </HStack>

     <HStack mr="30px">
        <Box>
        <Center _hover={{cursor:"pointer"}}><FaBell fontSize="30px" color="gray" /></Center>
        </Box>
     </HStack>

     <ProfileSection />

     </HStack>

    
            </Flex>
        </Container>
    )
}

export default UserNavbar;