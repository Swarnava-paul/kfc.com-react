import { Image ,Box,Text} from "@chakra-ui/react";
import { useEffect ,useState} from "react";

export const Imagemain =() =>{

const[count,setCount]=useState(0)
const[imagedisplay,setDisplayimage]=useState('none')

    const image_array=[
      'https://images.ctfassets.net/9tka4b3550oc/1U79lSUVx06jwhi9jZe6jd/6a7c7ba9ce826542844fcf40bd8fbe7f/1349_Nuggets_Header_Desktop.jpg?q=75&w=1680',
      'https://images.ctfassets.net/9tka4b3550oc/27hJTtMqK9WJx3KQ6uizc3/f912e08a2f87666f22bf3723afb874ad/929_KFC_Taste_Header_Desktop.jpg?q=75&w=1680',
      'https://images.ctfassets.net/9tka4b3550oc/2eEHJ9XjSFCur9slyamug/0e5f70026eff1474c0082cd39a86ee2a/000931_AppliePie_Header_Desktop.jpg?q=75&w=1680',
      'https://images.ctfassets.net/9tka4b3550oc/5wysqLeeVhBsSa7VEsKRfF/51df521bde72070b6b0f9f1dd09419dd/000931_5flavors_Header_Desktop.jpg?q=75&w=1680',

    ]

    useEffect(() => {
        setTimeout(() => {
          displ()
        }, 2500)
      }, []);
      
      let timeid;

      function displ (){
        setDisplayimage('block')
            
            if(timeid!=undefined){
                clearInterval(timeid)
            }
            timeid=setInterval(() => {
             setCount(prevCount => (prevCount === image_array.length - 1 ? 0 : prevCount + 1));
            }, 3000);
        
      }

    return(
        <>
        <Box  w='100%'>

        <Image w='100%' h={{base:'19vh',sm:'23vh',md:'34vh',lg:'65vh'}} src={image_array[count]}/>
        <Box pl='8' pr='8' bg='RGB(32, 33, 36)'  h={{base:'5vh',sm:'7vh',md:'8vh',lg:'10vh'}} display='flex' justifyContent='center' alignItems='center'>
        <Text color='white' fontSize={{base:'4',sm:'7',md:'8',lg:'12'}}>Offer only available on kfc.com and the KFC app for participating locations.  Not available in restaurant or on third party ordering platforms. Tax, tips and fees extra. Allow extra cook time for large orders.</Text>
        </Box>

        </Box>
        </>
    )
}