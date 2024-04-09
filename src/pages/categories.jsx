import {Box,Grid,Text,Button,Image, border} from '@chakra-ui/react'

export const Categoriespage = ()=>{
    
let border ={
    border:'2px',
    borderColor:"red",
}
let border2 ={
    border:'2px',
    borderColor:"black",
}
    return(
        <>
        <Grid >

        <Grid sx={border} h='90vh' pos='fixed' w='20%'></Grid>{/**side bar */}
        
         <Box sx={border2} h='350vh' pl='20%' w='100%'></Box>{/** main content holder */}

        </Grid>{/**Main holder */}
        </>
    )
}