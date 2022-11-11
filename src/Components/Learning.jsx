import React from 'react';
import { Container ,Box, Heading,Image,Text} from '@chakra-ui/react';

const Learning = () => {
    let learn=[
        {
            id:1,
            sub:"Data Science",
            top:"Artificial Intelligence",
            des:"Learn in demand AI skills like Deep learning, NLP, Computer vision and more for career growth across different roles.",
            course:'600 Courses',
            provide:'28 Providers'
        },{
            id:2,
            sub:"Cloud Technologies",
            top:"AWS",
            des:"Get certified for high demand cloud computing skills for Cloud Pratitioner, Architext, Develooper, and Operational roles",
            course:'800 Courses',
            provide:'16 Providers'
        },{
            id:3,
            sub:"Programming",
            top:"DSA",
            des:"Master DS and Algorithms for entry level engineering roles in product companies and for competitive programming.",
            course:'800 Courses',
            provide:'13 Providers'
        }
    ]
  return (
    <div>
        <Container marginTop='50px' maxW='1300px'  display='flex' justifyContent='space-evenly'>
        <Box paddingTop='45px' w='250px'>
            <Heading size='lg'>Grow your career through learning</Heading>
            <Image marginTop='15px' src='https://static.naukimg.com/s/0/0/i/learn-icon.svg' alt='Interview' />
        </Box>


       {learn.map((item)=>(
          <Box w='300px' padding='15px' border='1px solid #d3e1ea'  borderRadius='10px' paddingTop='20px' textAlign='left'>
          <Text fontSize='sm' color='#435678' marginTop='5px' fontWeight='bold'>{item.sub}</Text>   
          <Heading size='md' marginTop='5px'>{item.top}</Heading>
          <Text fontSize='sm' color='#8292b4' fontWeight='bold' marginTop='10px'>{item.des}</Text>   
          <Box display='flex' width='200px' justifyContent='space-between' marginTop='40px'>
              <Box border='1px solid #d3e1ea' padding='5px' borderRadius='10px'> 
              <Text fontSize='sm' color='#8292b4'>{item.course}</Text>
               </Box>
              <Box border='1px solid #d3e1ea' padding='5px' borderRadius='10px'> 
              <Text fontSize='sm' color='#8292b4'>{item.provide}</Text>
               </Box>
          </Box>
          </Box>
       ))}
        </Container>
    </div>
  )
}

export default Learning
