import React from "react";
import { useContext } from "react";
import { Grid,Image,Text ,Flex,Button} from "@chakra-ui/react";

// context
import { HamburgerContext } from "../contexts/hamburger-context";

export const Hamburger = ()=>{

    const{hamburgerDisplay}=React.useContext(HamburgerContext) // hamburger context



    const flex_style={
        bg:'RGB(248, 247, 245)'
    }

    const hamburger_texts_images=[
        {id:1,text:'Menu',image:'https://www.kfc.com/_next/static/images/menu-50641b4da7780fdd2ef91692b9da429c.png'},
        {id:2,text:'REWARDS',image:'https://i.ibb.co/Gp7brYX/Screenshot-2024-04-23-203810.png'},
        {id:3,text:"CAREERS",image:"https://www.kfc.com/_next/static/images/careers-4d39d17a17ca3e563a7e6292790127c5.png"},
        {id:4,text:"MERCH",image:"https://www.kfc.com/_next/static/images/merch-aa94dddedc6eaaf351510faf1cd79194.png"},
        {id:5,text:"FIND A KFC",image:"https://www.kfc.com/_next/static/images/stores-f08efa544c7ec3e36559b83587e198ca.png"},
    ]

    return(
        <>
        <Grid pb={100} display={[`${hamburgerDisplay}`,`${hamburgerDisplay}`,`${hamburgerDisplay}`,'none']}  top={[110,120,137]} w='100%' h='auto' bg='white' pos='absolute' justifyContent='center' templateColumns='90%'templateRows='repeat(6,auto)'  rowGap={10}>

          <Grid color='black'>
              <Text fontSize={[32,40,50]} fontWeight='700' color='RGB(32, 33, 36)'>LET'S GET COOKIN'</Text>
              <Button bg='RGB(32, 33, 36)' color='white' borderRadius={8} _hover={{bg:"RGB(32, 33, 36)"}} w={['35%','26%','20%']} fontSize={['9px','10px','12px']} fontWeight='500'>Sign In / Sign Up {'->'}</Button>
          </Grid>

          {
            hamburger_texts_images.map(i=>(
                <Flex key={i.id} sx={flex_style} placeItems='center' justify='space-between' pl={10}>
                <Text fontWeight='700'>{i.text}</Text>
                <Image w={['46%','40%','35%']} src={i.image}/>
               </Flex>
            ))
          }

        </Grid>
        </>
    )
}