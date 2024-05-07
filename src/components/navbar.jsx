import React, { useEffect } from 'react'
import { useContext,useState } from 'react'
import {Text,Flex,Box,Button,Image,Grid} from '@chakra-ui/react'

//contexta
import { DeliveryPickupContext } from '../contexts/pickup-delivery-context'
import { HamburgerContext } from '../contexts/hamburger-context'

export const Navbar = ()=>{

//states
const[hamburgerIcon,setHamburgerIcon]=useState('fa-solid fa-bars')
const[useTheAppPopUp,setUseTheAppPopUp]=useState('none')

//contexts
const{setOnDeliveryComponent} = React.useContext(DeliveryPickupContext) // pickup delivery context
const{hamburgerDisplay,setHamburgerDisplay}=React.useContext(HamburgerContext)


    const button_style={
        w:'17%',
        borderRadius:'20',
        bg:'white',
        hover:{bg:'white',color:'black',textDecoration:'underline'},
        fontSize:'14px',
        fontWeight:'700'
    }// for buttons that contain home menu careers etc...

useEffect(()=>{
  setTimeout(()=>{
   setUseTheAppPopUp('flex')
  },5500)
},[])
return(

<>
<Grid pos='sticky' top='0%'>

<Flex bg='white' display={[useTheAppPopUp,useTheAppPopUp,useTheAppPopUp,'none']} pl={3} pb={2} pt={2} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'  align='center' justifyContent='space-evenly'>
    <i className="fa-solid fa-xmark" onClick={()=>{setUseTheAppPopUp('none')}}></i>
    <Image ml={[2,2,0,0]} w={['14%','10%','9%','0%']} src='https://cdn.branch.io/branch-assets/journeys/867870251428106768/banner-KFC_PrimaryBrandLogo-1710953838281.jpg'/>
    <Grid  textAlign='left' ml={2} fontSize={11}>
    <Text fontWeight='700'>KFC US - Ordering App</Text>
    <Text>Join KFC Rewards to earn points toward FREE KFC!</Text>
    </Grid>
    <Button w={['38%','20%','15%','0%']} borderRadius={12} height='5vh' fontSize={14} ml={0} mr={2} bg='black' color='white' onClick={()=>{window.location.href='https://play.google.com/store/apps/details?id=com.kfc.us.mobile&hl=en_IN&gl=US'}}>Use the App</Button>
</Flex>{/**pop up for use the app */}

<Flex  bg='white' h={{base:'12vh',sm:'13vh',md:'14vh',lg:'17vh'}} align='center' justify='space-evenly' pl='5' pr='5'>

<Box fontSize={{base:'31px',sm:'32px',md:'34px'}} justifyContent='space-evenly' alignItems='center' w={{base:'50%',sm:'30%',md:'20%'}} h='30%' display={{base:'flex',sm:'flex',md:'flex',lg:'none',xl:'none'}}>
<i className={`${hamburgerIcon}`} onClick={()=>{
setHamburgerDisplay(hamburgerDisplay=='none'?'grid':'none')
setHamburgerIcon(hamburgerIcon=='fa-solid fa-bars'?'fa-solid fa-xmark':'fa-solid fa-bars')
}}></i>
<Image w={{base:'40%',sm:'47%',md:'50%'}} src='data:image/png;base64,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'/>
</Box>{/** hamburger icon and kfc image Box */}

<Image mt='-3%' w='13%' display={{base:'none',sm:'none',md:'none',lg:'flex'}} src='https://i.ibb.co/fYjs4CY/Screenshot-2024-04-28-102658.png'/>
<Box fontWeight='700' color='black' alignItems='center' justifyContent='space-evenly' h='80%' display={{base:'none',sm:'none',md:'none',lg:'flex'}} w='40%'>
 <Button sx={button_style} _hover={button_style.hover}>Menu</Button>
 <Button sx={button_style} _hover={button_style.hover}>Rewards</Button>
 <Button sx={button_style}  _hover={button_style.hover}>Careers</Button>
 <Button sx={button_style} _hover={button_style.hover}>Merch</Button>
 <Button sx={button_style} _hover={button_style.hover} gap={1}>Find a KFC <i style={{fontSize:'10px',marginTop:'2px'}} className="fa-solid fa-arrow-up-right-from-square"></i></Button>
</Box>{/** home menu careers text holder Box */}


<Flex  fontSize={{base:'17',sm:'22',md:'24',lg:'26'}} w={{base:'55%',sm:'40%',md:'45%',lg:'14%'}} h='80%' justify='space-evenly' align='center'>
<i className="fa-solid fa-magnifying-glass"></i>
<Image w={['15%','13%','9%','20%']} src='https://i.ibb.co/ryc638K/Screenshot-2024-04-28-102128.png'/>
<Image w={['14%','10%','7%','18%']} src='https://i.ibb.co/gr3qHsJ/Screenshot-2024-04-28-101749.png'/>
</Flex> {/**search icon, bag icon, user icon Flex */}
<Button borderRadius={25} w='14%' colorScheme='red' display={{base:'none',sm:'none', md:'none',lg:'flex'}}>Start order</Button>
</Flex> {/** end of Navbar FLex */}


<Button pos="sticky" top={{base:'12vh',sm:'13vh',md:'14vh',lg:'17vh'}} fontSize={{base:'8px',sm:'10px',md:'12px',lg:'14px'}} h={{base:'5vh',sm:'6vh',md:'7vh',lg:'9vh'}} w='100%' borderRadius='none' bg='RGB(32, 33, 36)' gap={4} _hover={{bg:'black'}} onClick={()=>{setOnDeliveryComponent('grid')}}>
<i style={{color:'red'}} className="fa-solid fa-location-dot"></i>
<Text color='white'>Start an Order for Pickup or Delivery</Text>
</Button>{/** end of black button that contains location icon and text */}

</Grid>
</>

  
)
}