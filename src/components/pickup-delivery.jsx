import { useState} from "react"
import React from "react"

import { Flex,Box,Grid,Text,Button} from "@chakra-ui/react"

//contexts
import { DeliveryPickupContext } from "../contexts/pickup-delivery-context"

export const Pickup_delivery = ()=>{

   //context 
const {onDeliveryComponent,setOnDeliveryComponent} = React.useContext(DeliveryPickupContext)


return(
    <>
    <Grid display={onDeliveryComponent} bg='rgb(12, 12, 12)' w='100%' h='100%' position='absolute' opacity='0.9' mt='-15%'>

    <Grid mt='11%'  display={onDeliveryComponent} rowGap={0} ml='10%' position='absolute'   bg='white' w={['100%','100%','100%','80%']}   borderRadius='10px'>
  
  <Flex mt={['95px','120px','124px','0px']}  w='100%' h='9vh' borderTopLeftRadius={25} borderTopRightRadius={25} boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;'>
  <Flex  w='95%' justify='center' align='center'  fontWeight='700'><Text fontSize={18}>START YOUR ORDER</Text></Flex>
  <Flex w='5%' justify='center' align='center' fontSize={20}><i className="fa-solid fa-xmark" style={{cursor:'pointer'}} onClick={()=>{setOnDeliveryComponent('none')}}></i></Flex>
  </Flex>

  <Grid   templateColumns={['100%','100%','100%','repeat(2,50%)']}  templateRows={['repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)','100%']}>
   <Left_section/>
   <Right_section/>
  </Grid>

     
    </Grid>

    </Grid>
    </>
)
}

const Left_section = ()=>{

   const[divBorder,setDivBorder]=useState('pickup')

   let button_style={
      bg:'rgb(255, 251, 245)',
      hover:{bg:'rgb(255, 251, 245)'},
      borderRadius:"none",
      w:'50%',
      h:'100%',
      fontWeight:'700'
   }

const common_bg={
   bg:'rgb(255, 251, 245)'
}   



   return(
      <>
       <Grid  borderBottomLeftRadius={25} sx={common_bg} pb={15} placeItems='center' rowGap={4}>

         <Text fontSize={22}  fontWeight='700'>How would you like to order?</Text>

          <Flex w='100%' bg='red' h='12vh'>
          <Button color={(divBorder=='pickup'?'black':'RGB(101, 101, 101)')} sx={button_style} _hover={button_style.hover} onClick={()=>{setDivBorder('pickup')}}>Pick-Up</Button>
          <Button color={(divBorder=='delivery'?'black':'RGB(101, 101, 101)')}  sx={button_style} _hover={button_style.hover} onClick={()=>{setDivBorder('delivery');state='delivery'}}>Delivery</Button>
          </Flex>{/** pickup and delivery button holder */}

          <Flex w='100%'>
             <Box w='50%' border={(divBorder=='pickup'?'1px':'0px')} borderColor={(divBorder=='pickup'?'red':'white')}></Box>
             <Box w='50%' border={(divBorder=='delivery'?'1px':'0px')} borderColor={(divBorder=='delivery'?'red':'white')}></Box>
          </Flex> {/** bottom border after pick up and delivery button */}



    <Grid  h='37vh' w='100%'>      
    {
      (divBorder=='pickup'?(
         <>
         <Flex w='90%' h='6vh' align='center' margin='auto' border='1px' borderColor='black' mt='25px' borderRadius={15} justify='space-evenly'>
         <i className="fa-solid fa-magnifying-glass"></i>
         <input style={{width:'90%', outline:'none',backgroundColor:common_bg.bg}} type='' placeholder='Search by State,City or zip'/>
         </Flex>
          
          <Grid placeItems='center' rowGap={1}>
          <i  style={{color:"red",fontSize:'48px'}} className="fa-solid fa-location-dot"></i>
          <Text fontWeight='900'>QUICKLY LOCATE YOUR CLOSEST LOCATION</Text>
          <Box w='80%' ><Text textAlign='center' fontWeight='500' fontSize={13}>To make finding a location nearest you easier, allow location services to be enabled in settings.</Text></Box>
          </Grid>
          </>
      ):(
         <>
         <Text fontWeight='700' textAlign='center'>Tell us where to deliver your order?</Text>
         <Flex w='90%' h='6vh' align='center' margin='auto' border='1px' borderColor='black' mt='25px' borderRadius={15} justify='space-evenly'>
         <i className="fa-solid fa-magnifying-glass"></i>
         <input style={{width:'90%', outline:'none',backgroundColor:common_bg.bg}} type='' placeholder='Enter Delivery Address'/>
         </Flex>
         </>
      ))
    }
   </Grid>


       </Grid>
      </>
   )
}

const Right_section = ()=>{
   return(
      <>
      <Box   borderBottomRightRadius={10}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5767946.969462261!2d-105.69989700520588!3d37.30309266367307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8706291cf1e026a9%3A0xd9278a10cadf8705!2sTexas%20County%2C%20OK%2C%20USA!5e0!3m2!1sen!2sin!4v1713494727993!5m2!1sen!2sin" style={{width:"100%", height:"100%", borderBottomRightRadius:'15px'}} loading="lazy" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Box>
      </>
   )
}