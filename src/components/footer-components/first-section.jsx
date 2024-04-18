// package
import { Box,Grid,Text,Image } from "@chakra-ui/react"
export const First_section_of_footer = ()=>{

    const margin_left={
        ml:'15px'
    }

    return (
        <>
        <Grid p='6px'  h='auto' color='white' fontSize={{base:"1-px",sm:'10px',md:'10px',lg:"12px"}} fontWeight='400' rowGap={12} mt={{base:"90px",sm:"50px",md:"80px"}} justifyContent='center'>
           <Box sx={margin_left}><Text>Calorie Statement</Text></Box>
           <Box sx={margin_left} w={{base:"90%",sm:'90%',md:"90%",lg:"90%"}}><Text>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request in-store and on kfc.com. Prices, participation, and product availability may vary.</Text></Box>
           <Box sx={margin_left} w={{base:"90%",sm:'90%',md:"80%",lg:"60%"}}><Text>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Starry are registered trademarks of PepsiCo, Inc.
Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</Text></Box>
           <Box sx={margin_left}><Text>CAPRI-SUN® and the Pouch Shape™ are licensed trademarks of the Capri Sun Group</Text></Box>
           <Image margin='auto' display={['flex','flex','flex','none']} src='https://i.ibb.co/yqvGkFc/Screenshot-345.png'/>
        </Grid>
        </>
    )
}