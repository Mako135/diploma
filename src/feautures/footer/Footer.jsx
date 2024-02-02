import { Box, Container, Image, Text } from "@chakra-ui/react";
import { GrInstagram } from "react-icons/gr";
import { BiLogoTelegram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={2}
        minWidth={{
          md: "700px",
          lg: "900px",
          xl: "1100px",
        }}
      >
        <Image src={logo} height="60px"/>
        <Text>Copyright © ANDYZ CORP All Right Reserved</Text>
        <Box 
        display={"flex"}
        justifyContent={"space-between"}
        width={{
            base: "100px",
            md: "120px",
            lg: "140px",
            xl: "160px",
        }}
        >
          <Link><BiLogoTelegram fontSize={25}/></Link>
          <Link><GrInstagram fontSize={25}/></Link>
          <Link><FaWhatsapp fontSize={25}/></Link>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
