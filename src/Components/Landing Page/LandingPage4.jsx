import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

function LandingPage4 () {

    return <>
    
    <HStack minW="100%" pt="10px" alignItems={"start"} justifyContent="space-between">

        <VStack minW="48%" bgColor="#FFF" alignItems="start" height="220px">

            <Box mt="26px" minW="100%" borderBottom={"1px solid gray"}><Heading  pl="18px" pb={["1px","14px"]} fontSize="16px" color="#333333">Application Summary</Heading></Box>
            <Text pl="18px" fontSize="13px" color="#666666" pt="18px">You have 0 applied job(s) till now.</Text>
            <Text pl="18px" fontSize="13px" color="#666666" pt="5px"> Daily Limit of Application: 50</Text> 
        </VStack>

        <VStack minW="48%" bgColor="#FFF" alignItems="start" height="220px">
        <Box mt="26px" minW="100%" borderBottom={"1px solid gray"}><Heading  pl="18px" pb="14px" fontSize="16px" color="#333333">Saved job(s)</Heading></Box>
            <Text pl="18px" fontSize="13px" color="#666666" pt="18px">You have 0 saved job(s) till now.</Text>
        </VStack>


    </HStack>

    </>
    
    
}

export default LandingPage4