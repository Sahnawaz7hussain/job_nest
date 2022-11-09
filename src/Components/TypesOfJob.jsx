import { Container,Button,useMediaQuery,Image } from '@chakra-ui/react'
import React from 'react'

const TypesOfJob = () => {
    const types=[{title:"Remote",image:"https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg"},
    {title:"MNC",image:"https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg"},
    {title:"Sales",image:"https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg"},
    {title:"Fortune 5",image:"https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg"},
    {title:"Software",image:"https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg"},
    {title:"Banking",image:"https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg"},
    {title:"Temp WFH",image:"https://static.naukimg.com/s/0/0/i/trending-naukri/temporary-wfh.svg"},
    {title:"HR",image:"https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg"},
    {title:"Marketting",image:"https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg"},
    {title:"Data Science",image:"https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg"}];
    
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  return (
    <div>
        <Container maxW='1000px' marginTop='60px' display='grid' gridTemplateColumns= {isLargerThan600?"repeat(5,1fr)":"repeat(2,1fr)"} gap='30px'>
            {types.map((item)=>(<Button colorScheme='white' border='1px solid skyblue' color='black' width={isLargerThan600? "180px":"150px"} height='60px' size='lg' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='20px 4px 20px 4px' justifyContent='space-around'>
                <Image src={item.image} width='30px' alt='remote' />
                {item.title}
                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png' width='5px' alt='remote' />
                </Button>))}
        </Container>
    </div>
  )
}

export default TypesOfJob
