import { Box, Image, Text } from "@chakra-ui/react";
import back2 from "../../assets/bg2.png";
import whiteLogo from "../../assets/whiteLogo.png";


const SecondBanner = () => {
  return (
    <>
      <Box position={"relative"}>
        <Box position={"absolute"} width={"60rem"} top={"20%"} left={"10vw"}>
          <Image
            src={whiteLogo}
            alt="logo"
            width={{
              base: "160px",
              xl: "140px"
            }}
          />
          <Text
            fontSize={"5rem"}
            textAlign={"left"}
            color={"white"}
            mt={10}
            display={{
              base: "none",
              md: "block"
            }}
          >
            New Clinic
          </Text>
          <Text
            fontSize={24}
            textAlign={"left"}
            color={"#fff"}
            display={{
              base: "none",
              md: "block"
            }}
          >
            Lorem insum dolor amet consec tetur adiriscin elit eiusmod temsor
            incididunt dolore masna alirua enim minim veniam nostrud exerci
            tation ullamco aliruis commodo conseruat irure dolor renrehen derit
            volustate.
          </Text>
        </Box>
        <Image src={back2} alt="logo" width={"100%"} objectFit={"cover"} />
      </Box>
    </>
  );
}

export default SecondBanner