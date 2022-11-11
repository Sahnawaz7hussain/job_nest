import React from 'react';
import { Container ,Box, Heading,Image,Text,Button} from '@chakra-ui/react';

const LearnMore = () => {
  return (
    <div>
          <Container paddingBottom='20px' marginTop='50px' maxW='1100px'  display='flex' justifyContent='space-evenly' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='10px'>
        <Box paddingTop='45px' w='250px' >
            <Image margin='15px' src='https://static.naukimg.com/s/0/0/i/ff-services.png' alt='Interview' />
        </Box>


        <Box w='500px' borderRadius='10px' paddingTop='50px' textAlign='left'>
        <Heading size='md'>Accelerate your job search with premium services</Heading>
        <Text margin='10px' fontSize='sm' color='#8292b4'>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</Text>
        <Box marginTop='30px' width='500px' display='flex' justifyContent='space-between'>
        <Button border='1px solid #d3e1ea' borderRadius='50px' backgroundColor='white' width='150px' height='30px' fontSize='sm'>Resume Writing</Button> 
        <Button border='1px solid #d3e1ea' borderRadius='50px' backgroundColor='white' width='150px' height='30px' fontSize='sm'>Priority applicant</Button> 
        <Button border='1px solid #d3e1ea' borderRadius='50px' backgroundColor='white' width='150px' height='30px' fontSize='sm'>Resume display</Button>
        </Box>
        </Box>



        <Box w='300px'borderRadius='10px' paddingTop='60px' textAlign='center'>
        <Button backgroundColor='#457eff' borderRadius='50px' color='white' fontSize='lg'>Learn more</Button>
        <Text margin='10px' fontSize='sm' color='#8292b4'>Includes paid services</Text>
        </Box>
        </Container>
    </div>
  )
}

export default LearnMore
