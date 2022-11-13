import React,{useState} from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure,Text,
    Box, HStack, Center, Image, VStack, Heading } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'
import { FaAlignLeft, FaChevronRight, FaListUl } from 'react-icons/fa'
import { QuestionOutlineIcon, SettingsIcon } from '@chakra-ui/icons'




 function ProfileSection () {


  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  let userData = JSON.parse(localStorage.getItem("loginData")) || {};

  const logoutFunc = () => {
    navigate("/")
  }
  
  
  return (
    <>


      <HStack _hover={{cursor:"pointer"}} w="100px" h="45px" borderRadius="50px" border="1px" p="0px 10px" onClick={onOpen}>
      <Box pl='7px' mr='12px'>
        <Center><Box> <FaAlignLeft /></Box></Center>
        </Box>
        <Box boxSize="30px"><Image src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" /></Box>
     </HStack>



      <Drawer isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader p={10}>
               

               <HStack minW="100%" mt="10px" borderBottom="1px" pb="28px">
                <VStack mr="12px" mt="-50px">
                    <Box boxSize="50px">
                        <Image src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" />
                    </Box>
                </VStack>

                <VStack>
                    <Box>
                        <Heading fontSize="18px">{userData.name ? `${userData.name}`: ""}</Heading>
                        <Text mt="5px" fontSize="14px">B.Tech/B.E. Full Stack Web Development at Masai School</Text>

                        <Text mt="15px" fontSize="14px" color="#4A90E2" _hover={{cursor:"pointer"}}>View & Update Profile</Text>
                    </Box>
                </VStack>
               </HStack>

          </DrawerHeader>

          <DrawerBody>
          
           <VStack alignItems={"start"}>

            <HStack fontSize="14px" _hover={{cursor:"pointer"}}>
                < FaListUl />
                <Text fontWeight="bold">Naukari Blog</Text>
            </HStack>

            <HStack fontSize="14px" pt="7px" _hover={{cursor:"pointer"}}>
                <SettingsIcon />
                <Text fontWeight="bold">Settings</Text>
            </HStack>

            <HStack fontSize="14px" pt="7px" _hover={{cursor:"pointer"}}>
                <QuestionOutlineIcon />
                <Text fontWeight="bold">FAQs</Text>
            </HStack>

            <HStack fontSize="14px" pt="7px" _hover={{cursor:"pointer"}}>
                < FaChevronRight />
                <Text fontWeight="bold" onClick={logoutFunc}>Logout</Text>
            </HStack>


           </VStack>

            
          </DrawerBody>
          
          

          
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ProfileSection;

