import { Box, Button, IconButton } from "@mui/material";
import logo from '../assets/14.png'
import { Link } from "react-router-dom";
const Topbar = () => {
    return ( 
        <Box width="100%" height="70px" position="relative" zIndex="999" borderBottom="0.5px solid rgba(100,100,100,0.9)" backgroundColor="#fcfcfc" display="flex" justifyContent="space-between">
            <Link to="/" style={{ textDecoration: 'none', color:"#222" }}>
            <Box ml="15px" height="100%" display="flex" alignItems="center" justifyContent="center">
                <img src={logo} width="62px" height="62px"/>
                <Box ml="0px" letterSpacing="-0.1rem" fontSize="58px">14FOUR</Box>
            </Box>
            </Link>
            <Box mr="15px" height="100%" display="flex" alignItems="center" justifyContent="center">
            <Link to="/contact" style={{ textDecoration: 'none',color:"#333", height:"100%",}}>
                <IconButton sx={{borderRadius:"0px", backgroundColor:"#c2c2c2", padding:"21.2px", "&:hover":{backgroundColor:"#dbf5ee"}}}>
                        Contact
                </IconButton>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none',color:"#dadada",height:"100%" }}>
                <IconButton sx={{borderRadius:"0px",color:"#dadada", backgroundColor:"#0f2922",padding:"21.2px", "&:hover":{backgroundColor:"#2e7c67"}}}>
                    
                        About
                    
                </IconButton>
                </Link>
            </Box>
        </Box>
     );
}
 
export default Topbar;