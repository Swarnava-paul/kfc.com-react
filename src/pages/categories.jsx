import {Box,Grid,Text,Button,Image,Input,Flex} from '@chakra-ui/react'
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

        <Grid h='100vh' justifyContent='center' >
         <Image width='30%' src='https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg'/>
         <Text fontSize={30} fontWeight='700'>KFC MENU</Text>
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

                <Grid h='auto' border='1px' borderColor='blue' rowGap={15}>
                  <Image src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002167.jpg?ver=41.8'/>
                  <Text ml='3' fontSize={16} fontWeight='600'>All Chicken Box</Text>
                  <Nonveg/>
                </Grid>{/**each food card Grid */}

             </Grid>{/* Products cards Grid*/}

              </Box>

        </Grid>{/** main content holder */}
 
        </Grid>{/**Main holder */}
        </>
    )
}


const Nonveg= ()=>{

    return(
        <>
        <Flex justify='space-evenly' w='35%' align='center'>
         <Box w='18%' border='1px' borderColor='darkred' borderRadius='5' h='18px' display='flex' justifyContent='center' alignItems='center'>🔺</Box>
         <Text fontSize={12} fontWeight='400' color='RGB(73, 73, 73)'>Non Veg</Text>
        </Flex>
        </>
    )
}