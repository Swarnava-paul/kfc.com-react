
import { Box ,Grid,Text,Image ,Flex , Button} from "@chakra-ui/react";

let categories_array=[
    {
        img:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=41.47',
        id:1,
        text:'PERI PERI CHICKEN'
    },
    {
        img:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT224.jpg?ver=41.47',
        id:2,
        text:'VALUE SNACKERS'
    },
    {
        img:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=41.47',
        id:3,
        text:'CHICKEN ROLLS'
    },
    {
        img:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=41.47',
        id:4,
        text:'CHICKEN BUCKETS'
    },
    {
        img:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=41.47',
        id:5,
        text:'BIRIYANI BUCKETS'
    },
    {
        img:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=41.47',
        id:6,
        text:'BOX MEALS'
    },
    {
        img:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=41.47',
        id:7,
        text:'BURGERS'
    }
]
export const Homapage = ()=>{

    return(
        <>
        <Grid placeItems='center' mt='12%' templateRows='10% 90%'>

            <Flex  align='center' pl='8' w={{base:'100%',sm:'100%',md:'90%',lg:'80%'}} gap={{base:'4px',sm:'6px',md:'10px',lg:'24px'}}>
                <Text fontSize={{base:'15px',sm:'19px',md:"24px",lg:'30px'}} fontWeight='700' color='RGB(32, 33, 36)'>BROWSE CATEGORIES</Text>   
                <Box w={{base:'30%',sm:'43%',md:'50%',lg:'55%'}} border='1px' borderColor='grey'></Box>
            </Flex>{/**end of Flex that contains Text and one box the box is use for mimeake a vertical row  */}


            <Grid mt='9vh' h='120vh' templateColumns={{base:'repeat(2,40%)',sm:'repeat(2,41%)',md:'repeat(3,30%)',lg:'repeat(4,18%)'}} templateRows={{base:'repeat(4,20%)',sm:'repeat(2,29%)',md:'repeat(2,25%)',lg:'repeat(2,34%)'}} justifyContent='center' columnGap='6' rowGap='7'>
                
              {
                categories_array.map(i=>(

                <Grid key={i.id} bg='RGB(248, 247, 245)' placeItems='center'>
                    <Image  h='100%' src={i.img}/>
                    <Button fontWeight='800' fontSize={{base:'10px',sm:'15px',md:'15px',lg:'16px'}} bg='RGB(248, 247, 245)' h='100%' w='100%' borderBottomLeftRadius='none' borderBottomRightRadius='none' gap={3}>{i.text}</Button>
                </Grid>

                ))
              } {/** map over categories_array array and create child GRid */}
               
                <Grid bg='RGB(248, 247, 245)' templateRows='80% 20%' placeItems='center'>
                <Image  w='80%' src='https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg'/>
                 <Button fontSize={{base:'10px',sm:'15px',md:'15px',lg:'16px'}} bg='RGB(248, 247, 245)' w='100%' h='100%' borderBottomLeftRadius='none' borderBottomRightRadius='none' gap={3}>View All Menu<i  className="fa-solid fa-arrow-right-long"></i></Button>
                </Grid>{/** view all grid */}

            </Grid>{/**end of 2nd child of Main Grid this grid contains images and one grid */}


        </Grid>{/** Main Grid that contains Flex another is a Grid that cotains images and one another grid */}
        </>
    )
}