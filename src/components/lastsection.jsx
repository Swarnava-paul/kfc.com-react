import {Text,Image,Grid,Button,Box} from "@chakra-ui/react";


export function Lastsection(){

    return (
        <>
        <Grid  w='100%' h='auto' bg='RGB(246, 245, 242)' templateColumns={{base:'100%',sm:"100%",md:'100%',lg:"60% 40%"}} templateRows={{base:'50% 50%',sm:"40% 60%",md:'40% 60%',lg:"100%"}} rowGap={10}>

            <Grid placeItems='center' mt={{base:"15px",sm:"35px",md:"50px",lg:'5px'}}>
                 <Box w={{base:'80%',sm:"50%",md:"70%",lg:"80%"}}><Text fontSize={{base:"24px",sm:'22px',md:'30px',lg:"52px"}} fontWeight='700' color='RGB(32, 33, 36)'>UNLOCK MORE FINGER LICKIN' GOOD BENEFITS</Text>
                 <Box w={{base:"98%",sm:"80%",md:'80%',lg:"60%"}}><Text fontSize={14} fontWeight='400' color='RGB(73, 73, 73)'>Create an account to get access to great deals and faster checkout.</Text></Box>
                 <Button borderRadius={20} pos='static' fontSize={{base:"12px",sm:'12px',md:"13px",lg:'15px'}} w={{base:"45%",sm:"47%",md:"30%",lg:"27%"}} mt={6} bg='RGB(32, 33, 36)' color='white' _hover={{bg:'RGB(32, 33, 36)'}}>Sign me up!</Button>
                 </Box>               
           </Grid>
           
           <Grid  w='100%' placeItems='center'   bg='RGB(246,245,242)'  >
            <Image  display={{base:'none',sm:'none',md:"none",lg:'block'}} src='https://i.ibb.co/q7XnW0y/Screenshot-2024-04-13-081734.png'/>
           <Image w={{base:"70%",sm:"70%",md:'50%'}} bg='RGB(246,245,242)' display={{base:'block',sm:'block',md:'block',lg:"none"}} src='https://i.ibb.co/Q62MYM4/Screenshot-2024-04-13-100704-removebg-preview.png'/>
           </Grid>
        </Grid>
        </>
    )
}