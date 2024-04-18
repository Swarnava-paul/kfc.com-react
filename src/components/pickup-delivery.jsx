import { Flex,Box,Grid,Text,Button,Input } from "@chakra-ui/react"

export const Pickup_delivery = ()=>{
return(
    <>
    <Grid pos='absolute' rowGap={4} pos='fixed' m={['0%','0%','0%','11%']} bg='white' w={['100%','100%','100%','80%']}   borderRadius='25px'>
  
  <Flex  w='100%' h='9vh' borderTopLeftRadius={25} borderTopRightRadius={25} boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;'>
  <Flex w='95%' justify='center' align='center' fontSize={18} fontWeight='700'><Text>START YOUR ORDER</Text></Flex>
  <Flex w='5%' justify='center' align='center' fontSize={20}><i className="fa-solid fa-xmark"></i></Flex>
  </Flex>

  <Grid templateColumns='repeat(2,50%)' h='auto'>
   <Left_section/>
   <Right_section/>
  </Grid>

     
    </Grid>
    </>
)
}

const Left_section = ()=>{
   return(
      <>
       <Grid  borderBottomLeftRadius={25} bg='rgb(255, 251, 245)' pb={15} placeItems='center' rowGap={4}>

         <Text fontSize={22}  fontWeight='700'>How would you like to order?</Text>
          <Flex w='100%' bg='red' h='7vh'>
          <Button w='50%' h='100%' borderRadius='none' fontWeight='700'>Pick-Up</Button>
          <Button w='50%' h='100%' borderRadius='none' fontWeight='700'>Delivery</Button>
          </Flex>
          
           <Flex w='90%' h='6vh' align='center' margin='auto' border='1px' borderColor='black' mt='25px' borderRadius={15} justify='space-evenly'>
           <i className="fa-solid fa-magnifying-glass"></i>
           <input style={{width:'90%', outline:'none',backgroundColor:'rgb(255, 251, 245)'}} type='' placeholder='Search by State,City or zip'/>
           </Flex>
            
            <Grid placeItems='center' rowGap={2}>
            <i  style={{color:"red",fontSize:'48px'}} className="fa-solid fa-location-dot"></i>
            <Text fontWeight='900'>QUICKLY LOCATE YOUR CLOSEST LOCATION</Text>
            <Box w='80%' ><Text textAlign='center' fontWeight='500' fontSize={13}>To make finding a location nearest you easier, allow location services to be enabled in settings.</Text></Box>
            </Grid>

       </Grid>
      </>
   )
}

const Right_section = ()=>{
   return(
      <>
      <Box   borderBottomRightRadius={25}></Box>
      </>
   )
}