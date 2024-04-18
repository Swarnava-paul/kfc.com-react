import {Grid,Text,Box,Button,Flex} from "@chakra-ui/react"
import { useState } from "react"
import '../App.css'

//components from footer components
import { First_section_of_footer } from "./footer-components/first-section"
import { Second_section_of_footer } from "./footer-components/second-section"
import { Privacy_terms } from "./footer-components/privacy-terms"
import { Follow_us } from "./footer-components/follow-us"
import { Copy_wright } from "./footer-components/copy-wright"


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
 
        <Copy_wright/>

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



