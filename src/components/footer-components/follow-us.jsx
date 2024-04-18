import { Flex,Box,Text } from "@chakra-ui/react"

export const Follow_us = ()=>{

    const box_style={

       w:"14%",
       h:"24px",
       borderRadius:"50%",
       display:'flex',
       justifyContent:'center',
       alignItems:'center'
    }

    return (
        <>
        <Flex color='white' p={25} gap={5}  w='100%' justify='center' align='center' fontSize={['20px','22px','22px','15px']}>
          <Text>Follow Us</Text>
          <Box sx={box_style}><i className="fa-brands fa-instagram"></i></Box>
          <Box sx={box_style}><i className="fa-brands fa-facebook"></i></Box>
          <Box sx={box_style}><i className="fa-brands fa-x-twitter"></i></Box>
        </Flex>
        </>
    )
}