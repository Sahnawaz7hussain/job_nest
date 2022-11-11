import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Container, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { getSingleJobDetails } from "../Redux/AppReducer/action";
import { StarIcon } from "@chakra-ui/icons";
import wallet from "../assets/wallet.png"


function JobDetails1 () {

    const id = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.companies)

    const hoverEffect = {cursor:"pointer"}

   


    useEffect(() => {
        dispatch(getSingleJobDetails(Number(id.id)))
    },[Number(id.id)])

    if(data.length===1){
        console.log(data)
    }

    return <>


     {data.length===1 && data.map((elem) => (

        <Container minW="100%" border="1px solid blue" mt="-45px" key={elem.id}>

            <HStack minW="100%" borderBottom="1px solid gray" pb="8px">

               

            <VStack w="73%" alignItems="start" mt="8px" p="10px 2px">
                <Box mb="-4px"><Heading fontSize="20px" color="#333333">{elem.title}</Heading></Box>

                <HStack fontWeight="500">
                    <Box fontSize="13px" color="#333333">{elem.companies}</Box>
                    <HStack fontSize="12px"><Text color="#414B5D" ml="15px">{elem.rating}</Text><StarIcon color="orange" /><Text>(2 Reviews)</Text></HStack>
                </HStack>

                <HStack fontWeight="500">
                <Box w="16px"><Image src="https://i.ibb.co/dDr76S6/briefcase.png" alt="Portfolio" /></Box>
                <Box><Text fontSize={"13px"} color="#666666">{elem.experience}</Text></Box>
            </HStack>

            <HStack fontWeight="500">
                <Box w="18px"><Image src={wallet} alt="Portfolio" /></Box>
                <Box><Text fontSize={"13px"} color="#666666">{elem.package}</Text></Box>
            </HStack>

            <HStack fontWeight="500">
                <Box w="16px"><Image src="https://i.ibb.co/k21hg19/location.png" alt="location" /></Box>
                <Box><Text fontSize={"13px"} color="#666666">{elem.location}</Text></Box>
            </HStack>

            </VStack>


            <VStack w="27%" pt="100px">
                <HStack justifyContent="space-between" w="100%">
                    <Button borderRadius="3px" p="0px 26px" h="37px" color="#4A90E2" fontSize="14px" border="1px solid #4A90E2" bgColor="#FFF">Save</Button>
                    <Button borderRadius="3px" p="0px 32px" h="40px" bgColor="#4A90E2" fontSize="14px" color="#FFF" _hover={""}>APPLY</Button>
                </HStack>
            </VStack>
        </HStack>

        <HStack w="100%" mt="7px" p="10px 0px" justifyContent="space-between">
            <HStack>
                <HStack  fontSize="11px" pr="10px" borderRight="1px solid gray">
                    <Box><Text color="#999999">Posted:</Text></Box>
                    <Box><Text color="#151515" fontWeight="500">{(elem.posted)}</Text></Box>
                </HStack>

                <HStack  fontSize="11px">
                    <Box><Text color="#999999">Job Applicants:</Text></Box>
                    <Box><Text color="#151515" fontWeight="500">1779</Text></Box>
                </HStack>
            </HStack>

            <Box><Heading fontSize="14px" color="#4A90E2" _hover={hoverEffect}>Send Me Jobs Like This</Heading></Box>
        </HStack>

        </Container>
                    
    ))}

    </>
};

export default JobDetails1