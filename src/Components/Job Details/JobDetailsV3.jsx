import { Box, Container, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function JobDetailsV3 () {

    return <>

     <Container minW="100%"  bgColor="#FFF" boxShadow={"md"} rounded='md' pt="22px" _hover={{cursor:"pointer"}}>

        <Box><Heading fontSize="16px" color="#333333">Benefits & Perks</Heading></Box>
        <Box mt="3px"><Text color="#666666" fontWeight="500" fontSize="14px">1 Users reported these benefits</Text></Box>
        
        <Grid templateColumns='repeat(3, 1fr)' gap={1} mt="14px">
            <GridItem w='100%' borderRight="1px solid gray" p="0px 16px">
                <Box ml="35px" mb="10px" boxSize="25px"><Image src="https://static.ambitionbox.com/img/emailers/HealthCare.jpg" alt=""/></Box>
                <Box><Text textAlign="center" pb="8px" color="#666666" fontSize="14px" fontWeight="500">Health Insurance</Text></Box>
            </GridItem>


            <GridItem w='100%' borderRight="1px solid gray" p="0px 16px">
                <Box ml="35px" mb="10px" boxSize="25px"><Image src="https://static.ambitionbox.com/img/emailers/TeamOuting.jpg" alt="" /></Box>
                <Box><Text textAlign="center" pb="8px" color="#666666" fontSize="14px" fontWeight="500">Team Outings</Text></Box>
            </GridItem>
             

            <GridItem w='100%' p="0px 16px">
                <Box ml="35px" mb="10px" boxSize="25px"><Image src="https://static.ambitionbox.com/img/emailers/JobTraining.jpg" alt="" /></Box>
                <Box><Text textAlign="center" pb="8px" color="#666666" fontSize="14px" fontWeight="500">Job Training</Text></Box>
            </GridItem> 

            </Grid>



            <Grid templateColumns='repeat(3, 1fr)' gap={1} borderTop="1px solid gray" mb="10px">
                
          <GridItem w='100%' borderRight="1px solid gray" p="0px 16px" pt="8px">
                <Box ml="35px" mb="10px" boxSize="25px"><Image src="https://static.ambitionbox.com/img/emailers/WFH.jpg" alt="" /></Box>
                <Box><Text textAlign="center" color="#666666" fontSize="14px" fontWeight="500">Work From Home</Text></Box>
            </GridItem>


            <GridItem w='100%' borderRight="1px solid gray" p="0px 16px" pt="8px">
                <Box ml="35px" mb="10px" boxSize="25px"><Image src="https://static.ambitionbox.com/img/emailers/Education.jpg" alt="" /></Box>
                <Box><Text textAlign="center" color="#666666" fontSize="14px" fontWeight="500">Education Assistance</Text></Box>
            </GridItem>

            <GridItem w='100%' p="0px 16px" pt="8px">
                <Box ml="35px" mb="10px" boxSize="25px"><Image src="https://static.ambitionbox.com/img/emailers/SoftSkillsTraining.jpg" alt="" /></Box>
                <Box><Text textAlign="center" color="#666666" fontSize="14px" fontWeight="500">Soft Skill Training</Text></Box>
            </GridItem>
            </Grid>


            <Box mt="18px" mb="18px" _hover={{cursor:"pointer"}}><Text pr="9px" textAlign="right" fontSize="14px" color="#4A90E2" fontWeight="500">View All</Text></Box>

     </Container>


    </>
};

export default JobDetailsV3;