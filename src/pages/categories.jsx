import {Box,Grid,Text,Button,Image,Input,Flex, border} from '@chakra-ui/react'
import { color } from 'framer-motion'

//react hooks
import { useState , useEffect } from 'react'
//npm packages
import axios from 'axios'

export const Categoriespage = ()=>{

    const[foodData,setFoodData]=useState([])

    useEffect(()=>{
     axios({
        method:'get',
        url:'https://kfc-food-data.onrender.com/foods'
     }).then((resp)=>{
        console.log(resp.data);
       setFoodData(resp.data)
     }).catch((err)=>{
        console.log(err);
     })
    },[])
    
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
        <Grid templateColumns={{base:'100%',sm:'100%',md:'100%',lg:'27% 73% '}} templateRows={{base:'10% 90%',sm:'10% 90%',md:'10% 90%',lg:'100%'}}>


        <Box overflowX={{base:'scroll',sm:'scroll',md:'scroll',lg:'hidden'}} gap={6} alignItems='center' justifyContent={{base:'space-evenly',sm:"space-evenly",md:'space-evenly',lg:'center'}} display={{base:'flex',sm:'flex',md:'flex',lg:'grid'}}>
         <Image ml={{base:'10px',sm:'30px',md:'19px',lg:'0px'}} width={{base:'10%',sm:"5%",md:'5%',lg:'30%'}} src='https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg'/>
         <Box  w={{ base: '70px', sm: '110px', md: '80px', lg: "100%" }}><Text w={{ base: '110px', sm: '110px', md: '80px', lg: "100%" }}  fontSize={{base:'13px',sm:'14px',md:'15px',lg:'30px'}} fontWeight='700'>KFC MENU</Text></Box>
         {
            side_bar_menu_texts.map(i=>(
            <Box key={i} w={{ base: '110px', sm: '110px', md: '130px', lg: "100%" }}>
              <Text  cursor='pointer' w={{ base: '150px', sm: '150px', md: '130px', lg: "100%" }}  fontSize={{base:"12px",sm:'13px',md:'15px',lg:'17px'}}>{i}</Text>
              </Box>
            ))
         }
        </Box>{/**side bar */}
        
         <Grid  h='100vh' overflowY='scroll' pb='10%' rowGap={28}  pt={{base:'10px',sm:'10px',md:'14px',lg:'100px'}} >

         { foodData.map(i=>(
            
            <Box key={Math.random()} h='auto' >{/**will be map */}
              <Text ml='7px' fontSize={{base:'15px',sm:'15px',md:'20px',lg:'25px'}} fontWeight='800'>{i[0].head}</Text>

              <Grid justifyContent='center' mt='14'  templateColumns={{base:'repeat(1,70%)',sm:'repeat(3,30%)',md:'repeat(3,30%)',lg:'repeat(3,32%)'}} pb='9' columnGap={{base:"9px",sm:'15px',md:'15px',lg:'10px'}} rowGap={14}>
            
            {
                i.map(index=>(
                    
                <Grid key={index.price+Math.random()} h='auto' rowGap={3} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' pb={4} borderRadius={10}>
                <Image width={{base:'100%',sm:"100%",md:'100%',lg:'100%'}} borderTopLeftRadius={10} borderTopRightRadius={10} src={index.img}/>
                <Box  w='93%'><Text ml='3' fontSize={16} fontWeight='600' color='RGB(32, 33, 36)'>{index.title}</Text></Box>
                <Nonveg/>
                <Text ml='3' color='RGB(32, 33, 36)' fontSize={16} fontWeight='600'>₹{index.price}</Text>
                 <Flex fontWeight='400' w='90%' margin='auto' p='15px 15px 15px 0px' fontSize={14} color='RGB(73, 73, 73)'>{index.description}</Flex>
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
         ))   
              
              } {/**main map */}

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