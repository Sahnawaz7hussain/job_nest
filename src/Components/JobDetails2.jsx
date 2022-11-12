import { Box, Container, Heading, HStack, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import React from "react";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";


function JobDetails2 () {

    return <>

    <Container minW="100%" border="1px solid red" pt="22px">

       <VStack w="100%" alignItems="start" backgroundColor="#E8F2FF99" fontWeight="500" pt="18px" pb="24px">

        <Box pl="16px" pt="5px" borderLeft="7px solid #4A90E2" h="30px"><Heading fontSize="13px" color="#333333">Job Highlights</Heading></Box>

        <Box w="full" fontSize="13px" pl="23px">
            <UnorderedList>
                <ListItem>Excellent opportunity for Freshers</ListItem>
                <ListItem>Good written,verbal communication and Problem-solving skills</ListItem>
                <ListItem>A BTechBE degree or higher in Computer Science or a related field,OR its equivalent in work experience</ListItem>
            </UnorderedList>
        </Box>

        <Box pl="16px" pt="8px" borderLeft="7px solid #4A90E2" h="30px"><Heading fontSize="13px" color="#333333">Your Job Match Score</Heading></Box>

        <HStack w="70%" pl="16px" justifyContent="space-between">
        <HStack>
            <Box><FaCheckCircle color="green" fontSize="16px" /></Box>
            <Box><Heading fontSize="13px" color="#666666">Early Applicant</Heading></Box>
            </HStack>
        

        <HStack>
            <Box><FaCheckCircle color="green" fontSize="16px" /></Box>
            <Box><Heading fontSize="13px" color="#666666">Keyskills</Heading></Box>
            </HStack>
        

        <HStack>
            <Box><FaCheckCircle color="green" fontSize="16px" /></Box>
            <Box><Heading fontSize="13px" color="#666666">Location</Heading></Box>
        </HStack>

        <HStack>
            <Box><FaTimesCircle color="gray" fontSize="16px" /></Box>
            <Box><Heading fontSize="13px" color="#666666">Work Experience</Heading></Box>
        </HStack>
      </HStack>
        
       </VStack>

       <VStack minW="100%" border="1px solid red" mt="20px" alignItems="start">
        <Box><Heading fontSize="18px" color="#000000">Job description</Heading></Box>

        <Box><Text mt="15px" fontWeight="500" fontSize="14px" color="#333333">Job Roles & Responsibilities :</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">Skills :</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- React Js, Redux, Java script</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Excellent opportunity for Freshers</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Excellent communication skills</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Good written, verbal communication and Problem-solving skills</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- A BTechBE degree or higher in Computer Science or a related field, OR its equivalent in work experience.</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Understanding of third-party dependencies and debugging dependency conflict</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Understanding of REST APIs, the document request model, and offline storage</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Knowledge in designing UI frameworks using ReactJs</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Knowledge in JavaScript and the JavaScript object model</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Thorough understanding of React JS and its core principles</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- popular React JS workflows (such as Flux or Redux)</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Knowledge of modern authorization mechanisms, such as JSON Web Token</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Understanding of Javascript, CSS, HTML, and writing cross-browser compatible code.</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Knowledge of JavaScript building tools like Gulp or Grunt andor Knowledge of REACT tools including React JS, Webpack, Enzyme, Redux, and Flux.</Text></Box>

        <Box><Text mt="7px" fontWeight="500" fontSize="14px" color="#333333">- Excellent project management skills.</Text></Box>

    </VStack>


    <VStack minW="100%" border="1px solid red" mt="20px" alignItems="start">
        <Box>
            <Text fontWeight="500" fontSize="13px" color="#999999">Role</Text>
            <Heading fontSize="13px" color="#333333">Full Stack Developer</Heading>

            <Text fontWeight="500" fontSize="13px" color="#999999">Industry Type</Text>
            <Heading fontSize="13px" color="#333333">IT Services & Consulting</Heading>

            <Text fontWeight="500" fontSize="13px" color="#999999">Functional Area</Text>
            <Heading fontSize="13px" color="#333333">Engineering - Software & QA</Heading>

            <Text fontWeight="500" fontSize="13px" color="#999999">Employment Type</Text>
            <Heading fontSize="13px" color="#333333">Full Time, Permanent</Heading>

            <Text fontWeight="500" fontSize="13px" color="#999999">Role Category</Text>
            <Heading fontSize="13px" color="#333333">Software Development</Heading>

            </Box>
    </VStack>


    <VStack minW="100%" border="1px solid red" mt="20px" alignItems="start">
    <Box><Heading fontSize="18px" color="#000000">Education</Heading></Box>

    <Box>
    <Text fontWeight="500" fontSize="13px" color="#999999">UG :</Text>
    <Heading fontSize="13px" color="#333333">B.Tech/B.E. in Computers</Heading>

    <Text fontWeight="500" fontSize="13px" color="#999999">PG :</Text>
    <Heading fontSize="13px" color="#333333">Any Postgraduate</Heading>

    <Text fontWeight="500" fontSize="13px" color="#999999">Doctorate :</Text>
    <Heading fontSize="13px" color="#333333">Doctorate Not Required</Heading>
    </Box>

    </VStack>


    <VStack minW="100%" borderBottom="1px solid gray" mt="20px" alignItems="start">
    <Box><Heading fontSize="18px" color="#000000">Key Skills</Heading></Box>

    <HStack maxW="full">
        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >React.js</Text></Box>

        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >Project Management</Text></Box>

        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >CSS</Text></Box>

        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >JSON Web Token</Text></Box>

        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >Enzyme</Text></Box>

        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >Redux</Text></Box>

        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >JavaScript</Text></Box>

       
    </HStack>

    <HStack maxW="full" pb="25px">
         <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >Flux</Text></Box>

        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >HTML</Text></Box>

        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >Webpack</Text></Box>

        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >React JS</Text></Box>

        <Box border="1px solid blue" borderRadius="50px"><Text m="0px 12px" fontSize="13px" fontWeight="500" >REST APIs</Text></Box>
    </HStack>

    </VStack>

    <HStack maxW="100%" border="1px solid red" h="30px" mt="15px"></HStack>

    </Container>
    
    </>
};

export default JobDetails2;