import {Box,Grid,Image,Text,Button,Flex} from '@chakra-ui/react'


export const Wemakeitbetter = () =>{
    return(
        <>
           <Grid h='auto' bg='RGB(228, 0, 43)' placeItems='center' mt='50px'>

          <Image width='8%' src='https://i.ibb.co/bNm7FNF/Screenshot-2024-04-12-201721.png'/>

          <Text mt='30px' fontSize={14} fontWeight='600' color='white'>OUR FOOD</Text>

          <Box w='80%' h='auto' textAlign='center'>
            <Text fontSize={{base:'30px',sm:'40px',md:'60px',lg:'120px'}} fontWeight='700' color='white'>WE MAKE IT THE HARD WAY</Text>
          </Box>

          <Text fontSize={{base:'10px',sm:'13px',md:'14px',lg:'17px'}} fontWeight='400' color='white'>See what goes into making our world famous fried chicken.</Text>

          <Button pos='static' fontSize={{base:'12px',sm:'13px',md:'14px'}} mt='22px' h={{base:"4vh",sm:'5vh',md:'5vh',lg:'8vh'}} w={{base:'28%',sm:'20%',md:'16%',lg:'13%'}} bg='RGB(32, 33, 36)' color='white' _hover={{bg:'RGB(32, 33, 36)'}} borderRadius='15px'>Learn More</Button>

          <Image w='50%' src='https://i.ibb.co/p1pfVty/Screenshot-2024-04-12-203023.png'/>

           <Flex bg='RGB(228, 0, 43)'h='10vh' justify='space-between' w={{base:'90%',sm:'80%',md:'80%',lg:'65%'}} align='center'>
            <Text color='white' fontSize={{base:'6px',sm:'11px',md:'14px',lg:'16px'}} fontWeight='600'>FINGER LICKIN GOOD® IS NOW JUST A FEW CLICKS AWAY</Text>
            <Button pos='static' h={{base:'4vh',sm:"5vh",md:"5vh",lg:"6vh"}} fontSize={{base:'10px',sm:'10px',md:'10px',lg:'10px'}} w={{base:'25%',sm:'22%',md:'20%',lg:'18%'}} borderRadius='20px'>Start Order</Button>
           </Flex>

        </Grid>
        </>
    )
}