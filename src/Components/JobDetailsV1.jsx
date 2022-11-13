import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import location from "../assets/location.png"

function JobDetailsV1 () {

  const  hoverEffect={cursor:"pointer"}

    return <>

    <Container minW="100%"  bgColor="#FFF" boxShadow={"md"} rounded='md' mt="-45px" pl="10px" _hover={hoverEffect}>
        
       
            <Box pl="18px" mt="18px"><Heading fontSize="18px" color="#333333">Jobs you might be interested in</Heading></Box>

            <Container minW="100%" borderBottom="1px solid gray" mt="20px">

        <Box><Heading fontSize="16px" color="#333333">Software Engineer</Heading></Box>

        <HStack mt="7px">
            <Text mr="12px" fontSize="14px" fontWeight="500" color="#333333">Gaan Software</Text>
            <Text fontSize="14px" fontWeight="500" color="#333333">4.5</Text>
            <Box fontSize="12px"><StarIcon color="orange" /></Box>
            <Text fontSize="14px" fontWeight="500" color="#4A90E2">(8 Reviews)</Text>
        </HStack>

        <HStack mt="7px">
            <Box><Image w="15px" src={location} alt="" /></Box>
            <Text fontSize="14px" color="#666666" fontWeight="500">Bangalore/Bengaluru</Text>
        </HStack>

        <Text textAlign="right" mt="7px" mb="7px" fontSize="12px" color="#666666" fontWeight="500">Posted 1 day ago</Text>
        </Container>




        <Container minW="100%" borderBottom="1px solid gray" mt="20px" _hover={hoverEffect}>

        <Box><Heading fontSize="16px" color="#333333">React JS Developer</Heading></Box>

        <HStack mt="7px">
            <Text mr="12px" fontSize="14px" fontWeight="500" color="#333333">Inductive Quotient Analytics</Text>
        </HStack>

        <HStack mt="7px">
            <Box><Image w="15px" src={location} alt="" /></Box>
            <Text fontSize="14px" color="#666666" fontWeight="500">Hyderabad/Secunderabad</Text>
        </HStack>

        <Text textAlign="right" mt="7px" mb="7px" fontSize="12px" color="#666666" fontWeight="500">Posted 1 day ago</Text>
        </Container>




        <Container minW="100%" borderBottom="1px solid gray" mt="20px"  _hover={hoverEffect}>

        <Box><Heading fontSize="16px" color="#333333">React.js Developer - Redux/ Flux/ JavaScript</Heading></Box>

        <HStack mt="7px">
            <Text mr="12px" fontSize="14px" fontWeight="500" color="#333333">Beyond Root Technology</Text>
            <Text fontSize="14px" fontWeight="500" color="#333333">2.4</Text>
            <Box fontSize="12px"><StarIcon color="orange" /></Box>
            <Text fontSize="14px" fontWeight="500" color="#4A90E2">(4 Reviews)</Text>
        </HStack>

        <HStack mt="7px">
            <Box><Image w="15px" src={location} alt="" /></Box>
            <Text fontSize="14px" color="#666666" fontWeight="500">Chandigarh</Text>
        </HStack>

        <Text textAlign="right" mt="7px" mb="7px" fontSize="12px" color="#666666" fontWeight="500">Posted 2 days ago</Text>
        </Container>

        <Box mt="10px" mb="12px"><Text _hover={hoverEffect} fontSize="16px" fontWeight="500" color="#4A90E2">View All</Text></Box>

    </Container>
    
    </>
};

export default JobDetailsV1