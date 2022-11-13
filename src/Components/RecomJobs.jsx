import React, { useEffect } from "react"
import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";
import wallet from "../assets/wallet.png"
import { RepeatClockIcon, StarIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getJobsData } from "../Redux/AppReducer/action";
import { useNavigate } from "react-router-dom";

function RecomJobs () {

    const dispatch = useDispatch()
    const jobsData = useSelector((state) => state.companies);

    const hoverEffect = {cursor:"pointer"};

    const navigate = useNavigate()


    useEffect(() => {
        getJobsData(dispatch)
    },[dispatch])



    const handleClick = (id) => {
        // navigate(`/user/recommendedjobs/${id}`)

        // window.open("/user/recommendedjobs/"+id, '_blank')

        window.open(`/user/recommendedjobs/${id}`, '_blank')
    }

    return <>

    {jobsData.length>0 && jobsData.map((elem) => (
        
        <Container minW="100%" bgColor="#FFF" boxShadow={"md"} rounded='md' key={elem.id} onClick={() => handleClick (elem.id)} _hover={hoverEffect}>

        <Box mt="20px" pl="10px">
        <Heading fontSize={"16"} color="#091E42">{elem.title}</Heading>
        <HStack pt="8px">
        <Text fontSize="14px" color="#091E42" fontWeight="500" pr="30px">{elem.companies}</Text>
        <Text fontSize="14px" color="#091E42" fontWeight="500">{elem.rating}</Text>
        <Box fontSize="12px" color="orange"><StarIcon  /></Box>
        </HStack>
        </Box>

        <HStack mt="10px" ml="6px" fontWeight="500">
            <HStack mr="40px">
                <Box w="16px"><Image src="https://i.ibb.co/dDr76S6/briefcase.png" alt="Portfolio" /></Box>
                <Box><Text fontSize={"13px"} color="#666666">{elem.experience}</Text></Box>
            </HStack>


            <HStack pr="50px">
                <Box w="18px"><Image src={wallet} alt="Portfolio" /></Box>
                <Box><Text fontSize={"13px"} color="#666666"> {elem.package}</Text></Box>
            </HStack>


            <HStack>
                <Box w="16px"><Image src="https://i.ibb.co/k21hg19/location.png" alt="location" /></Box>
                <Box><Text fontSize={"13px"} color="#666666">{elem.location}</Text></Box>
            </HStack>
        </HStack>

            <HStack mt="5px" ml="2px" pl="2px" fontWeight="500">
                <Box w="20px"><Image src="https://i.ibb.co/8sN2CY5/paper.png" alt="summary" /></Box>
                <Box><Text fontSize={"13px"} color="#666666">{elem.summary}</Text></Box>
            </HStack>  

            <HStack mt="5px" ml="6px" pl="2px" fontWeight="500">
                <Box><Text fontSize={"13px"} color="#666666">{elem.skills}</Text></Box>
            </HStack>

            <HStack w="fit-content" textAlign={"left"} mt="15px" mb="15px" ml="8px" fontWeight="500" p="4px 8px" color="#000000" bgColor="#D7F2E3">
            <RepeatClockIcon fontSize={"10px"} />
            <Text fontSize={"10px"} >{elem.posted}</Text>
            </HStack>

       
    </Container>

    ))}

    </>
};


export default RecomJobs