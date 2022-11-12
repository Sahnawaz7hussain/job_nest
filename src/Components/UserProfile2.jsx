import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

function UserProfile2 () {

    return <>

    <Container minW="100%" bgColor="#FFF">

        <Box mt="24px"><Heading fontSize="15px">Naukri Services you might be interested in</Heading></Box>

        <Box mt="20px" lineHeight="16px"><Heading fontSize="15px">Be a Priority Applicant</Heading>
        <Text fontSize="13px" color="#666666" fontWeight="500">Increase your chances of getting shortlisted for the applied jobs and receiving calls from recruiters.</Text>
        </Box>

       <Box mt="10px"><Text textAlign="right" fontSize="14px" color="#4A90E2" fontWeight="500" _hover={{cursor:"pointer"}}>KNOW MORE</Text></Box>


       <Box mt="20px" lineHeight="16px"><Heading fontSize="15px">Increase your visibility by up to 3 times</Heading>
        <Text fontSize="13px" color="#666666" fontWeight="500">Get your profile marked as 'Featured' and get a higher rank when recruiters search for resumes.</Text>
        </Box>

       <Box mt="10px" pb="5px"><Text textAlign="right" fontSize="14px" color="#4A90E2" fontWeight="500" _hover={{cursor:"pointer"}}>KNOW MORE</Text></Box>

       <Box mt="16px" pb="18px"><Heading fontSize="13px" color="#666666">Call 1800-572-5557 now! (Toll-free)</Heading></Box>

    </Container>

    </>
};

export default UserProfile2;

