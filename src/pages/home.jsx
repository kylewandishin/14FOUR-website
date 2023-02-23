import { Box, Grid, IconButton, OutlinedInput, Button } from '@mui/material';
import logo from "../assets/14.png"

const Home = () => {
    return (
        <Box className='container' width="100%" height="100%" sx={{overflowY:"scroll !important", overflowX:"hidden"}} backgroundColor="#1F2A40">
        <Box className='topbar' zIndex="99999" position="absolute" backgroundColor="#1F2A40" width="100%" height="8.5%" pr="1rem" pt='0.75rem' pl='1rem' display="flex" overflow="hidden" boxShadow="0px 3px 7px rgba(0,0,0, 0.2)">
            <Box className='logo' display="flex"> 
                <img src={logo} width="50px" height="50px" ml="1rem"/>
                <Box mt="-4px"ml="1px" fontSize="44px" color="#d0d1d5">14FOUR</Box>
            </Box>
            <Box className='buttons' display="flex" ml="67%" mt="-18px" mr="1rem" mb='-4px'>
                <Box className='Signin'>
                    <IconButton sx={{borderRadius:"0px", height:"100%", pl:"10px",pr:"15px", color:"#e0e0e0", }}>Log in</IconButton>
                </Box>
                <Box className='GetStated'>
                <IconButton sx={{width:"8.5rem", borderRadius:"0px", height:"100%", p:"10px", backgroundColor:"#535ac8"}}>Get Started</IconButton>
                </Box>
            </Box>
        </Box>
        <Box className='body' height="91.3%" overflow="scorll !important">
            <Box zIndex="-1" width="100%" mt="66px" height="700px" sx={{background : "linear-gradient(240deg, rgba(195, 67, 129,0.9) 21%, rgba(90, 43, 186,0.9) 93.4%);)"}}>
                <Grid ml="12rem" container xs={12} gap='18rem' pt='25px' pb='25px'>
                    <Box mt="2rem" width="340px">
                        <Box fontWeight="500" fontSize="40px" id="title">
                           <Box lineHeight="40px" color="#222">
                            Web Development
                            </Box>
                            <Box color="#A73EF2" ml="-0.2rem"display="flex" mt="0.5rem" fontSize="60px"><img src={logo} height="80px" width="80px"/><Box ml="0.5rem" mt="0rem">14FOUR</Box></Box> <Box fontSize="60px" ml="5.6rem" mt="-5.27rem" color="#01aaff">14FOUR</Box>
                            <Box fontSize="16px" ml="1%" mt="10px" color="#111">
                                Get your website/app built for you.
                                <br/>
                                contact us today:
                            </Box>

                            <Box mt="30px" display="flex">
                                <Button variant="contained" sx={{ backgroundColor:"#222","&:hover": {
                                    backgroundColor:"#972EE2"
                                }, width:"95%",ml:"1%", mt:"-1rem", height:"50px"}}>Contact</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box mt="2rem">
                        
                    </Box>
                </Grid>
            </Box>
            <Box width="101%" overflow="hidden" sx={{mt:"-21%", ml:"-2px", display:"flex"}}>
                <Box width="110%" sx={{rotate:"-1deg",zIndex:"0"}} height="320px">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 320"><path fill="#1F2A40" fill-opacity="1" d="M0,0L48,16C96,32,192,64,288,64C384,64,480,32,576,64C672,96,768,192,864,240C960,288,1056,288,1152,245.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
                    
                    </svg>
                </Box>
            </Box>
            <Box className='main' mt="3%" height="100%" sx={{zIndex:"100"}} color="#ccc">
                <Box sx={{zIndex:"1"}} position="relative" fontSize="22px" mt="-15%" ml="10%">
                    14FOUR - 101
                </Box>
                <Box sx={{zIndex:"1"}} position="relative" fontSize="30px" mt="-0.1%" ml="10%">
                    Web Development done right
                </Box>
                <Box sx={{zIndex:"1", width:"380px"}} position="relative" fontSize="18px" mt="1%" ml="10%">
                    14FOUR Technology is a company started by high school students
                     with a passion for web development. Since the begining 14FOUR
                    has done a number of projects for a number of clients to make
                    sure users have an enjoyable and easy user experience.
                </Box>
            </Box>
            <Box height="100%">
                hi
            </Box>
        </Box>
    </Box>
    );
}
 
export default Home;