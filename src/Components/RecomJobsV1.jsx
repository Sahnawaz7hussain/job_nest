import { Box, Container, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function RecomJobsV1 () {

    return <>

    <Container minW="100%" bgColor="#FFF" boxShadow={"md"} rounded='md' mt="25px">

        <HStack minW="100%" justifyContent="space-between" alignItems="start" pt="18px">
            <Box boxSize="70%"><Heading fontSize="16px">Get jobs matching your criteria by adding below preferences</Heading></Box>
            <Box boxSize="30%" pt="7px"><Image src="https://static.naukimg.com/s/7/105/i/pref-widget.a183249f.png" alt="" /></Box>
        </HStack>

        <HStack _hover={{cursor:"pointer"}} color="#4A90E2"><Text fontWeight="800" mt="-6px" mr="-5px" fontSize="27px">+</Text><Text fontWeight="500" fontSize="15px">Add Your Preferred Job Role</Text></HStack>

        <Box mt="22px"><Text fontSize="13px" color="#536777" fontWeight="500">Your Preferred Work Location</Text></Box>


        <HStack mt="6px">
        <Box bgColor="#F4F5F7" color="#091E42" borderRadius="50px"><Text m="0px 12px" p="6px" fontSize="12px" fontWeight="500" >Pune</Text></Box>

        <Box bgColor="#F4F5F7" color="#091E42" borderRadius="50px"><Text m="0px 12px" p="6px" fontSize="12px" fontWeight="500" >Mumbai</Text></Box>

        <Box bgColor="#F4F5F7" color="#091E42" borderRadius="50px"><Text m="0px 12px" p="6px" fontSize="12px" fontWeight="500" >Hyderabad</Text></Box>

        <Box bgColor="#F4F5F7" color="#091E42" borderRadius="50px"><Text m="0px 12px" p="6px" fontSize="12px" fontWeight="500" >Delhi / NCR</Text></Box>
        </HStack>

        <HStack mt="10px">
        <Box bgColor="#F4F5F7" color="#091E42" borderRadius="50px"><Text m="0px 12px" p="6px" fontSize="12px" fontWeight="500" >Chennai</Text></Box>

        <Box bgColor="#F4F5F7" color="#091E42" borderRadius="50px"><Text m="0px 12px" p="6px" fontSize="12px" fontWeight="500" >Kolkata</Text></Box>

        <Box bgColor="#F4F5F7" color="#091E42" borderRadius="50px"><Text m="0px 12px" p="6px" fontSize="12px" fontWeight="500" >Bengalore</Text></Box>
        </HStack>

       <VStack alignItems="start" mt="6px" mb="22px">
       <Box mt="22px"><Text fontSize="13px" color="#536777" fontWeight="500">Your Preferred Salary</Text></Box>
        <Box bgColor="#F4F5F7" color="#091E42" borderRadius="50px"><Text m="0px 12px" p="6px" fontSize="12px" fontWeight="500" >₹ 800000</Text></Box>
       </VStack>


    </Container>
    
    </>
};

export default RecomJobsV1;