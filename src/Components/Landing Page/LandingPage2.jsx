import { Box, Container, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "../../Styles/landingPage.css"

function LandingPage2 () {
    

    return <>
    <Container minW={["100%", "100%", "100%"]} bgColor="#FFF" pt="20px" mt="20px">

        <HStack pb="5px" justify={"space-between"}>
            <Heading as="h3" color="#333333" fontSize="17px">What is most important to you when looking for a new job?</Heading>
            
            <Box><Heading  mt="-10px" color="#FF6360" bgColor={"#FFF2F1"} mr="-16px" p="8px 12px" as='h3'
             fontSize={"12px"} fontWeight="500" borderRadius={"4px"}>Poll Results</Heading></Box>
            </HStack>
        
        <Stack mt="10px" minW={"100%"} flexDirection={["column", "row", "row", "row"]}>
        <VStack w={["100%"]} mr="32px" pb="15px">


            <VStack w="full" alignItems={"start"} pb="4px" >
                <HStack fontSize={"13px"} fontWeight="500">
                <Text>Work-life balance</Text>
                <Text color={"#969696"}>30.2%</Text>
                </HStack>
                <Box w={["85%"]} bg="#D0E4FF" h="8px" borderRadius={"50px"}></Box>
            </VStack>


            
            <VStack w="full" alignItems={"start"} pb="4px" >
                <HStack fontSize={"13px"} fontWeight="500">
                <Text>Competitive salary</Text>
                <Text color={"#969696"}>20.5%</Text>
                </HStack>
                <Box w={["57%"]} bg="#D0E4FF" h="8px" borderRadius={"50px"}></Box>
            </VStack>

            
            
            <VStack w="full" alignItems={"start"} pb="8px">
                <HStack fontSize={"13px"} fontWeight="500">
                <Text>Company's reputation</Text>
                <Text color={"#969696"}>8.4%</Text>
                </HStack>
                <Box w={["24%"]} bg="#D0E4FF" h="8px" borderRadius={"50px"}></Box>
            </VStack>


            

        </VStack>



        <VStack w={["100%"]} >

            <VStack w="full" alignItems={"start"} pb="4px" >
                <HStack fontSize={"13px"} fontWeight="500">
                <Text>Work culture</Text>
                <Text color={"#969696"}>20.9%</Text>
                </HStack>
                <Box w={["59%"]} bg="#D0E4FF" h="8px" borderRadius={"50px"}></Box>
            </VStack>


            <VStack w="full" alignItems={"start"} pb="4px" >
                <HStack fontSize={"13px"} fontWeight="500">
                <Text>Quality of work</Text>
                <Text color={"#969696"}>20%</Text>
                </HStack>
                <Box w={["56%"]} bg="#D0E4FF" h="8px" borderRadius={"50px"}></Box>
            </VStack>
        </VStack>

        
    </Stack>

    <Stack w={["100%", "100%"]} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize={'12px'} fontWeight="500" color={"#969696"}>824.1K+ votes | Poll closed</Text>
                <Image h="90px" src="https://static.naukimg.com/s/0/0/i/poll-wdgt-bg.png" alt="smiley" />
            </Stack>


    </Container>
    </>
};

export default LandingPage2


{/* <VStack w="full" alignItems={"start"} pb="4px" >
                
            </VStack> */}