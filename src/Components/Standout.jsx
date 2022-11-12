import React from 'react';
import { Container ,Box, Heading,Image,Text,Button,Input} from '@chakra-ui/react';

const Standout = () => {
  return (
    <div>
        <Container backgroundColor='#f7f8ff' paddingBottom='20px' marginTop='50px' maxW='1100px'  display='flex' justifyContent='space-evenly' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='10px'>
       
        <Box w='400px' borderRadius='10px' paddingTop='50px' textAlign='left'>
        <Heading size='lg'>Stand out among recruiters with a video profile</Heading>
        <Text margin='10px' fontSize='sm' color='#8292b4'>Available for both Android and iOS apps</Text>


        <Container maxW="300px" border='1px solid #d3e1ea' marginLeft='0px' height="50px" borderRadius='50px' backgroundColor='white' display='flex'    alignItems='center'>
        <Input border='0px' placeholder='Enter mobile number' size='md' />
        <Button backgroundColor='#457eff' color='white' width="150px" size='sm' borderRadius='50px'>Get link</Button>
        </Container>


        <Box marginTop='10px' width='250px' height='60px' display='flex' justifyContent='space-around'>
        <Image margin='15px' src='https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png' alt='Interview' />
        <Image margin='15px' src='https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png' alt='Interview' />
        </Box>
        </Box>


        <Box paddingTop='15px' w='500px' >
            <Image margin='15px' src='https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroup_v4.png' alt='Interview' />
        </Box>
        </Container>
    </div>
  )
}

export default Standout
