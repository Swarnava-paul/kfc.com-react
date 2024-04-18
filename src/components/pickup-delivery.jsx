import { Flex,Box,Grid,Text,Button,Input } from "@chakra-ui/react"

export const Pickup_delivery = ()=>{
return(
    <>
    <Grid pos='absolute' pos='fixed' m={['0%','0%','0%','11%']} bg='white' w={['100%','100%','100%','80%']} h={['100vh','100vh','100vh','70vh']}  borderRadius='25px'>
  
  <Flex  w='100%' h='8vh'>
  <Flex w='95%' justify='center' align='center' fontSize={18} fontWeight='400'><Text>START YOUR ORDER</Text></Flex>
  <Flex w='5%' justify='center' align='center' fontSize={20}><i className="fa-solid fa-xmark"></i></Flex>
  </Flex>

  <Grid templateColumns='repeat(2,50%)' h='62vh' >
   <Grid  borderBottomLeftRadius={25}></Grid>
   <Box  borderBottomRightRadius={25}></Box>
  </Grid>

     
    </Grid>
    </>
)
}