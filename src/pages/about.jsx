import { Box } from "@mui/material";
import Loader from "react-loaders";
import about from "../assets/about2.png"
const About = () => {
    return ( 
        <>
        <Box width="100%" overflow="hidden" height="720px"sx={{background : "linear-gradient(240deg, #2e7c67 21%, #1e5245 93.4%);)"}}>
            <Box zIndex="99" fontSize="18px" position="relative" ml="22rem" mt="3rem">
                <Box fontSize="80px" ml="2rem" color="#dbf5ee" style={{animation: "fadeInUp 1s 1s", "animation-fill-mode": "forwards", opacity: 0, clear: "both"}}>
                About
                </Box>
                <Box width="400px" color="#dbf5ee" style={{animation: "fadeInUp 1.2s 1.2s", "animation-fill-mode": "forwards", opacity: 0, clear: "both"}}>
                    14FOUR Tech is a web/app development company that was started by 
                    two high school students with a passion for web development. 
                </Box>
                <Box width="400px" ml="8rem" mt="1rem" color="#dbf5ee" style={{animation: "fadeInUp 1.4s 1.4s", "animation-fill-mode": "forwards", opacity: 0, clear: "both"}}>
                    We made it our mission to bring your company to the new age with a fully reactive and easy to use website or app for an affordable price.
                </Box>
                <Box width="400px" ml="4rem" mt="1rem" color="#dbf5ee"style={{animation: "fadeInUp 1.2s 1.2s", "animation-fill-mode": "forwards", opacity: 0, clear: "both"}}>
                    At 14FOUR we use the latest technologies and libraries to give your website cutting edge and incredible features like animations and unique graphics.
                </Box>
                <Box width="400px" ml="20rem" mt="-0.3rem" display="flex" color="#dbf5ee"style={{animation: "fadeInUp 1.3s 1.3s", "animation-fill-mode": "forwards", opacity: 0, clear: "both"}}>
                    <span>
                    Contact us at <a style={{marginLeft:"2px", marginRight:"5px", color:"#70d8bd"}} href="mailto: support@14fourtech.com?subject=Subject%20Line%20Text%20">support@14fourtech.com</a>
                    to inquire about a website or app today. Let's bring your business to the future.
                    </span>
                </Box>
            </Box>
            <img src={about} width="100%" style={{top:68,zIndex:"9",minWidth:"1080px", left:0, position:"absolute"}}/>
        </Box>
        <Loader type="pacman" style={{zIndex:"999999999999999"}} />
        </>
     );
}
 
export default About;