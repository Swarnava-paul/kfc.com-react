import { Box} from "@chakra-ui/react"
import { useState,useEffect} from "react"

import '../App.css'

export const Redlineloading = ()=>{

    const[displayloading,setDisplayLoading]=useState('grid')
    const[translate,setTranslate]=useState('default-translate-loading-line')
   
 useEffect(()=>{
 setTimeout(()=>{
   setTranslate('on-translate-loadingg-line')
 },10)
 setTimeout(()=>{
 setDisplayLoading('none')
 },2500)
 },[])

    return(
        <>
        <Box bg='white' className={translate}  position='absolute' display={displayloading} w='100%'  h={{base:'150vh',sm:'170vh',md:"190vh",lg:"240vh"}} gridTemplateColumns={{base:'repeat(3,12%)',sm:'repeat(3,6%)',md:'repeat(3,5%)',lg:'repeat(3,5%)'}} justifyContent='center'  columnGap={{base:'5',sm:'6',md:'8',lg:'10'}}>
            <Box bg='red' h='100%'></Box>
            <Box bg='red' h='60%'></Box>
            <Box bg='red' h='30%'></Box>
        </Box>
        </>
    )
}