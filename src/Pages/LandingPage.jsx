import React from "react";
import { Box, Container, Heading, HStack, VStack } from "@chakra-ui/react";
import Landingpage1 from "../Components/LandingPage1";
import LandingPage2 from "../Components/LandingPage2";
import LandingPage3 from "../Components/LandingPage3";
import LandingPage4 from "../Components/LandingPage4";
import LandingPage5 from "../Components/LandingPage5";
import LandingPage6 from "../Components/LandingPage6";
import UserProfile from "../Components/UserProfile";
import UserProfile2 from "../Components/UserProfile2";

function LandingPage () {

    return <>

    <Landingpage1 />

    <Container minW="100%" bgColor={"#D3D3D3"}>

      <Container minW="67.5%" m="auto" >

        <HStack w="full" alignItems={"start"}>

        <VStack w="66%" mr="12px">

            <LandingPage2 />
            <Box alignSelf="start"><Heading as="h3" fontSize="22px" color={"#666666"} mt="16px">Jobs</Heading></Box>
            <LandingPage3 />
            <Container></Container>
            <LandingPage4 />
            <Box alignSelf="start"><Heading as="h3" fontSize="22px" color={"#666666"} mt="30px">Recruiters</Heading></Box>
            <LandingPage5 />
            <Container></Container>
            <LandingPage6 />
            <Container pb="35px"></Container>

        </VStack>

        <VStack w="32%">

           <UserProfile />

           <Container></Container>
           <UserProfile2 />
        </VStack>  
            
        </HStack>

       </Container>

    </Container>
    </>
}

export default LandingPage;