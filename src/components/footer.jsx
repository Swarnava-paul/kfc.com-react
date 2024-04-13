import {Grid,Text,Box} from "@chakra-ui/react"


export function Footer(){


    return(
        <>
        <Grid  bg='RGB(32, 33, 36)' placeItems='center'>
          <Firstsectiontext/>
          <Secondsection/>
        </Grid>
        </>
    )
}



const Firstsectiontext = ()=>{

    return (
        <>
        <Grid  h='auto' color='white' fontSize={{base:"7px",sm:'8px',md:'9px',lg:"12px"}} fontWeight='400' rowGap={12} mt={{base:"90px",sm:"50px",md:"80px"}} justifyContent='center'>
           <Box><Text>Calorie Statement</Text></Box>
           <Box w={{base:"100%",sm:'100%',md:"90%",lg:"100%"}}><Text>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request in-store and on kfc.com. Prices, participation, and product availability may vary.</Text></Box>
           <Box w={{base:"90%",sm:'90%',md:"80%",lg:"60%"}}><Text>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Starry are registered trademarks of PepsiCo, Inc.
Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</Text></Box>
           <Box><Text>CAPRI-SUN® and the Pouch Shape™ are licensed trademarks of the Capri Sun Group</Text></Box>
        </Grid>
        </>
    )
}

const Secondsection = ()=>{

    const text_style={
      fontWeight:'700',
      fontSize:'14px'
    }
    const child_grid_gap={
        rowGap:'8px'
    }
    return(
        <>
        <Grid p='30px' fontSize={12} mt={10} w='90%' templateColumns='repeat(7,19%)' color='white' placeItems='center'>
            <Grid sx={child_grid_gap}>
                <Text sx={text_style}>KFC Food</Text>
                <Grid sx={child_grid_gap} >
                    <Text>Menu</Text>
                    <Text>Full Nutrition Guide</Text>
                    <Text>Nutrition Calculator</Text>
                    <Text>Food Allergies & Sensitivities</Text>
                </Grid>
            </Grid>
            <Grid sx={child_grid_gap}>
                <Text sx={text_style}>Company</Text>
                <Grid sx={child_grid_gap}>
                    <Text>About KFC</Text>
                    <Text>How We Make Chicken</Text>
                    <Text>KFC Foundation</Text>
                    <Text>Company Responsibility</Text>
                </Grid>
            </Grid>
            <Grid sx={child_grid_gap}>
                <Text sx={text_style}>Careers</Text>
                <Grid sx={child_grid_gap}>
                    <Text>Restaurant Careers</Text>
                    <Text>Corporate Careers</Text>
                    <Text>Culture</Text>
                    <Text>Growth</Text>
                </Grid>
            </Grid>
            <Grid sx={child_grid_gap}>
                <Text sx={text_style}>Resources</Text>
                <Grid sx={child_grid_gap}>
                    <Text>FAQs</Text>
                    <Text>Contact Us</Text>
                    <Text>KFC App</Text>
                </Grid>
            </Grid>
            <Grid sx={child_grid_gap}>
                <Text sx={text_style}>Find a KFC</Text>
                <Grid>
                    <Text>Find A KFC</Text>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

