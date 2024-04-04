
import {Text,Flex,Box,Button} from '@chakra-ui/react'


export const Navbar = ()=>{
     

return(
<Flex  h='20vh' align='center' justifyContent='space-between' pl='5' pr='5'>
<Text fontSize={16} fontWeight='600'>Kentucky Fried Chicken</Text>
<Box fontSize={15} fontWeight='700' color='black' alignItems='center' justifyContent='space-evenly' h='80%' display={{base:'none',sm:'none',md:'none',lg:'flex'}} w='50%'>
 <Text>Menu</Text>
 <Text>Rewards</Text>
 <Text>Careers</Text>
 <Text>Merch</Text>
 <Text>Find a KFC</Text>
</Box>
<Flex fontSize={26} w={{base:'35%',sm:'25%',md:'25%',lg:'13%'}} h='80%' justify='space-evenly' align='center'>
<i className="fa-solid fa-magnifying-glass"></i>
<i className="fa-solid fa-user"></i>
<i  className="fa-solid fa-bag-shopping"></i>
</Flex>

<Button borderRadius={25} w='14%' colorScheme='red' display={{base:'none',sm:'none', md:'none',lg:'flex'}}>Start order</Button>
</Flex>
  
)
}