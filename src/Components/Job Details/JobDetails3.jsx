import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

function JobDetails3 () {

    return <>
    
    <Container minW="100%" bgColor="#FFF" boxShadow={"md"} rounded='md' pb="25px" pt="18px">
        <Box><Heading fontSize="16px" color="#333333">About Company</Heading></Box>
        <Box mt="15px"><Text fontSize="14px" fontWeight="500" color="#333333">Venhan, that deals with Business Technology consulting,
         IT Solutions and IT Services by furnishing the measurable and value enhanced IT deliverables to its stakeholders 
         across the countries. Venhan focused on providing technology solutions for the pari-mutuel gaming industry. 
         We specialized in accounting applications and pari-mutuel settlement outsourcing, and provide solutions for 
         managing customer loyalty programs, including facility admissions and patron wager tracking.</Text></Box>

         <Box><Heading mt="20px" fontSize="15px" color="#333333">Company Info</Heading></Box>
         <Box mt="5px"><Text fontSize="13px" fontWeight="500" color="#999999">Address:</Text></Box>

    </Container>
    </>
};

export default JobDetails3