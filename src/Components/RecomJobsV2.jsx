import { Box, Container, Heading, HStack, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

function RecomJobsV2 () {

    return <>
    
    <Container minW="100%" bgColor="#FFF" boxShadow={"md"} rounded='md' pl="28px">

        <Box mt="22px"><Heading fontSize="16px">Recommended skills for you</Heading></Box>

        <Box mt="22px" borderBottom="1px solid gray" _hover={{cursor:"pointer"}}>
            <Heading fontSize="14px">Backend Development</Heading>
            <UnorderedList fontSize="13px" mt="7px" fontWeight="500" mb="25px">
                <ListItem>4080+ courses from top platforms</ListItem>
            </UnorderedList>
        </Box>

        <Box mt="22px" borderBottom="1px solid gray" _hover={{cursor:"pointer"}}>
            <Heading fontSize="14px">Database and SQL</Heading>
            <UnorderedList fontSize="13px" mt="7px" fontWeight="500" mb="25px">
                <ListItem>1630+ free courses and certifications</ListItem>
            </UnorderedList>
        </Box>

        <HStack p="8px 0px" justifyContent="space-between" pb="16px">
            <Text fontSize="12px" fontWeight="500">*May include paid services</Text>
            <Text fontSize="16px" fontWeight="500" color="#409AE2" _hover={{cursor:"pointer"}}>View All</Text>
        </HStack>
    </Container>

    </>
};

export default RecomJobsV2;