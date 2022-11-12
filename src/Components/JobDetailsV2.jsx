import { StarIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

function JobDetailsV2 () {

    return <>

         <Container minW="100%"  bgColor="#FFF" boxShadow={"md"} rounded='md' pl="22px" pt="22px">
         <Box><Heading fontSize="16px" color="#333333">Reviews</Heading></Box>

        <Box _hover={{cursor:"pointer"}}>
        <Box mt="14px"><Heading fontSize="14px" color="#333333">Senior Software Engineer in Madhapur Hyd</Heading></Box>
         <Box mt="4px"><Text fontWeight="500" color="#333333" fontSize="14px">Anonymous</Text></Box>
         <HStack>
           <Box> <StarIcon mr="-7px" color="orange" boxSize="12px" /></Box>
           <Box> <StarIcon mr="-7px" color="orange" boxSize="12px" /></Box>
           <Box> <StarIcon mr="-7px" color="orange" boxSize="12px" /></Box>
           <Box> <StarIcon mr="-7px" color="gray" boxSize="12px" /></Box>
           <Box> <StarIcon mr="-7px" color="gray" boxSize="12px" /></Box>
         </HStack>
        </Box>

         
         <Box _hover={{cursor:"pointer"}}>
         <Box mt="15px"><Heading fontSize="14px" color="#333333">Likes</Heading></Box>
         <Box mt="7px"><Text fontWeight="500" color="#333333" fontSize="13px">It's a good culture, good working environment are supportive.</Text></Box>
         </Box>

         <Box mb="18px" mt="15px"><Text textAlign="right" _hover={{cursor:"pointer"}} fontSize="16px" fontWeight="500" color="#4A90E2">Read All Reviews</Text></Box>
         </Container>

    </>
};

export default JobDetailsV2;