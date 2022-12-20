import React, { useState } from "react";
import { Box, Button, Container, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";


function LandingPage6 () {

    const [count1,setCount1] = useState(1887)
    const [count2,setCount2] = useState(1663)

    const [text1,setText1] = useState("FOLLOW")
    const [text2,setText2] = useState("FOLLOW")


    const handleClick1 = () => {
        if(text1 == "FOLLOW"){
            setCount1((prev) => prev+1)
            setText1("FOLLOWING")
        }
        else if(text1 == "FOLLOWING"){
            setCount1((prev) => prev-1)
            setText1("FOLLOW")
        }
    }

    const handleClick2 = () => {
        if(text2 == "FOLLOW"){
            setCount2((prev) => prev+1)
            setText2("FOLLOWING")
        }
        else if(text2 == "FOLLOWING"){
            setCount2((prev) => prev-1)
            setText2("FOLLOW")
        }
    }

    return <>
    
    <Container minW="100%" bgColor="#FFF" mb="10px">
    <Box ml="-18px" mr="-18px" borderBottom="1px solid gray"><Heading pl="18px" as="h3" fontSize={"15px"} color="#333333"
        pt="28px" pb="12px" >Recruiters hiring for candidates like you</Heading></Box>

        <VStack w="100%" alignItems="start" mt="20px">


        <Stack w="100%" p="10px" flexDirection={["column", "row"]} justifyContent={"space-between"} border={"1px solid black"} mb="12px">

            <HStack w={["100%", "100%", "50%"]}>
                <Box _hover={{cursor:"pointer"}} w={["20%", "40%", "30%"]}>
                <Image w={["100%", "70%", "100%"]}  borderRadius="50px" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDD9G1H0asoA/profile-displayphoto-shrink_800_800/0/1655700768997?e=2147483647&v=beta&t=vyRpB_5XJe6ECjRKpo2enco55jjyjaSkQVv4DeLaJPg" alt="y" /></Box>
                <Text fontSize={["16px"]} fontWeight="500" pl={["10px", "5px", "15px"]}>Yogesh Bhat</Text>

                <VStack _hover={{cursor:"pointer"}} w={["40%", "50%"]}>
                <Text fontSize={["16px", "13px"]} pl={["10px"]} color="#666666" fontWeight="500" lineHeight={["16px"]}>Masai School</Text>
                <Text fontSize={["16px", "13px"]} color="#666666" fontWeight="500" lineHeight="9px">Bangalore</Text>
                </VStack>
            </HStack>


        <HStack justifyContent={"space-between"} w={["100%", "100%", "50%"]}>
            <Box pt={["6px", "6%"]} w="40%" ml={["10px","30px"]} lineHeight={["", "15px"]} h="full"><Link isExternal="true" _hover="" color="#4A90E2" href="#" fontSize={"14px"} fontWeight="500" >SEND MESSAGE</Link></Box>
            <VStack>
            <Button onClick={handleClick1} fontSize="14.5px" bgColor="#FFF" color="#4A90E2" borderRadius="none" border="1px solid #4A90E2">{text1}</Button>
            <Text fontSize="13px" color="#666666">{count1} Followers</Text>
            </VStack>
        </HStack>
  

</Stack>



<Stack w="100%" p="10px" flexDirection={["column", "row"]} justifyContent={"space-between"} border={"1px solid black"} mb="12px">

            <HStack w={["100%", "100%", "50%"]}>
                <Box _hover={{cursor:"pointer"}} w={["20%", "40%", "30%"]}>
                <Image w={["100%", "70%", "100%"]}  borderRadius="50px" src="https://img.etimg.com/thumb/msid-68770565,width-650,imgsize-924959,,resizemode-4,quality-100/prabhkiran-singh.jpg" alt="y" /></Box>
                <Text fontSize={["16px"]} fontWeight="500" pl={["10px", "5px", "15px"]}>Prabhkiran Singh</Text>

                <VStack pt={["",""]} _hover={{cursor:"pointer"}} w={["40%", "40%"]}>
                <Text fontSize={["16px", "13px"]} pl={["10px"]} color="#666666" fontWeight="500" lineHeight={["16px"]}>Bewkoof.com</Text>
                <Text fontSize={["16px", "13px"]} color="#666666" fontWeight="500" lineHeight="9px">Mumbai</Text>
                </VStack>
            </HStack>


        <HStack justifyContent={"space-between"} w={["100%", "100%", "50%"]}>
            <Box pt={["6px", "6%"]} w="40%" ml={["10px","30px"]} lineHeight={["", "15px"]} h="full"><Link isExternal="true" _hover="" color="#4A90E2" href="#" fontSize={"14px"} fontWeight="500" >SEND MESSAGE</Link></Box>
            <VStack>
            <Button onClick={handleClick2} fontSize="14.5px" bgColor="#FFF" color="#4A90E2" borderRadius="none" border="1px solid #4A90E2">{text2}</Button>
            <Text fontSize="13px" color="#666666">{count2} Followers</Text>
            </VStack>
        </HStack>
  

</Stack>

            <Box w="full" pb="15px" textAlign={"right"}pt="20px"><Link isExternal="true" fontWeight="500" _hover="" color="#4A90E2" href="#" fontSize={"14px"} >VIEW ALL</Link></Box>
        </VStack>
    </Container>    

    </>
}

export default LandingPage6
