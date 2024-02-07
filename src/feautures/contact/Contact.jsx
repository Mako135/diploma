import { Box, HStack, Heading, Image, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import gps from "../../assets/gps.png";

const Contact = () => {
  return (
    <>
      <HStack justifyContent={"center"} spacing={30}>
        <VStack width={500} spacing={5} alignItems={"start"}>
          <Heading
            fontSize={40}
            
          >Have Questions?</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Text>

          <Box display={"flex"} gap={4}>
            <Image src={mail}/>
            <Text>kuanyshbek135@gmail.com</Text>
          </Box>
          <Box display={"flex"} gap={4}>
            <Image src={phone}/>
            <Text>kuanyshbek135@gmail.com</Text>
          </Box>
          <Box display={"flex"} gap={4}>
            <Image src={gps}/>
            <Text>kuanyshbek135@gmail.com</Text>
          </Box>
        </VStack>

        <VStack width={400} spacing={10}>
          <Input variant="flushed" placeholder="Flushed" />
          <Input variant="flushed" placeholder="Flushed" />

          <Textarea resize={"none"} size="sm" placeholder="Message" />
        </VStack>
      </HStack>
    </>
  );
};

export default Contact;
