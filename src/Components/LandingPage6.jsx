import { Box, Button, Center, Container, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

function LandingPage6 () {

    return <>
    
    <Container minW="100%" bgColor="#FFF" mb="10px">
    <Box ml="-18px" mr="-18px" borderBottom="1px solid gray"><Heading pl="18px" as="h3" fontSize={"15px"} color="#333333"
        pt="28px" pb="12px" >Recruiters hiring for candidates like you</Heading></Box>

        <VStack minW="100%" alignItems="start" mt="20px">

            <HStack minW="full" h="102px" p="10px" border={"1px solid black"} mb="12px">
               
                    <Box w="14%" h="full" _hover={{cursor:"pointer"}}><Center>
                    <Image w="100%" borderRadius="50px" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDD9G1H0asoA/profile-displayphoto-shrink_800_800/0/1655700768997?e=2147483647&v=beta&t=vyRpB_5XJe6ECjRKpo2enco55jjyjaSkQVv4DeLaJPg" alt="y" /></Center></Box>
                   
                   <VStack w="20%" h="full" pt="12px" _hover={{cursor:"pointer"}}>
                        <Box><Heading fontSize="15px" color="#333333" fontWeight="500">Yogesh Bhat</Heading></Box>
                        <Text fontSize="13px" color="#666666" fontWeight="500" lineHeight="7px">Masai School</Text>
                        <Text fontSize="13px" color="#666666" fontWeight="500" lineHeight="9px">Bangalore</Text>
                        <Box></Box>
                    </VStack>

            <Box pl="80px" pt="28px" w="40%" h="full"><Link isExternal="true" _hover="" color="#4A90E2" href="#" fontSize={"14px"} fontWeight="500" >SEND MESSAGE</Link></Box>
            <Box w="20%" h="full" pt="22px"><Button fontSize="14.5px" bgColor="#FFF" color="#4A90E2" borderRadius="none" border="1px solid #4A90E2" p="0px 32px">FOLLOW</Button>
            <Text textAlign="right" fontSize="13px" color="#666666">1887 Followers</Text>
            </Box>
            </HStack>



            <HStack minW="full" h="102px" p="10px" border={"1px solid black"} pr="20px">
               
                    <Box w="14%" h="full" _hover={{cursor:"pointer"}}><Center>
                    <Image w="100%" h="80px" borderRadius="50px" src="https://img.etimg.com/thumb/msid-68770565,width-650,imgsize-924959,,resizemode-4,quality-100/prabhkiran-singh.jpg" alt="n" /></Center></Box>
                   
                   <VStack w="25%" h="full" pt="12px" _hover={{cursor:"pointer"}}>
                        <Box><Heading fontSize="15px" color="#333333" fontWeight="500">Prabhkiran Singh</Heading></Box>
                        <Text fontSize="13px" color="#666666" fontWeight="500" lineHeight="7px">Bewkoof.com</Text>
                        <Text fontSize="13px" color="#666666" fontWeight="500" lineHeight="9px">Mumbai</Text>
                        <Box></Box>
                    </VStack>

            <Box pl="70px" pt="28px" w="40%" h="full"><Link isExternal="true" _hover="" color="#4A90E2" href="#" fontSize={"14px"} fontWeight="500" >SEND MESSAGE</Link></Box>

            <Box  w="20%" h="full" pt="22px">
                <Button fontSize="14.5px" bgColor="#FFF" color="#4A90E2" borderRadius="none" border="1px solid #4A90E2" p="0px 32px">FOLLOW</Button>
            <Text textAlign="right" fontSize="13px" color="#666666">1663 Followers</Text>
            </Box>
            </HStack>

            <Box w="full" pb="15px" textAlign={"right"}pt="20px"><Link isExternal="true" fontWeight="500" _hover="" color="#4A90E2" href="#" fontSize={"14px"} >VIEW ALL</Link></Box>
        </VStack>
    </Container>    

    </>
}

export default LandingPage6