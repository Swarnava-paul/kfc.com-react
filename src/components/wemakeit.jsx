import {Box,Grid,Image,Text,Button} from '@chakra-ui/react'


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
          <Button fontSize={{base:'12px',sm:'10px',md:'12px'}} mt='22px' pos='static' w={{base:'33%',sm:'29%',md:'22%',lg:'13%'}} bg='RGB(32, 33, 36)' color='white' _hover={{bg:'RGB(32, 33, 36)'}} borderRadius='15px'>Learn More</Button>
          <Image w='50%' src='https://i.ibb.co/p1pfVty/Screenshot-2024-04-12-203023.png'/>
        </Grid>
        </>
    )
}