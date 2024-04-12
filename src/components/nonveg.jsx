import { Flex,Image,Text } from "@chakra-ui/react"

export const Nonveg= ()=>{

    return(
        <>
        <Flex  justify='space-evenly' w={{base:'30%',sm:'52%',md:'52%',lg:"30%"}} align='center' ml='1'>
         <Image src='https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg'/>
         <Text fontSize={12} fontWeight='400' color='RGB(73, 73, 73)'>Non Veg</Text>
        </Flex>
        </>
    )
}