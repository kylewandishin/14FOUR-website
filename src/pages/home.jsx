import { Box, Grid, IconButton, OutlinedInput, Button } from '@mui/material';
import logo from "../assets/14.png"
import transp from '../assets/green.png'
import web from "../assets/web.png"
import phone from "../assets/phone.png"
const Home = () => {
    return (
    <Box className='container' width="100%" height="100%" backgroundColor="#2A2A2E">
        <Box justifyContent="space-between" width="100%" height="600px" display="flex" fontSize="30px" color="#ddd" sx={{background : "linear-gradient(240deg, #2e7c67 21%, #1e5245 93.4%);)"}}>
            <Box ml="10%" mt="9%" width="390px" fontSize="64px" lineHeight="50px">
                Software dev done right at
                <Box display="flex" mt="8px">
                <img src={transp} style={{marginLeft:"-3px"}} width="77px" height="77px"/>
                <Box fontSize="78px" mt="9px" ml="0px" color="#0f2922">14FOUR <Box color="#dbf5ee" ml="5px" mt="-42px">14FOUR</Box></Box>
                </Box>
                <Box fontSize="26px" mt="10px" lineHeight="22px">
                Get your website made for you with efficency and quality. Contact us today
                </Box>
            </Box>
            <Box mr="10%">
                <img src={web} width="300px"/>
                <Box mt="-200px" ml="-100px">
                <img src={phone} width="200px"/>
                </Box>
            </Box>
            
        </Box>
        
        <Box width="101%" overflow="hidden" sx={{mt:"-21%", ml:"-2px", display:"flex",transform: "scaleX(-1)"}}>
            <Box width="110%" sx={{rotate:"-1deg",zIndex:"0"}} height="320px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 320"><path fill="#2a2a2e" fill-opacity="1" d="M0,0L48,16C96,32,192,64,288,64C384,64,480,32,576,64C672,96,768,192,864,240C960,288,1056,288,1152,245.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>       
                </svg>
            </Box>
           
        </Box>
        <Box mt="-165px" width="480px" position="relative" fontSize="30px" color="#ccc" ml="57%">
            14FOUR - 101
            <Box fontSize="20px" mt="3px" textAlign="left">
                14FOUR Technology is a company that was started by two high school students
                with a passion for web development. Since then we have done a number of
                projects for all kinds of clients. inquire about a project today and 
                bring you company into the future.
            </Box>
        
        </Box>
    </Box>
    );
}
 
export default Home;