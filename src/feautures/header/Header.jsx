import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import email from "../../assets/email.png";
import location from "../../assets/location.png";

const Header = () => {
  return (
    <>
      <Box margin={6}>
        <HStack justifyContent={"space-between"}>
          <HStack>
            <Image src={email} h={50} alt="logo" />
            <VStack alignItems={"start"} height="40px" gap={0}>
              <Text fontWeight={"bold"}>Email</Text>
              <Text fontSize={20}>andyz@gmail.com</Text>
            </VStack>
          </HStack>
          <Text fontSize={48} fontWeight={"bold"}>ANDYZ</Text>
          <HStack>
            <Image src={location} h={50} alt="logo" />
            <VStack alignItems={"start"} height="40px" gap={0}>
              <Text fontWeight={"bold"}>Address</Text>
              <Text fontSize={20}>Almaty. Manas st. 31</Text>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
