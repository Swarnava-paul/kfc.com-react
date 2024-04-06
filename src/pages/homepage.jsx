
import { Box ,Grid,Text,Image ,Flex , Button} from "@chakra-ui/react";

export const Homapage = ()=>{

    return(
        <>
        <Grid placeItems='center' mt='12%' templateRows='10% 90%'>

            <Flex  align='center' pl='8' w='80%' gap={4}>
                <Text fontSize={30} fontWeight='700' color='RGB(32, 33, 36)'>BROWSE CATEGORIES</Text>   
                <Box w='60%' border='1px' borderColor='grey'></Box>
            </Flex>{/**end of Flex that contains Text and one box the box is use for mimeake a vertical row  */}


            <Grid mt='9vh' h='120vh' templateColumns='repeat(4,18%)' templateRows='repeat(2,30%)' justifyContent='center' columnGap='6' rowGap='7'>
                 <Image h='100%' src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=41.47'/>
                 <Image h='100%' src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT224.jpg?ver=41.47'/>
                 <Image h='100%' src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=41.47'/>
                 <Image h='100%' src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=41.47'/>
                 <Image h='100%' src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=41.47'/>
                 <Image h='100%' src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=41.47'/>
                 <Image h='100%' src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=41.47'/>

                <Grid bg='RGB(248, 247, 245)' templateColumns='repeat(1,100%)' placeItems='center' rowGap='5'>
                    <Image w='70%' h='100%' src='https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg'/>
                    <Button bg='RGB(248, 247, 245)' h='100%' w='100%' borderBottomLeftRadius='none' borderBottomRightRadius='none' gap={3}>View All <i  className="fa-solid fa-arrow-right-long"></i></Button>
                </Grid>

            </Grid>{/**end of 2nd child of Main Grid this grid contains images and one grid */}


        </Grid>{/** Main Grid that contains Flex another is a Grid that cotains images and one another grid */}
        </>
    )
}