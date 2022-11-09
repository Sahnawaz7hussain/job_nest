import React from "react";
import { Box, Button, Container, FormLabel, Heading, HStack, Image, Input, Stack, Text } from "@chakra-ui/react";


function Landingpage1 () {

    return  <>
    <Container minW="100%" mt="72px">
       <Box
       ml="-18px"
       w="102.38%"
       h="240px"
       backgroundImage="url(https://static.naukimg.com/s/5/105/i/dashboardbg.png)"
       position="relative"
       ></Box>

       <Stack position="absolute" mt="-212px" ml="17%" border="1px solid red" w="41.3%">
       <Text fontSize="20px" fontWeight="600" color="white">Search Jobs</Text>
       <HStack w="full">
        <Input width="83%" borderRadius="none" bg="#fff" height="45px" mt="-5px"
        fontSize="14px" placeholder="Skills, Designation, Companies"  variant="unstyled" pl="14px" mr="-9px"
        />

         <Box><Button borderRadius="none" bg="#4A90E2" color="white" fontSize="14px" padding=" 0px 28px" mt="-5px" 
         letterSpacing="0.5px"
        >SEARCH</Button></Box>

      
       </HStack>
       </Stack>

       
    </Container>
    </>
}

export default Landingpage1;