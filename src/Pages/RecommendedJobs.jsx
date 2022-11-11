import React from "react";
import { Box, Container, Heading, HStack, VStack } from "@chakra-ui/react";
import RecommendedJobs1 from "../Components/RecomJobs";

function RecommendedJobs () {

    return <>
    
    <Container minW="100%" bgColor={""} mt="178px">

      <Container minW="88.5%" border={"1px solid red"} m="auto" mt="20px" mb="30px">

        <HStack w="full" alignItems={"start"}>

        <VStack w="63.5%" mr="12px" alignItems={"start"}>

            <Box mb="4px"><Heading  fontSize="16px" color="#091E42">17 Jobs based on Your Desired Preferences</Heading></Box>
            <RecommendedJobs1 />

        </VStack>

        <VStack w="34.2%" border={"1px solid black"} height="200px"></VStack>  
            
        </HStack>

       </Container>

    </Container>
    
    </>
}

export default RecommendedJobs;