
import { Box ,Grid,Text,Image ,Flex , Divider} from "@chakra-ui/react";

export const Homapage = ()=>{

    return(
        <>
        <Grid placeItems='center' mt='12%' border='1px' borderColor='red' templateRows='10% 90%' h='150vh'>

            <Flex  align='center' pl='8' w='80%'>
                <Text fontSize={30} fontWeight='700' color='RGB(32, 33, 36)'>BROWSE CATEGORIES</Text>   
                <Box w='60%' border='1px' borderColor='grey'></Box>
            </Flex>

            <Grid></Grid>

        </Grid>
        </>
    )
}