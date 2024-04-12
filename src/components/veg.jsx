import { Flex,Image,Text } from "@chakra-ui/react"

export const Veg = ()=>{
    
    return(
        <>
        <Flex justify='space-evenly' w={{base:'30%',sm:'28%',md:'27%',lg:"20%"}} align='center' ml='1'>
         <Image src='https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg'/>
         <Text fontSize={12} fontWeight='400' color='RGB(73, 73, 73)'>Veg</Text>
        </Flex>
        </>
    )
}