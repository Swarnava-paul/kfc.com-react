import { Grid,Text,Image } from "@chakra-ui/react"

export const Second_section_of_footer= ()=>{

    const text_style={
      fontWeight:'700',
      fontSize:'14px'
    }
    const child_grid_gap={
        rowGap:'8px'
    }

    
    return(
        <>
        <Grid margin='auto' display={['none','none','none','grid']} p='40px' rowGap={['36px','35px','33px','0px']} columnGap={['52px','59px','63px','30px']} justifyContent={['center','center','center','space-evenly']}  fontSize={12} mt={10} w='90%' templateColumns={['repeat(2,33%)','repeat(2,36%)','repeat(3,22%)','repeat(7,15%)']} color='white' >
            <Grid  >
                <Image w='80%' src='https://i.ibb.co/yqvGkFc/Screenshot-345.png'/>
            </Grid>
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
