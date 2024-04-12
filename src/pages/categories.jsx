import {Box,Grid,Text,Button,Image,Input,Flex, border} from '@chakra-ui/react'
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
        <Grid templateColumns={{base:'100%',sm:'100%',md:'100%',lg:'27% 73% '}}>
            

        <Box h='100vh' justifyContent='center' display={{base:'none',sm:'none',md:'none',lg:'grid'}}>
         <Image width='30%' src='https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg'/>
         <Text fontSize={30} fontWeight='700'>KFC MENU</Text>
         {
            side_bar_menu_texts.map(i=>(
              <Text key={i}>{i}</Text>
            ))
         }
        </Box>{/**side bar */}
        
         <Grid  h='100vh' overflowY='scroll' pb='10%' rowGap={28} pt={40} >

            <Box h='auto' >{/**will be map */}
              <Text fontSize={25} fontWeight='800'>VALUE SNACKERS</Text>

              <Grid justifyContent='center' mt='14'  templateColumns={{base:'repeat(1,70%)',sm:'repeat(3,30%)',md:'repeat(3,30%)',lg:'repeat(3,32%)'}} pb='9' columnGap={{base:"9px",sm:'15px',md:'15px',lg:'10px'}} rowGap={14}>
            
            {
                side_bar_menu_texts.map(i=>(
                    
                <Grid key={i} h='auto' rowGap={3} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' pb={4} borderRadius={10}>
                <Image width={{base:'100%',sm:"100%",md:'100%',lg:'100%'}} borderTopLeftRadius={10} borderTopRightRadius={10} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002167.jpg?ver=41.8'/>
                <Text ml='3' fontSize={16} fontWeight='600' color='RGB(32, 33, 36)'>All Chicken Box</Text>
                <Nonveg/>
                <Text ml='3' color='RGB(32, 33, 36)' fontSize={16} fontWeight='600'>₹859.05</Text>
                 <Flex fontWeight='400' w='90%' margin='auto' p='15px 15px 15px 0px' fontSize={14} color='RGB(73, 73, 73)'>Family Deal of 3 chicken zingers, med popcorn, med fries & 1 Pepsi 475ml</Flex>
                 <Flex  w='100%' justify='center'>
                 <Button pos='static' color='white' gap={2} bg='RGB(228, 0, 43)' w={{base:"90%",sm:"80%",md:'70%',lg:'70%'}} borderRadius={19} border='none' _hover={{bg:'RGB(228, 0, 43)'}}> 
                   Add to Cart
                   <Image src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'/>
                 </Button>
                 </Flex>
              </Grid>
                ))
            }

             </Grid>{/* Products cards Grid*/}

              </Box>

        </Grid>{/** main content holder */}

 
        </Grid>{/**Main holder Grid of side bar and main content holder */}
        </>
    )
}


const Nonveg= ()=>{

    return(
        <>
        <Flex justify='space-evenly' w={{base:'50%',sm:'40%',md:'44%',lg:"30%"}} align='center' ml='1'>
         <Box w='18%' border='1px' borderColor='darkred' borderRadius='5' h='18px' display='flex' justifyContent='center' alignItems='center'>🔺</Box>
         <Text fontSize={12} fontWeight='400' color='RGB(73, 73, 73)'>Non Veg</Text>
        </Flex>
        </>
    )
}