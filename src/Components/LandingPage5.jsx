import { Box, Button, Center, Container, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

function LandingPage5 () {

    return <VStack minW="100%">
    
    <Container minW="100%" bgColor="#FFF" mb="10px">
    <Box ml="-18px" mr="-18px" borderBottom="1px solid gray"><Heading pl="18px" as="h3" fontSize={"15px"} color="#333333"
        pt="28px" pb="12px" >New Recruiter Messages</Heading></Box>

    <Center><Box width="52%" mt="20px" mb="20px"><Text p="0px 18px" lineHeight="16px" textAlign="center" fontSize="13px">You do not have any unread message. Messages received from different recruiters will appear in this section.</Text></Box></Center> 
    </Container>


    <Container minW="100%" bgColor="#FFF">
    <Box ml="-18px" mr="-18px" borderBottom="1px solid gray" mb="14px"><Heading pl="18px" as="h3" fontSize={"15px"} color="#333333"
        pt="28px" pb="12px" >Recruiter Connections</Heading></Box>

        <HStack minW="100%" alignItems="start">

            <VStack minW="25%" h="175px" mr="8.5%" pl="8px" alignItems="start">
                <HStack alignItems="start">
                    <Box><Heading fontSize="32px">00</Heading></Box>
                    <Box ><Text fontSize="13px" color="#666666" fontWeight="500" lineHeight="16px" mt="6px" ml="6px">Credit Purchased</Text></Box>
                </HStack>

                <HStack alignItems="start">
                    <Box><Heading fontSize="32px">00</Heading></Box>
                    <Box ><Text fontSize="13px" fontWeight="500" lineHeight="16px" mt="6px" ml="6px">Credit Purchased</Text></Box>
                </HStack>
            </VStack>

            

            <VStack minW="65%" h="175px" alignItems="start">
                <Box><Text fontSize="13px" color="#666666" fontWeight="500">Buy recruiter connections credits to contact more recruiters hiring in your domain.</Text></Box>
                <Box pt="18px"><Button fontSize="14.5px" color="#FFF" bgColor="#4A90E2" borderRadius="none" p="0px 32px" _hover={{bgColor:"#609DE6"}}>BUY CREDITS</Button></Box>
                <Box pl="80%"><Link isExternal="true" _hover="" color="#4A90E2" href="#" fontSize={"14px"} fontWeight="500" >VIEW ALL</Link></Box>
            </VStack>
        </HStack>
    </Container>
    
    
    </VStack>
} 

export default LandingPage5;

