import React from "react";
import JobDetails1 from "../Components/JobDetails1";
import { Box, Container, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import JobDetails2 from "../Components/JobDetails2";
import JobDetails3 from "../Components/JobDetails3";
import JobDetailsV1 from "../Components/JobDetailsV1";
import JobDetailsV2 from "../Components/JobDetailsV2";
import JobDetailsV3 from "../Components/JobDetailsV3";
import JobsDetailsV4 from "../Components/JobsDetailsV4";
import UserNavbar from "../Components/UserNavbar";

function SingleJobDetails () {

    

    return <>
    
    <UserNavbar />

    <Stack minW="100%" h="87px" bgColor="#D4E5FF"></Stack> 

    <Container minW="100%" bgColor={"#DFE6ED"}>

  <HStack maxW="86%" alignItems={"start"} m="auto" mb="30px" pb="35px">

  <VStack w="63.4%" mr="6px" alignItems={"start"}>

    <JobDetails1 />
    <Container></Container>
    <JobDetails2 />
    <Container></Container>
    <JobDetails3 />


  </VStack>

  <VStack w="37.1%">

    <JobDetailsV1 />

    <Container></Container>
    <JobDetailsV2 />

    <Container></Container>
    <JobDetailsV3 />
    
    <Container></Container>
    <JobsDetailsV4 />

  </VStack>  
      
  </HStack>

</Container>
    </>
}

export default SingleJobDetails;