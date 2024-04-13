import {Text,Image,Grid,Button,Box} from "@chakra-ui/react";


export function Lastsection(){

    return (
        <>
        <Grid w='100%' h='auto' bg='RGB(248, 247, 245)' templateColumns='60% 40%'>

            <Grid placeItems='center'>
                 <Box w='80%'><Text fontSize={54} fontWeight='700' color='RGB(32, 33, 36)'>UNLOCK MORE FINGER LICKIN' GOOD BENEFITS</Text>
                 <Box w='60%'><Text fontSize={14} fontWeight='400' color='RGB(73, 73, 73)'>Create an account to get access to great deals and faster checkout.</Text></Box>
                 <Button w='30%' mt={6} bg='RGB(32, 33, 36)' color='white' _hover={{bg:'RGB(32, 33, 36)'}}>Sign me up!</Button>
                 </Box>               
           </Grid>
           
            <Image src='https://i.ibb.co/q7XnW0y/Screenshot-2024-04-13-081734.png'/>

        </Grid>
        </>
    )
}