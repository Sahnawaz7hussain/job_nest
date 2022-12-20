import React from 'react';
import { Container ,Box, Heading,Image,Text,useMediaQuery,Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MainFeaturedCompanies = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 900px)')
    let learn=[
        {
            id:1,
            img:'https://img.naukimg.com/logo_images/groups/v2/42932.gif',
            top:"Genpact",
            rating:4.1,
            reviews:'7K+ reviews',
            des:"Global professional services firm"
        },{
            id:2,
            img:'https://img.naukimg.com/logo_images/groups/v2/398058.gif',
            top:"Amazon",
            rating:4.3,
            reviews:'7K+ reviews',
            des:"World's Largest Internet Company"
        },{
            id:3,
            img:'https://img.naukimg.com/logo_images/groups/v2/1744734.gif',
            top:"Loxoft",
            rating:4.4,
            reviews:'7K+ reviews',
            des:"DXC Technology Company"
        },{
            id:4,
            img:'https://img.naukimg.com/logo_images/groups/v2/44512.gif',
            top:"ICICI Bank",
            rating:4.2,
            reviews:'7K+ reviews',
            des:"Leading private sector bank in India"
        },{
            id:5,
            img:'https://img.naukimg.com/logo_images/groups/v2/21746.gif',
            top:"FIS",
            rating:4.1,
            reviews:'7K+ reviews',
            des:"S is hiring C++ & Mumps Developer"
        }
    ]
    return (
    <div>
        <Container paddingTop='95px' w='650px'>
            <Heading size='lg' fontWeight='extrabold'>Featured companies actively hiring</Heading>
        </Container>
         <Container marginTop='50px' marginBottom='60px' maxW='1300px'  display='flex' justifyContent='space-evenly' flexDir={isLargerThan600? "row":"column"}>
        
       {learn.map((item)=>(
          <Box key={item.id} w='200px' padding='15px' border='1px solid #d3e1ea'  borderRadius='10px' paddingTop='20px' textAlign='center'>
            <Image src={item.img} alt="rrr" margin='auto' /> 
            <Box marginTop='10px' borderRadius='20px' backgroundColor='#FEFAF8' paddingY='15px' paddingX='20px'>
                <Heading size='sm' marginTop='5px'>{item.top}</Heading>
                <Box display='flex' alignItems='center' width='140px' height='20px' justifyContent='space-between'>
                    <Image src='https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg' alt='r' />
                    <Heading size='sm' marginTop='5px' fontWeight='bold' color='gray'>{item.rating}</Heading>
                    <Heading size='xs' marginTop='5px' fontWeight='bold' color='gray'>{item.reviews}</Heading>
                </Box>
            </Box>   
                <Text margin='10px' fontSize='sm' color='#8292b4'>{item.des}</Text>
                <Button backgroundColor='#F1F5FF' borderRadius='50px' color='#457EFF' fontSize='md'>View jobs</Button>
          </Box>
       ))}
        </Container>
        <Container marginTop='-20px' width='250px'>
       <Button paddingY='20px' backgroundColor='white' borderRadius='50px' color='#457EFF' border='1px solid #457EFF ' fontSize='lg' fontWeight='bold'><Link to='/companies'>View all companies</Link></Button>
        </Container>
    </div>
  )
}

export default MainFeaturedCompanies
