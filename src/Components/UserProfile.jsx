import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Container, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function UserProfile () {

    let userData = JSON.parse(localStorage.getItem("loginData")) || {};


    return <>

    <Container minW="100%" bgColor="#FFF" boxShadow={"md"} rounded='md' mt="-175px" zIndex={1}>

        <Center _hover={{cursor:"pointer"}}>
        <Box boxSize="60px"><Image  src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" /></Box>
        </Center>

        <Center mt="10px"><Box _hover={{cursor:"pointer"}}><Heading fontSize="20px">{userData.name ? `${userData.name}`: ""}</Heading></Box></Center>
            <VStack>
                
            <Box mt="7px" mb="15px"  fontSize="13px" color="#666666" fontWeight="500" p="0px 22px" _hover={{cursor:"pointer"}}>
            <Text textAlign="center">B.Tech/Full Stack Web Development at Masai School</Text>
            </Box>

            <Box w="full">
            <Button w="full" bgColor="#4A90E2" borderRadius="none" color="#FFF" fontWeight="normal" fontSize="17px" _hover={{bgColor:"#609DE6"}}>UPDATE PROFILE</Button>
            </Box>
        
        </VStack>


        <HStack mt="22px">
                <Text fontSize="13px" color="#333333" fontWeight="500">Profile Performance</Text>
                <InfoOutlineIcon boxSize="12px" color="#4A90E2" _hover={{cursor:"pointer"}} />
            </HStack>

            <HStack minW="full" mt="12px" pb="22px">
                <VStack alignItems="start" border="1px solid black" pl="8px" lineHeight="0px" p="5px 9px 16px 6px" _hover={{cursor:"pointer"}}>
                    <Heading fontSize="16px" color="#4A90E2">1</Heading>
                    <Text fontSize="12px" fontWeight="500" color="#4A90E2">Search Appearances</Text>
                </VStack>

                <VStack alignItems="start" border="1px solid black" pl="8px" lineHeight="0px" p="5px 9px 16px 12px" _hover={{cursor:"pointer"}}>
                    <Heading fontSize="16px" color="#4A90E2">0</Heading>
                    <Text fontSize="12px" fontWeight="500" color="#4A90E2">Recruiter Actions</Text>
                </VStack>
            </HStack>
       
        
    </Container>
    
    </>
};

export default UserProfile;



// https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png