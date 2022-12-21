import React from "react";
import { Drawer,Center, DrawerHeader,Button, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, PopoverTrigger, Text, PopoverContent, PopoverBody, Container, Flex, HStack, UnorderedList, ListItem, Popover, PopoverArrow, Stack, Box, VStack } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import SignIn from "../../Pages/SignIn";


function SmallScreenNavbar () {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

    const links = {color:"gray", cursor:"pointer"};
    const links1 = {color:"#4A90E2", cursor:"pointer"}


    return (
        <>
        <HamburgerIcon fontSize={"26px"} ref={btnRef} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

        <Stack mt="10px">
        <DrawerHeader>
            <Popover trigger="hover">
               {({ isOpen, onClose }) => (
            <>
            <PopoverTrigger>
                <DrawerHeader fontSize="1.4rem" fontWeight="600" _hover={links}>Jobs</DrawerHeader>
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
            </DrawerHeader>
        </Stack>








        <Stack ml="50px" mt="-25px">
        <Box>
        <Popover trigger="hover">
        {({ isOpen, onClose }) => (
         <>
  <PopoverTrigger>
    <Link to="/companies"><Text fontSize="1.4rem" fontWeight="500" _hover={links}>Companies</Text></Link>
  </PopoverTrigger>
  <PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" fontWeight="500">
    <PopoverArrow />
    
    <PopoverBody borderRadius="12px" alignItems="start" ml="0px">
      <VStack alignItems="start">

     <Flex pt="20px">
      <HStack alignItems="start" maxW="33%" borderRight="1px">
         <UnorderedList listStyleType="none" textAlign="left" pb="10px">
  <ListItem fontWeight="bold" fontSize={"15px"}>Explore categories</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" fontSize="14px" color="#445578">Unicorn</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" fontSize="14px" color="#445578">MNC</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" fontSize="14px" color="#445578">Startup</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" fontSize="14px" color="#445578">Product based</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" fontSize="14px" color="#445578">Internet</ListItem>
</UnorderedList>
         </HStack>


         <HStack alignItems="start" maxW="33%" borderRight="1px">
         <UnorderedList listStyleType="none" textAlign="left" pb="10px">
  <ListItem fontWeight="bold" fontSize={"15px"}>Explore collections</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="8px" fontSize="14px" color="#445578">Top companies</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="8px" fontSize="14px" color="#445578">IT companies</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="8px" fontSize="14px" color="#445578">Fintech companies</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="8px" fontSize="14px" color="#445578">Sponsored companies</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="8px" fontSize="14px" color="#445578">Featured companies</ListItem>
</UnorderedList>
         </HStack>
        

          <HStack alignItems="start" maxW="33%">
         <UnorderedList listStyleType="none" textAlign="left" pb="10px">
  <ListItem fontWeight="bold" fontSize={"15px"}>Research companies</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" fontSize="14px" color="#445578">Interview questions</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" fontSize="14px" color="#445578">Company salaries</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" fontSize="14px" color="#445578">Company reviews</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" fontSize="14px" color="#445578">Salary Calculator</ListItem>
</UnorderedList>
         </HStack>

         </Flex>
        
      </VStack>
    </PopoverBody>

  </PopoverContent>
  </>
        )}
</Popover>
        </Box>
     </Stack>











     <Stack ml="50px" mt="10px">
        <Box>
        <Popover trigger="hover">
        {({ isOpen, onClose }) => (
         <>


  <PopoverTrigger>
   <Text fontSize="1.4rem" fontWeight="500" _hover={links}>Services</Text>
  </PopoverTrigger>
  <PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" ml={["0px", "0px","20px", "18px"]} minW={["","","800px","1010px"]} fontWeight="500">
    <PopoverArrow />

    <PopoverBody>
      <Container minW="100%" alignItems="start">

     <Flex pt="20px" minWidth="100%" fontSize={["14px", "14px","13px","17px"]}>
      <HStack alignItems="start" ml="-30px" mr="5px" borderRight="1px">
         <UnorderedList listStyleType="none" textAlign="left" pb="10px">
  <ListItem fontWeight="bold">Resume writing</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px"  color="#445578">Text resume</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px"  color="#445578">Visual resume</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px"  color="#445578">Resume critique</ListItem>

  <ListItem fontWeight="bold" pt="28px">Find Jobs</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Jobs4u</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Priority applicant</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Contact us</ListItem>

</UnorderedList>
         </HStack>


         <HStack alignItems="start" ml="-10px" mr="5px" borderRight="1px">
         <UnorderedList listStyleType="none" textAlign="left" pb="10px">

  <ListItem fontWeight="bold">Get recruiter's attention</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Resume display</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Recruiter connection</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Job search booster</ListItem>

  <ListItem fontWeight="bold" pt="32px">Monthly subscriptions</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Basic & premium plans</ListItem>

</UnorderedList>
         </HStack>




         <HStack alignItems="start" ml="-10px" borderRight="1px">
         <UnorderedList listStyleType="none" textAlign="left" pb="10px">

  <ListItem fontWeight="bold">Learn & upskill</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="7px" color="#445578">Data Science courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="7px" color="#445578">Technology courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="7px" color="#445578">Management courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="7px" color="#445578">Finance courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="7px" color="#445578">Design courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="7px" color="#445578">Healthcare courses</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="7px" color="#445578">Degree programs</ListItem>


</UnorderedList>
         </HStack>



         <HStack alignItems="start" ml="-10px">
         <UnorderedList listStyleType="none" textAlign="left" pl="5px" pb="10px">

  <ListItem fontWeight="bold">Free resume resources</ListItem>

  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Resume maker for freshers</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Resume quality score</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Resume samples</ListItem>
  <ListItem onClick={onClose} _hover={links1} pt="9px" color="#445578">Job letter samples</ListItem>

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

     </Stack>




     <Stack ml="50px" mt="20px">
        
     <HStack>
        <Box>
        <Center>
          <HStack>
         
          <Box  ><SignIn /></Box>
          </HStack>
          
          </Center>
        </Box>
     </HStack>
     </Stack>


     <Stack ml="50px" mt="20px">
        
     <HStack mr="30px">
        <Box>
        <Link to="/signup"><Button colorScheme="red" variant='solid' borderRadius='md'>Register</Button></Link>
        </Box>
     </HStack>
        </Stack>



        <Stack ml="50px" mt="20px">

        <HStack mr="30px">
        <Box>
        <Link to='/admin'><Button color={"#fff"} _hover={{bgColor:"#609DE6"}}
                     backgroundColor="#4A90E2">
                        For Employers
                    </Button></Link>
        </Box>
     </HStack>
     </Stack>


    


        </DrawerContent>
      </Drawer>

        </>
    )
}

export default SmallScreenNavbar;