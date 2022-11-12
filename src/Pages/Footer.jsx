import { Container, Flex ,Text,Box,Image,Button,Divider} from '@chakra-ui/react'
import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaTwitter,FaLinkedin} from "react-icons/fa"
import ProjectLogo from "../assets/projectlogo.png"
import Foot from "../assets/foot.png"

const Footer = () => {
  return (
    <div >
         <Divider borderWidth={"1px"} bg="gray" mt="5%"/>
       <Container  minW="90%" minH="80%" mt="2%" >
        
        <Flex justifyContent={"space-evenly"}   >
            <Box   minW={"30%"}  >
                <Image src={ProjectLogo} margin="auto" w="50%"  h="50%"/>
                <Text m="5%"align={"center"} fontSize="lg" >Connect with us</Text>
                <Flex justifyContent={"space-evenly"} mr="-20%">
                    <Button mr="-10%" bg="white" >{<FaFacebookSquare size={30}/>}</Button>
                    <Button mr="-10%" bg="white" >{<FaInstagramSquare size={30}/>}</Button>
                    <Button mr="-10%" bg="white"> {<FaTwitter size={30}/>}</Button>
                    <Button mr="10%" bg="white" >{<FaLinkedin size={30}/>}</Button>
                </Flex>
            </Box>
            <Box minW="30%"   p="1%" fontSize={"100%"}  mt="3%">
                <Flex justifyContent={"space-between"} gap="7%">
                    <Box alignItem="center" >
                    <Text>About us</Text>
                <Text>Careers</Text>
                <Text>Employer home</Text>
                <Text>Sitemap</Text>
                    </Box>
                    <Box alignItem="center">
                    <Text>Help center</Text>
                <Text>Summons/Notices</Text>
                <Text>Grievances</Text>
                <Text>Report issue</Text>
                    </Box>
                    <Box alignItem="center">
                    <Text>Privacy policy</Text>
                <Text>Terms & conditions</Text>
                <Text>Fraud alert</Text>
                <Text>Trust & safety</Text>
                    </Box>
                </Flex>
               
            </Box>
            <Box  m="5%" alignItem="center" minW="30%" >
                <Image src={Foot} /> 
            </Box>
            
            
        </Flex>
        
       </Container>
       {/* <Divider borderWidth={"2px"} bg="gray"/> */}

       <Container minW="90%" minH="80%" borderTop={"1px solid grey"}>
    <Flex justifyContent={"space-between"} p="5">
        <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/infoedge-logo.svg"/>
        <Box fontSize={"70%"}>
            <Text>All trademarks are the property of their respective owners</Text>
            <Text>All rights reserved © 2022 Info Edge (India) Ltd.</Text>
        </Box>
        <Box>
            <Text>Our businesses</Text>
        </Box>
        <Box>
            <Flex>
                <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png" />
                <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jeevansathi.png" />
                <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/iimjobs.png" />
                <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png" />
                <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jobhai.png" />
            </Flex>
        </Box>
    </Flex>
       </Container>
      
    </div>
  )
}

export default Footer
