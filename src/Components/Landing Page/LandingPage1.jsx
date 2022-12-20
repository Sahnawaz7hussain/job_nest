import React from "react";
import { Box, Button, Container, HStack, Input, Stack, Text } from "@chakra-ui/react";


function Landingpage1 () {

    return  <>
    <Container minW="100%">
       <Box
       w={["105.5%", "105%", "106%" ]}
       ml={["-18px", "-18px", "-32px","-36px"]}
    //    ml="-18px"
    //    w="102.38%"
       h={["200px", "200px", "240px"]}
       backgroundImage="url(https://static.naukimg.com/s/5/105/i/dashboardbg.png)"
       position="relative"
       ></Box>

       <Stack w={["75%", "70%", "58%", "45%"]} m="auto" position="absolute" mt={["-170px", "-170", "-210px", "-210px"]} ml={["0px", "5%", "5%", "15%"]}>    
       <Text fontSize="20px" fontWeight="600" color="white">Search Jobs</Text>
       <HStack w="full">
        <Input borderRadius="none" bg="#fff" height="45px" pl={["8px","10px","12px", "16px"]}
        fontSize="14px" placeholder="Skills, Designation, Companies"  variant="unstyled" mr="-9px"
        />

         <Box h="45px"><Button borderRadius="none" bg="#4A90E2" color="white" fontSize="14px" padding=" 0px 28px" 
         letterSpacing="0.5px" _hover={{bgColor:"#609DE6"}}
        >SEARCH</Button></Box>
       </HStack>
          </Stack>

       
       
    </Container>
    </>
}

export default Landingpage1;