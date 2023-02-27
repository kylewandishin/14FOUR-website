import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import background from "../assets/404.png"
const PageNotFound = () => {
    return ( 
        <Box width="100%" maxHeight={720} minHeight={720} overflow="hidden" height="100%" backgroundColor="#ddd" display="flex" justifyContent="center" alignItems="center">
            <Box width="90%" height="90%" minHeight={720-72}>
                <Box>
                    <Box position="absolute" zIndex="1" top="20%" width="100%">
                        <Box fontSize="64px" style={{marginLeft:"3%", marginTop:"2%"}}>Page Not Found</Box>
                        <Box fontSize="30px" style={{marginLeft:"3%"}}>Oh No, Not a 404! Let's get you back Home</Box>
                        <Box position="absolute" left="33%" top="160%">
                            <Link to="/" style={{textDecoration:"none"}}>
                                <Button variant="outlined" style={{borderColor:"#222", borderWidth:"2px", borderRadius:"0px",width:"200px",color:"#222", height:"140px"}}>Home!</Button>
                            </Link>
                        </Box>
                        <Box position="absolute" left="63%" top="210%">
                            <Link to="/" style={{textDecoration:"none"}}>
                                <Button variant="outlined" style={{borderColor:"#222", borderWidth:"2px", borderRadius:"0px",width:"200px",color:"#222", height:"140px"}}>Home!</Button>
                            </Link>
                        </Box>
                        <Box position="absolute" left="5%" top="280%">
                            <Link to="/" style={{textDecoration:"none"}}>
                                <Button variant="outlined" style={{borderColor:"#222", borderWidth:"2px", borderRadius:"0px",width:"200px",color:"#222", height:"140px"}}>Home!</Button>
                            </Link>
                        </Box>
                        <Box position="absolute" left="75%" top="60%">
                            <Link to="/" style={{textDecoration:"none"}}>
                                <Button variant="outlined" style={{borderColor:"#222", borderWidth:"2px", borderRadius:"0px",width:"200px",color:"#222", height:"140px"}}>Home!</Button>
                            </Link>
                        </Box>
                    </Box>
                    {/* <Box width="1200px" style={{position:"absolute", top:"-38%", left:"-18%"}}>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#2E7C67" d="M43.9,-56.9C53.1,-53.7,54.1,-35.8,60.3,-19C66.6,-2.2,78.1,13.4,77.8,28.6C77.5,43.8,65.4,58.6,50.4,62.4C35.5,66.3,17.8,59.2,7.9,48.3C-1.9,37.4,-3.9,22.7,-19.2,19C-34.5,15.3,-63.3,22.6,-72.7,17.9C-82.1,13.2,-72.1,-3.5,-61.9,-15.6C-51.8,-27.8,-41.5,-35.4,-31.2,-38.1C-20.8,-40.9,-10.4,-38.9,3.5,-43.6C17.3,-48.4,34.7,-60,43.9,-56.9Z" transform="translate(100 100)" />    
                        </svg>
                    </Box>
                    <Box width="1200px" style={{position:"absolute", right:"-33%"}}>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#2E7C67" d="M28.2,-46.3C28.9,-32.9,16.7,-16.9,10.7,-8.2C4.7,0.5,4.9,1.7,5.5,5.5C6.1,9.2,7,15.5,5.3,17.3C3.6,19,-0.6,16.2,-10.7,17.7C-20.8,19.1,-36.8,24.8,-42.7,21.3C-48.6,17.9,-44.6,5.4,-37.2,-1.4C-29.9,-8.2,-19.2,-9.2,-12.5,-21.5C-5.7,-33.8,-2.9,-57.4,5.4,-63.9C13.7,-70.3,27.4,-59.7,28.2,-46.3Z" transform="translate(100 100)" />
                        </svg>
                    </Box>
                    <Box width="1200px" style={{position:"absolute", right:"-22%", top:"-90%", transform: "scale(-1)"}}>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#2E7C67" d="M28.2,-46.3C28.9,-32.9,16.7,-16.9,10.7,-8.2C4.7,0.5,4.9,1.7,5.5,5.5C6.1,9.2,7,15.5,5.3,17.3C3.6,19,-0.6,16.2,-10.7,17.7C-20.8,19.1,-36.8,24.8,-42.7,21.3C-48.6,17.9,-44.6,5.4,-37.2,-1.4C-29.9,-8.2,-19.2,-9.2,-12.5,-21.5C-5.7,-33.8,-2.9,-57.4,5.4,-63.9C13.7,-70.3,27.4,-59.7,28.2,-46.3Z" transform="translate(100 100)" />
                        </svg>
                    </Box> */}                
                </Box>            
            </Box>
            <img src={background} width="100%" style={{marginLeft:"-50px", minWidth:"1450px"}}/>
        </Box>
     );
}

export default PageNotFound;