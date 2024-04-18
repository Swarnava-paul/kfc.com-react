import {Grid,Text,Box,Button,Image,Flex, border} from "@chakra-ui/react"
import { useState } from "react"
import '../App.css'
import { color } from "framer-motion"
export function Footer(){

    const footer=[
     {btnTxt:'KFC FOOD',t1:'Menu',t2:'Full Nutrition Guide',t3:'Nutrition Calculator',t4:'Food Allergies & Sensitivities'},
     {btnTxt:'Company',t1:'About KFC',t2:'How We Make Chicken',t3:'KFC Foundation',t4:'Company Responsibilities'},
     {btnTxt:'Careers',t1:'Resturants Careers',t2:'Corporate Careers',t3:'Culture',t4:'Growth'},
     {btnTxt:'Resources',t1:'FAQs',t2:'Contact Us',t3:'KFC App',t4:''},
     {btnTxt:'Find a KFC',t1:'Find A KFC',t2:'',t3:'',t4:''},
    ]

    return(
        <>
        <Grid  bg='RGB(32, 33, 36)'  h='auto' pt={8}>
        <First_section_of_footer/> 
        <Second_section_of_footer/> {/* Only visible for Large screens */}
         {
            footer.map(i=>(
                <Responsive_footer_for_small_screens key={i.btnTxt} i={i}/> 
            ))
         } {/* Only visible for small and medium screens */}

         <Grid templateColumns={['100%',"100%",'100%','76% 23%']}  alignItems='center'>
            <Privacy_terms/>
            <Follow_us/>
         </Grid>

        </Grid>
        </>
    )
}



const First_section_of_footer = ()=>{

    const margin_left={
        ml:'15px'
    }

    return (
        <>
        <Grid p='6px'  h='auto' color='white' fontSize={{base:"1-px",sm:'10px',md:'10px',lg:"12px"}} fontWeight='400' rowGap={12} mt={{base:"90px",sm:"50px",md:"80px"}} justifyContent='center'>
           <Box sx={margin_left}><Text>Calorie Statement</Text></Box>
           <Box sx={margin_left} w={{base:"90%",sm:'90%',md:"90%",lg:"90%"}}><Text>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request in-store and on kfc.com. Prices, participation, and product availability may vary.</Text></Box>
           <Box sx={margin_left} w={{base:"90%",sm:'90%',md:"80%",lg:"60%"}}><Text>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Starry are registered trademarks of PepsiCo, Inc.
Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</Text></Box>
           <Box sx={margin_left}><Text>CAPRI-SUN® and the Pouch Shape™ are licensed trademarks of the Capri Sun Group</Text></Box>
           <Image margin='auto' display={['flex','flex','flex','none']} src='https://i.ibb.co/yqvGkFc/Screenshot-345.png'/>
        </Grid>
        </>
    )
}

const Second_section_of_footer= ()=>{

    const text_style={
      fontWeight:'700',
      fontSize:'14px'
    }
    const child_grid_gap={
        rowGap:'8px'
    }
    return(
        <>
        <Grid margin='auto' display={['none','none','none','grid']} p='40px' rowGap={['36px','35px','33px','0px']} columnGap={['52px','59px','63px','30px']} justifyContent={['center','center','center','space-evenly']}  fontSize={12} mt={10} w='90%' templateColumns={['repeat(2,33%)','repeat(2,36%)','repeat(3,22%)','repeat(7,15%)']} color='white' >
            <Grid  >
                <Image w='80%' src='https://i.ibb.co/yqvGkFc/Screenshot-345.png'/>
            </Grid>
            <Grid sx={child_grid_gap}>
                <Text sx={text_style}>KFC Food</Text>
                <Grid sx={child_grid_gap} >
                    <Text>Menu</Text>
                    <Text>Full Nutrition Guide</Text>
                    <Text>Nutrition Calculator</Text>
                    <Text>Food Allergies & Sensitivities</Text>
                </Grid>
            </Grid>
            <Grid sx={child_grid_gap}>
                <Text sx={text_style}>Company</Text>
                <Grid sx={child_grid_gap}>
                    <Text>About KFC</Text>
                    <Text>How We Make Chicken</Text>
                    <Text>KFC Foundation</Text>
                    <Text>Company Responsibility</Text>
                </Grid>
            </Grid>
            <Grid sx={child_grid_gap}>
                <Text sx={text_style}>Careers</Text>
                <Grid sx={child_grid_gap}>
                    <Text>Restaurant Careers</Text>
                    <Text>Corporate Careers</Text>
                    <Text>Culture</Text>
                    <Text>Growth</Text>
                </Grid>
            </Grid>
            <Grid sx={child_grid_gap}>
                <Text sx={text_style}>Resources</Text>
                <Grid sx={child_grid_gap}>
                    <Text>FAQs</Text>
                    <Text>Contact Us</Text>
                    <Text>KFC App</Text>
                </Grid>
            </Grid>
            <Grid sx={child_grid_gap}>
                <Text sx={text_style}>Find a KFC</Text>
                <Grid>
                    <Text>Find A KFC</Text>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

const Responsive_footer_for_small_screens =({i})=>{


    const[display,setDisplay]=useState('hide');
    
    return(
        <>
        <Grid  display={['grid','grid','grid','none']} h='auto' color='white' rowGap={4} p={8}>
          {
            (display=='hide'?(
                <>
                <Button   pos='static'  _hover={{bg:'RGB(32, 33, 36)'}}  bg='RGB(32, 33, 36)' color='white' justifyContent='space-between' onClick={()=>{
                    setDisplay('flex')
                }}>{i.btnTxt}
                <i className="fa-solid fa-angle-down"></i>
                </Button>
                <Box className="box-border-of-footer"></Box>
                </>
            ):(
                <>
                <Button onClick={()=>{
                    setDisplay('hide')
                }}  pos='static'  bg='RGB(32, 33, 36)' color='white' justifyContent='space-between' _hover={{bg:'RGB(32, 33, 36)'}} >
               {i.btnTxt}
               <i className="fa-solid fa-angle-up"></i>
               </Button>
               <Box ml={4} display='grid' rowGap={5}>
               <Text>{i.t1}</Text>
                <Text>{i.t2}</Text>
                <Text>{i.t3}</Text>
                <Text>{i.t4}</Text>
               </Box>
               <Box className="box-border-of-footer"></Box>
               </>
            ))
          }
        </Grid>
        </>
    )
}

const Privacy_terms =()=>{

    const vertica_row={
        
       color:"white",
       display:['none','none','none','flex'],
    }

    return (
        <>
        <Box gap={2} display={['grid','grid','grid','flex']} p={5}  fontSize={['15px','17px','22px','10px']} color='white' >
          <Text>Privacy Policy</Text><Box sx={vertica_row}>|</Box>
          <Text>Terms of Use</Text><Box sx={vertica_row}>|</Box>
          <Text>Our Cookies and Ads</Text><Box sx={vertica_row}>|</Box>
          <Text>Do Not Sell or Share My Personal Information</Text><Box sx={vertica_row}>|</Box>
          <Text>Accessibility Statement</Text><Box sx={vertica_row}>|</Box>
          <Text>Build: KFC03222024:a7156544</Text>
        </Box>
        </>
    )
}

const Follow_us = ()=>{

    const box_style={

       w:"14%",
       h:"24px",
       borderRadius:"50%",
       display:'flex',
       justifyContent:'center',
       alignItems:'center'
    }

    return (
        <>
        <Flex color='white' p={25} gap={5}  w='100%' justify='center' align='center' fontSize={['20px','22px','22px','15px']}>
          <Text>Follow Us</Text>
          <Box sx={box_style}><i className="fa-brands fa-instagram"></i></Box>
          <Box sx={box_style}><i className="fa-brands fa-facebook"></i></Box>
          <Box sx={box_style}><i className="fa-brands fa-x-twitter"></i></Box>
        </Flex>
        </>
    )
}