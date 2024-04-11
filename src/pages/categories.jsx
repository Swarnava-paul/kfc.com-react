import {Box,Grid,Text,Button,Image,Input} from '@chakra-ui/react'
import { color } from 'framer-motion'

export const Categoriespage = ()=>{
    
let border ={
    border:'2px',
    borderColor:"red",
}
let border2 ={
    border:'2px',
    borderColor:"black",
}

const side_bar_menu_texts=[
    'PERI PERI CHICKEN',
    'VALUE SNACKERS',
    'CHICKEN ROLLS',
    'CHICKEN BUCKETS',
    'BIRIYANI BUCKETS',
    'BOX MEALS',
    'BURGERS',
    'SNACKS'
]
const text_style={
    color:'rgb(73, 73, 73)',
    fontSize:"16px",
    fontWeight:400
}
    return(
        <>
        <Grid templateColumns='27% 73% '>

        <Grid h='100vh' sx={border} justifyContent='center' templateRows='repeat(10,10%)'>
         <Image width='30%' src='https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg'/>
         <Text fontSize={32} fontWeight='700'>KFC MENU</Text>
         {
            side_bar_menu_texts.map(i=>(
              <Text key={i}>{i}</Text>
            ))
         }
        </Grid>{/**side bar */}
        
         <Grid  h='auto' pb='10%'  rowGap={28} mt={152}>
            <Box w='90%'h='auto' border='2px' borderColor='red'>{/**will be map */}
              <Text fontSize={25} fontWeight='800'>VALUE SNACKERS</Text>

              <Grid mt='14' templateColumns='repeat(3,32%)' pb='9' columnGap={2} rowGap={12}>

                <Grid h='70vh' border='1px' borderColor='blue'>12144</Grid>
                <Grid h='70vh' border='1px' borderColor='blue'>1214454878</Grid>
                <Grid h='70vh' border='1px' borderColor='blue'>1214454878</Grid>
                <Grid h='70vh' border='1px' borderColor='blue'>1214454878</Grid>
                <Grid h='70vh' border='1px' borderColor='blue'>1254878</Grid>

             </Grid>{/* Products cards Grid*/}

              </Box>

        </Grid>{/** main content holder */}
 
        </Grid>{/**Main holder */}
        </>
    )
}