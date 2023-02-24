import { Box, TextField, Button } from "@mui/material";
import contact from "../assets/contact2.png"
import { useRef } from "react";
import emailjs from '@emailjs/browser'
import Loader from "react-loaders"

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          // .sendForm(process.env.REACT_APP_SERVICEID_API_KEY,process.env.REACT_APP_TEMPLATEID_API_KEY,form.current, process.env.REACT_APP_PUBLICKEY_API_KEY)
          .sendForm("service_6cdqp6h","template_da1o6jk",form.current,"nWIU9LJqm7xyVVflT")
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return (
        <>
        <Box width="100%" height="100%" minHeight="700px" overflow="hidden">
            <Box position="relative" zIndex="99999" mt="6rem" ml="9rem" width="650px">
                <Box fontSize="60px" color="#e3f2ee">Contact us today:</Box>
                <form ref={form} onSubmit={sendEmail}>
                    <TextField id="filled-basic" name="to_name" style={{width:"43%",backgroundColor:"#e3f2ee"}} label="Name" variant="filled" />
                    <TextField id="filled-basic" name="from_name" style={{marginLeft:"1rem",width:"54%",backgroundColor:"#e3f2ee"}} label="Your Email" variant="filled" />
                    <Box height={10}/>
                    <TextField id="filled-basic" name="subject" style={{width:"100%",backgroundColor:"#e3f2ee"}} label="Subject" variant="filled" />
                    <Box height={10}/>
                    <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        variant="filled"
                        name="message"
                        style={{width:"100%",backgroundColor:"#e3f2ee"}}
                        />
                    <Box height={10}/>
                    <Button type="submit" value="SEND" style={{width:"100.3%",marginLeft:"-0.10rem",paddingTop:"8px",paddingBottom:"8px", backgroundColor:"#2e7c67"}} variant="contained">Send</Button>
                </form>
                
            </Box>
            <Box position="absolute" left="0%" top="60px" zIndex="0">
                <img src={contact} width="100%" style={{minWidth:1080}}/>
            </Box>
            
        </Box>
        <Loader type="pacman" style={{zIndex:"999999999999999"}} />
        </>
    );
}
 
export default Contact;