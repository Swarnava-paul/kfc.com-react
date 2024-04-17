import {Grid,Text,Box,Button,Image} from "@chakra-ui/react"
import { useState } from "react"
import '../App.css'
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
        <Firstsectiontext/>
        <Secondsection/>
         {
            footer.map(i=>(
                <Responsivefooter key={i.btnTxt} i={i}/>
            ))
         }
        </Grid>
        </>
    )
}



const Firstsectiontext = ()=>{

    return (
        <>
        <Grid display={['none','none','none','grid']}  h='auto' color='white' fontSize={{base:"7px",sm:'8px',md:'9px',lg:"12px"}} fontWeight='400' rowGap={12} mt={{base:"90px",sm:"50px",md:"80px"}} justifyContent='center'>
           <Box><Text>Calorie Statement</Text></Box>
           <Box w={{base:"90%",sm:'90%',md:"90%",lg:"100%"}}><Text>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request in-store and on kfc.com. Prices, participation, and product availability may vary.</Text></Box>
           <Box w={{base:"90%",sm:'90%',md:"80%",lg:"60%"}}><Text>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Starry are registered trademarks of PepsiCo, Inc.
Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</Text></Box>
           <Box><Text>CAPRI-SUN® and the Pouch Shape™ are licensed trademarks of the Capri Sun Group</Text></Box>
        </Grid>
        </>
    )
}

const Secondsection = ()=>{

    const text_style={
      fontWeight:'700',
      fontSize:'14px'
    }
    const child_grid_gap={
        rowGap:'8px'
    }
    return(
        <>
        <Grid display={['none','none','none','grid']} p='40px' rowGap={['36px','35px','33px','0px']} columnGap={['52px','59px','63px','8px']} justifyContent={['center','center','center','space-evenly']}  fontSize={12} mt={10} w='90%' templateColumns={['repeat(2,33%)','repeat(2,36%)','repeat(3,22%)','repeat(7,19%)']} color='white' >
            <Grid>
                <Image/>
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

const Responsivefooter =({i})=>{


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
               </>
            ))
          }
        </Grid>
        </>
    )
}