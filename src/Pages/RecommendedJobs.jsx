import React from "react";
import { Box, Container, Heading, HStack, VStack } from "@chakra-ui/react";
import RecomJobs from "../Components/RecomJobs";
import RecomJobsV1 from "../Components/RecomJobsV1";
import RecomJobsV2 from "../Components/RecomJobsV2";

function RecommendedJobs () {

    return <>
    
    <Container minW="100%" bgColor={"#DFE6ED"} mt="178px">

      <Container minW="88.5%" m="auto" mt="20px" mb="30px">

        <HStack w="full" alignItems={"start"}>

        <VStack w="64.3%" mr="6px" alignItems={"start"}>

            <Box mb="4px"><Heading mt="25px"  fontSize="16px" color="#091E42">17 Jobs based on Your Desired Preferences</Heading></Box>
            <RecomJobs />

        </VStack>

        <VStack w="35%">

          <RecomJobsV1 />

          <Container></Container>
          <RecomJobsV2 />
          
        </VStack>  
            
        </HStack>

       </Container>

    </Container>
    
    </>
}

export default RecommendedJobs;