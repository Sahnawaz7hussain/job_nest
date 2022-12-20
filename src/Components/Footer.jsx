import {
  Container,
  Flex,
  Text,
  Box,
  Image,
  Button,
  Divider,
  Center,
  Stack
} from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ProjectLogo from "../assets/projectlogo.png";
import Foot from "../assets/foot.png";

const Footer = () => {
  return (
    <>
      <Divider borderWidth={"1px"} bg="gray" mt="5%" />
      <Container minW="90%" minH="80%" mt="2%" >
        <Flex justifyContent={"space-between"} flexDirection={["column","column","column","row"]}>
          <Box minW={"30%"} mr="10px">
            <Image src={ProjectLogo} margin="auto" w="150px" />
            <Text m="5%" align={"center"} fontSize="lg">
              Connect with us
            </Text>
            <Flex justifyContent={"space-evenly"} mr="-20%">
              <Button mr="-10%" bg="white">
                {<FaFacebookSquare size={30} />}
              </Button>
              <Button mr="-10%" bg="white">
                {<FaInstagramSquare size={30} />}
              </Button>
              <Button mr="-10%" bg="white">
                {" "}
                {<FaTwitter size={30} />}
              </Button>
              <Button mr="10%" bg="white">
                {<FaLinkedin size={30} />}
              </Button>
            </Flex>
          </Box>
          <Box minW={["90%", "90%", "90%", "40%"]} p="1%" fontSize={"100%"} mt="3%"  >
            <Flex justifyContent={"space-between"} flexDirection={["column", "row"]} pl={["30px", "0px"]} >
              <Flex flexDirection={["row"]} justifyContent={["space-between", "space-around"]} width={["90%", "65%" ]}>
              <Box pb={["30px", "0px"]}   >
            
                <Text>About us</Text>
                <Text>Careers</Text>
                <Text>Employer home</Text>
                <Text>Sitemap</Text>
              </Box>
              <Box pb={["30px", "0px"]}>
                <Text>Help center</Text>
                <Text>Summons/Notices</Text>
                <Text>Grievances</Text>
                <Text>Report issue</Text>
              </Box>

              </Flex>
              <Box  width={["90%", "30%"]} >
                <Text>Privacy policy</Text>
                <Text>Terms & conditions</Text>
                <Text>Fraud alert</Text>
                <Text>Trust & safety</Text>
              </Box>
            </Flex>
          </Box>
          <Center minW="20%">
          <Box alignItems="center" >
            <Image src={Foot} />
          </Box>

          </Center>
        </Flex>
      </Container>










      
      {/* <Divider borderWidth={"2px"} bg="gray"/> */}

      <Container minW="90%"  borderTop={"1px solid grey"} mt="20px" border={"1px solid blue"}>
        <Flex justifyContent={"space-between"} p="5" border="1px solid red" flexDirection={["column" ,"column","column" ,"row"]}>

          <Stack border={"1px solid red"} flexDirection={"row"} width={["100%","100%","100%" ,"45%" ]}>
          <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/infoedge-logo.svg" />
          <Box fontSize={"70%"}  border={"1px solid blue"} pl="10px">
            <Text>
              All trademarks are the property of their respective owners
            </Text>
            <Text>All rights reserved © 2022 Info Edge (India) Ltd.</Text>
          </Box>
          </Stack>

          <Box  border={"1px solid blue"} >
            <Text>Our businesses</Text>
          </Box>

          <Stack  flexDirection={"row"}>
          
          <Box  border={"1px solid red"} width="100%" >
            <Flex flexDirection={["column","row","row","row"]}>
              <Flex flexDirection={"row"} mb={["20px"]}>
              <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png" width={["50%", "50%","50%" ]} />
              <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/iimjobs.png" width={["50%", "50%","50%"]}/>
              </Flex>
             
             <Flex>
             <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png" width={["50%", "50%","50%"]}/>
              <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jobhai.png" width={["50%", "50%","50%"]}/>
             </Flex>
              
             
            </Flex>
          </Box>
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
