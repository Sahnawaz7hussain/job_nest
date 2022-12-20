import { Box, Button, Center, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

function LandingPage5 () {

    return <VStack w="100%">
    
    <Container minW="100%" bgColor="#FFF" mb="10px">
    <Box ml="-18px" mr="-18px" borderBottom="1px solid gray"><Heading pl="18px" as="h3" fontSize={"15px"} color="#333333"
        pt="28px" pb="12px" >New Recruiter Messages</Heading></Box>

    <Center><Box width="52%" mt="20px" mb="20px"><Text p="0px 18px" lineHeight="16px" textAlign="center" fontSize="13px">You do not have any unread message. Messages received from different recruiters will appear in this section.</Text></Box></Center> 
    </Container>


    <Container minW="100%" bgColor="#FFF">
    <Box ml="-18px" mr="-18px" borderBottom="1px solid gray" mb="14px"><Heading pl="18px" as="h3" fontSize={"15px"} color="#333333"
        pt="28px" pb="12px" >Recruiter Connections</Heading></Box>

        <VStack minW="100%" alignItems="start">
                <HStack w={["100%", "100%", '100%']} pl="8px" alignItems="center" justifyContent={"space-between"}>
                    <Box><Heading fontSize="32px">00</Heading></Box>
                    <Box ><Text fontSize="13px" color="#666666" fontWeight="500" lineHeight="16px" mt="6px" ml="6px">Credit Purchased</Text></Box>
                    <Flex boxSize={["75%","80%","80%"]}><Text fontSize="13px" color="#666666" fontWeight="500" pl={["", "8%"]} pr={["", "14%","7%"]} >Buy recruiter connections credits to contact more recruiters hiring in your domain.</Text></Flex>
                </HStack>

                <HStack w={["100%", '100%']} pl="8px" alignItems="center" justifyContent={"space-between"}>
                    <Box><Heading fontSize="32px">00</Heading></Box>
                    <Box><Text fontSize="13px" fontWeight="500" lineHeight="16px" color="#666666" mt="6px" ml="6px">Credit Purchased</Text></Box>
                    <Flex pr={["0px","12px"]} boxSize={["75%","80%"]} justifyContent={["right"]} pt="18px"><Button fontSize="14.5px" color="#FFF" bgColor="#4A90E2" borderRadius="none" p={["0px 5%", "0px 32px"]} _hover={{bgColor:"#609DE6"}}>BUY CREDITS</Button></Flex>
                </HStack>
                
                
                <Flex w={["100%", "100%"]} justifyContent="right" pb="12px"><Link isExternal="true" _hover="" color="#4A90E2" href="#" fontSize={"14px"} fontWeight="500" >VIEW ALL</Link></Flex>
            
        </VStack>
    </Container>
    
    
    </VStack>
} 

export default LandingPage5;

// <Box><Text fontSize="13px" color="#666666" fontWeight="500">Buy recruiter connections credits to contact more recruiters hiring in your domain.</Text></Box>

