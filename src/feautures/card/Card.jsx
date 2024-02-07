import { Box, Image, Text } from "@chakra-ui/react";
import feauture1 from "../../assets/feauture_1.png";
import feauture2 from "../../assets/feauture_2.png";
import feauture3 from "../../assets/feauture_3.png";

const Card = () => {
  return (
    <>
      <Box display={"flex"} gap={20} w={1240} mt={20}>
        <Box
          background={"#011954"}
          width={400}
          height={350}
          align="center"
          color={"white"}
        >
          <Image src={feauture1} w={100} pt={10} />
          <Text fontSize={32} mt={5}>24 Hour Emergency</Text>
          <Text mt={4}>Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.</Text>
        </Box>
        <Box
          background={"#011954"}
          width={400}
          height={350}
          align="center"
          color={"white"}
        >
          <Image src={feauture2} w={100} pt={10} />
          <Text fontSize={32} mt={5}>24 Hour Emergency</Text>
          <Text mt={4}>Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.</Text>
        </Box>
        <Box
          background={"#011954"}
          width={400}
          height={350}
          align="center"
          color={"white"}
        >
          <Image src={feauture3} w={100} pt={10} />
          <Text fontSize={32} mt={5}>24 Hour Emergency</Text>
          <Text mt={4}>Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.</Text>
        </Box>
      </Box>
    </>
  );
};

export default Card;
