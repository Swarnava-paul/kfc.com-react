import { Box,Text } from "@chakra-ui/react"

export const Privacy_terms =()=>{

    const vertica_row={
        
       color:"white",
       display:['none','none','none','flex'],
    }

    return (
        <>
        <Box gap={2} display={['grid','grid','grid','flex']} p={5}  fontSize={['15px','17px','22px','10px']} color='white' >
          <Text>Privacy Policy</Text><Box sx={vertica_row}>|</Box>
          <Text>Terms of Use</Text><Box sx={vertica_row}>|</Box>
          <Text>Our Cookies and Ads</Text><Box sx={vertica_row}>|</Box>
          <Text>Do Not Sell or Share My Personal Information</Text><Box sx={vertica_row}>|</Box>
          <Text>Accessibility Statement</Text><Box sx={vertica_row}>|</Box>
          <Text>Build: KFC03222024:a7156544</Text>
        </Box>
        </>
    )
}