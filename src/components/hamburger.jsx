import React from "react";
import { Grid,Image,Text ,Flex,Button} from "@chakra-ui/react";


export const Hamburger = ()=>{

    const flex_style={
        bg:'RGB(248, 247, 245)'
    }

    return(
        <>
        <Grid top={130} w='100%' h='auto' bg='white' pos='absolute' justifyContent='center' templateColumns='90%'templateRows='repeat(6,35vh)'  rowGap={10}>
          <Grid color='black'>
              <Text fontSize={50} fontWeight='700' color='RGB(32, 33, 36)'>LET'S GET COOKIN'</Text>
              <Button bg='RGB(32, 33, 36)' color='white' borderRadius={8} _hover={{bg:"RGB(32, 33, 36)"}} w='14%' fontSize={13} fontWeight='500'>Sign In / Sign Up {'->'}</Button>
          </Grid>

           <Flex sx={flex_style}></Flex>
           <Flex sx={flex_style}></Flex>
           <Flex sx={flex_style}></Flex>
           <Flex sx={flex_style}></Flex>
           <Flex sx={flex_style}></Flex>

        </Grid>
        </>
    )
}