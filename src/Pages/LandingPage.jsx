import React from "react";
import { Box, Container, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import Landingpage1 from "../Components/Landing Page/LandingPage1";
import LandingPage2 from "../Components/Landing Page/LandingPage2";
import LandingPage3 from "../Components/Landing Page/LandingPage3";
import LandingPage4 from "../Components/Landing Page/LandingPage4";
import LandingPage5 from "../Components/Landing Page/LandingPage5";
import LandingPage6 from "../Components/Landing Page/LandingPage6";
import UserProfile from "../Components/Landing Page/UserProfile";
import UserProfile2 from "../Components/Landing Page/UserProfile2";
import UserNavbar from "../Components/Landing Page/UserNavbar";
import Footer from "../Components/Footer";

function LandingPage () {

    return <>

    
<UserNavbar />
    


    <Container maxW="100%" bgColor={"#D3D3D3"}>
    
    <Landingpage1 />

        <HStack alignItems={"start"} w={["100%", "100%", "90%","70%"]} m="auto" pt="12px">

        <VStack w={["100%", "100%", "70%"]} mr="12px">

           <Container zIndex={1} mt="190px" w={["100%","65%"]} display={["", "", "none"]}>
               <UserProfile />
           </Container>
          

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

        <Stack w={["","", "30%"]} flexDirection={"column"} display={["none","none","flex"]}>

           <UserProfile />

           <Container></Container>
           <UserProfile2 />
        </Stack> 
            
        </HStack>

    </Container>

    {/* <Footer /> */}
    </>
}

export default LandingPage;