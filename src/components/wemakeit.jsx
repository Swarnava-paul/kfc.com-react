import {Box,Grid,Image,Text,Button} from '@chakra-ui/react'


export const Wemakeitbetter = () =>{
    return(
        <>
           <Grid h='auto' bg='RGB(228, 0, 43)' placeItems='center'>
          <Image width='8%' src='https://i.ibb.co/bNm7FNF/Screenshot-2024-04-12-201721.png'/>
          <Text mt='30px' fontSize={14} fontWeight='600' color='white'>OUR FOOD</Text>
          <Box w='80%' h='auto' textAlign='center'>
            <Text fontSize={120} fontWeight='700' color='white'>WE MAKE IT THE HARD WAY</Text>
          </Box>
          <Text fontSize={17} fontWeight='400' color='white'>See what goes into making our world famous fried chicken.</Text>
          <Button mt='22px' pos='static' w='13%' bg='RGB(32, 33, 36)' color='white' _hover={{bg:'RGB(32, 33, 36)'}} borderRadius='15px'>Learn More</Button>
          <Image w='50%' src='https://i.ibb.co/p1pfVty/Screenshot-2024-04-12-203023.png'/>
        </Grid>
        </>
    )
}