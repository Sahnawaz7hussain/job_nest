import React from "react";
import { Box, Container, Heading, HStack, VStack } from "@chakra-ui/react";
import Landingpage1 from "../Components/LandingPage1";
import LandingPage2 from "../Components/LandingPage2";
import LandingPage3 from "../Components/LandingPage3";

function LandingPage () {

    return <>


    <Landingpage1 />

    <Container minW="100%" bgColor={""}>

      <Container minW="67.5%" border={"1px solid red"} m="auto" mt="20px">

        <HStack w="full" alignItems={"start"}>

        <VStack w="66%" mr="12px">

            <LandingPage2 />
            <Box alignSelf="start"><Heading as="h3" fontSize="22px" color={"#666666"} mt="16px">Jobs</Heading></Box>
            <LandingPage3 />

        </VStack>

        <VStack w="32%" border={"1px solid black"} height="200px"></VStack>  
            
        </HStack>

       </Container>

    </Container>
    </>
}

export default LandingPage;