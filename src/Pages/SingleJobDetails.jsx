import React from "react";
import JobDetails1 from "../Components/JobDetails1";
import { Box, Container, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import JobDetails2 from "../Components/JobDetails2";

function SingleJobDetails () {

    

    return <>

    <Stack minW="100%" h="87px" bgColor="#D4E5FF" mt="72px"></Stack> 

    <Container minW="100%" bgColor={""}>
        
       

  <HStack border={"1px solid red"} maxW="86%" alignItems={"start"} m="auto" mb="30px">

  <VStack w="61.8%" mr="6px" alignItems={"start"} border="1px solid black">

    <JobDetails1 />
    <Container></Container>
    <JobDetails2 />


  </VStack>

  <VStack w="35.7%" border={"1px solid black"} height="500px"></VStack>  
      
  </HStack>

</Container>
    </>
}

export default SingleJobDetails;