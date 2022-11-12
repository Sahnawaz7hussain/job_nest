import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

function JobsDetailsV4 () {

    return <>
    <Container minW="100%"  bgColor="#FFF" boxShadow={"md"} rounded='md' pl="22px" pt="22px" _hover={{cursor:"pointer"}}>

    <Box><Heading fontSize="17px" color="#091E42">Suggested Courses for you</Heading></Box>
    <Box mt="3px"><Text color="#666666" fontWeight="500" fontSize="12px">Professionals like you are taking up these certifications. Enroll Now</Text></Box>

    <Box borderBottom="1px solid gray" pb="18px" mb="7px"  mt="24px">
    <Box><Heading fontSize="14px" color="#091E42">IIIT Bangalore - Executive Post Graduate Program In Full Stack Software Development</Heading></Box>
    <Box mt="6px"><Text color="#666666" fontWeight="500" fontSize="12px">Get a dedicated career coach after the program to help track your career goals, coach you on your pr...</Text></Box>
    </Box>

    <Box borderBottom="1px solid gray" pb="18px" mb="7px"  mt="26px">
    <Box><Heading fontSize="14px" color="#091E42">The Complete Front-End Development</Heading></Box>
    <Box mt="6px"><Text color="#666666" fontWeight="500" fontSize="12px">This course focuses on front end development. You will be learning a host of applications which are ...</Text></Box>
    </Box>

    <Box borderBottom="1px solid gray" pb="18px" mb="7px" mt="26px">
    <Box><Heading fontSize="14px" color="#091E42">Front End Web Developer</Heading></Box>
    <Box mt="6px"><Text color="#666666" fontWeight="500" fontSize="12px">In the Front End Web Developer Nanodegree program, you will complete five projects and build a resum...</Text></Box>
    </Box>

    <Box mt="12px" mb="12px" _hover={{cursor:"pointer"}}><Text pr="9px" textAlign="right" fontSize="14px" color="#4A90E2" fontWeight="500">View All</Text></Box>

    </Container>

   
    </>
};

export default JobsDetailsV4;