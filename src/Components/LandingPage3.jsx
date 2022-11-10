import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

function LandingPage3 () {

    return <>
    <Container minW="100%" border={"1px solid red"} mt="30px" h="600px">
       <Heading as="h3" fontSize={"15px"}  borderBottom="1px solid gray" color="#333333"
        pt="25px" pb="12px" >Recommended Job(s)</Heading>

        <Box border={"1px solid red"} mt="20px" pl="32px">
        <Heading fontSize={"14.5"} color="#333333">Full Stack Developer - B2B SaaS (Work From Home)</Heading>
        <Text fontSize="13px" color="#666666">Oncehub Technologies</Text>
        </Box>

        <HStack mt="10px" ml="6px">
            <HStack mr="50px">
                <Box w="18px"><Image src="https://i.ibb.co/dDr76S6/briefcase.png" alt="Portfolio" /></Box>
                <Box><Text fontSize={"13px"} color="#666666">0-5 Years</Text></Box>
            </HStack>

            <HStack>
                <Box w="16px"><Image src="https://i.ibb.co/k21hg19/location.png" alt="location" /></Box>
                <Box><Text fontSize={"13px"} color="#666666">Noida</Text></Box>
            </HStack>
        </HStack>

        <HStack mt="5px" ml="6px">
                <Box w="16px"><Image src="https://i.ibb.co/Y3bG6Tq/pencil.png" alt="keyskills" /></Box>
                <Box><Text fontSize={"13px"} color="#666666">React.js, Node.js, Redux, JavaScript, Angular</Text></Box>
            </HStack>

            <HStack mt="5px" ml="2px">
                <Box w="20px"><Image src="https://i.ibb.co/8sN2CY5/paper.png" alt="summary" /></Box>
                <Box><Text fontSize={"13px"} color="#666666">Some Carriers Opens More (Global) Doors Than Others.</Text></Box>
            </HStack>  

            <Box><Text>Posted 1 Day ago</Text></Box>   

       
    </Container>
    </>
}

export default LandingPage3