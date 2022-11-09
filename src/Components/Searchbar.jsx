import { Container, Heading,Text,Input, Select,Button,useMediaQuery,Image } from '@chakra-ui/react'
import React from 'react'

const Searchbar = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  return (
    <div>
        <Container maxW='550px' >
            <Heading paddingTop='40px' textAlign='center'>Find your dream job now</Heading>
            <Text fontSize='xl' textAlign='center' marginTop='7px' color='#8292b4'>5 lakh+ jobs for you to explore</Text>
        </Container>
        <Container maxW={isLargerThan600? "1100px":"500px"} padding='15px' marginTop='30px' maxH={isLargerThan600? "100px":"600px"} border='1px solid white' borderRadius='50px'boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' backgroundColor='white' display='flex' 
        flexDir={isLargerThan600? "row":"column"}   alignItems='center'>
        <Image src='https://static.naukimg.com/s/7/103/i/search.9ec0e1ac.svg' width='50px' alt='remote' />
        <Input border='0px' placeholder='Enter skills/designations/companies' size='md' />
        <Select border='1px' placeholder='Select experience' color='#8292b4' size='md'>
        <option value='fresher'>Fresher(less than 1 year)</option>
        <option value='1'>1 year</option>
        <option value='2'>2 years</option>
        <option value='3'>3 years</option>
        </Select>
        <Input border='0px' placeholder='Enter location' size='md' />
        <Button colorScheme='blue' width={isLargerThan600? "500px":"200px"} size='lg' borderRadius='50px'>Search</Button>
        </Container>
    </div>
  )
}

export default Searchbar
