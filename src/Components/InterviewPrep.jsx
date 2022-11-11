import { Container ,Box, Heading,Image,Text,SimpleGrid} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const InterviewPrep = () => {
    const roles=[
        {
            title: 'Software Engineer',
            question:'(7.2K+ questions)'
        },{
            title: 'Business Analyst',
            question:'(2.8K+ questions)'
        },{
            title: 'Consultant',
            question:'(2.4K+ questions)'
        },{
            title: 'Financial Analyst',
            question:'(894 questions)'
        },{
            title: 'Sales & Marketing',
            question:'(911 questions)'
        },{
            title: 'Quality Engineer',
            question:'(1.3K+ questions)'
        }
    ]

    const inter=[
        {
            title: 'Amazon',
            question:'1.7K+ Interviews',
            img:'https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png'
        },{
            title: 'TCS',
            question:'2.5K+ Interviews',
            img:'https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png'
        },{
            title: 'Byjus',
            question:'816 Interviews',
            img:'https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png'
        },{
            title: 'Accenture',
            question:'2.8K+ Interviews',
            img:'https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png'
        },{
            title: 'Cognizant',
            question:'1.6K+ Interviews',
            img:'https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png'
        },{
            title: 'Flipkart',
            question:'488 Interviews',
            img:'https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png'
        }
    ]
  return (
    <div>
        <Container marginTop='50px' maxW='1200px'  display='flex' justifyContent='space-evenly'>
        <Box paddingTop='45px' w='250px'>
            <Heading size='lg'>Prepare for your next interview</Heading>
            <Image marginTop='15px' src='https://static.naukimg.com/s/0/0/i/ab-interview.png' alt='Interview' />
        </Box>


        <Box w='500px' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='10px' paddingTop='20px' textAlign='center'>
        <Heading size='md'>Interview questions by company</Heading>
          <SimpleGrid columns={2} spacingX='20px' spacingY='20px' paddingX='30px' marginTop='30px'>

            {inter.map((item)=>(
                <Box boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='10px' height='80px' display='flex' justifyContent='center' alignItems='center'>
                <Image border='1px solid #8292b4' borderRadius='10px' src={item.img} alt='amazon' width='50px' height='50px' />
                <Box height='50px' lineHeight='1px'>
                <Heading size='md'>{item.title}</Heading>
                <Text margin='10px' fontSize='sm' color='#8292b4'>{item.question}</Text>
                </Box>
             </Box>
            ))}
          </SimpleGrid>
        <Link to='/companies'><Heading marginTop='30px' color='#457eff' marginBottom='20px' alignItems='center' size='sm'>View all companies</Heading></Link>
        </Box>



        <Box w='350px' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='10px' paddingTop='20px' textAlign='center'>
        <Heading marginBottom='20px' size='md'>Interview questions by role</Heading>
        {roles.map((item)=>(
            <Box margin='20px'>
                  <Text margin='10px' fontSize='sm'>{item.title}  {item.question}</Text>
                  <hr/>
            </Box>
        ))}
        <Heading marginTop='20px' color='#457eff' marginBottom='20px' alignItems='center' size='sm'>View all roles</Heading>
        </Box>
        </Container>
    </div>
  )
}

export default InterviewPrep
