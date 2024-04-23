import React from "react";
import { Grid,Image,Text ,Flex,Button} from "@chakra-ui/react";


export const Hamburger = ()=>{

    const flex_style={
        bg:'RGB(248, 247, 245)'
    }

    const hamburger_texts_images=[
        {id:1,text:'Menu',image:'https://www.kfc.com/_next/static/images/menu-50641b4da7780fdd2ef91692b9da429c.png'},
        {id:2,text:'REWARDS',image:"https://www.kfc.com/_next/static/images/Rewards%20EC%201-c467352ec3a159ebe264cb22eac78f5d.svg"},
        {id:3,text:"CAREERS",image:"https://www.kfc.com/_next/static/images/careers-4d39d17a17ca3e563a7e6292790127c5.png"},
        {id:4,text:"MERCH",image:"https://www.kfc.com/_next/static/images/merch-aa94dddedc6eaaf351510faf1cd79194.png"},
        {id:5,text:"FIND A KFC",image:"https://www.kfc.com/_next/static/images/stores-f08efa544c7ec3e36559b83587e198ca.png"},
    ]

    return(
        <>
        <Grid   top={130} w='100%' h='auto' bg='white' pos='absolute' justifyContent='center' templateColumns='90%'templateRows='repeat(6,35vh)'  rowGap={10}>
          <Grid color='black'>
              <Text fontSize={50} fontWeight='700' color='RGB(32, 33, 36)'>LET'S GET COOKIN'</Text>
              <Button bg='RGB(32, 33, 36)' color='white' borderRadius={8} _hover={{bg:"RGB(32, 33, 36)"}} w='14%' fontSize={13} fontWeight='500'>Sign In / Sign Up {'->'}</Button>
          </Grid>

           <Flex sx={flex_style}>
            <Text>Menu</Text>
           </Flex>
           <Flex sx={flex_style}></Flex>
           <Flex sx={flex_style}></Flex>
           <Flex sx={flex_style}></Flex>
           <Flex sx={flex_style}></Flex>

        </Grid>
        </>
    )
}