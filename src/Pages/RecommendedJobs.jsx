import React from "react";
import { Box, Container, Heading, HStack, VStack } from "@chakra-ui/react";
import RecomJobs from "../Components/RecomJobs";
import RecomJobsV1 from "../Components/RecomJobsV1";
import RecomJobsV2 from "../Components/RecomJobsV2";
import UserNavbar from "../Components/UserNavbar";
import Footer from "../Components/Footer";

function RecommendedJobs () {

    return <>

    <UserNavbar />
    
    <Container minW="100%" bgColor={"#DFE6ED"}>

      <Container minW="88.5%" m="auto" mb="30px">

        <HStack w="full" alignItems={"start"}>

        <VStack w="64.3%" mr="6px" alignItems={"start"}>

            <Box mb="4px"><Heading mt="25px"  fontSize="16px" color="#091E42">Jobs based on Your Desired Preferences</Heading></Box>
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

    <Footer />
    
    </>
}

export default RecommendedJobs;