import {
  Box,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  VStack
} from "@chakra-ui/react";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";

const Contact = () => {
  return (
    <>
      <VStack m={"100px auto"}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "24px"
          }}
        >
          CONTACT WITH US
        </h2>
        <Box
          display={"flex"}
          flexDir={{
            base: "column",
            md: "row"
          }}
          width={{
            base: "100%",
            xl: "1000px",
          }}
          m={"auto"}
          justifyContent={"space-between"}
          mt={20}
          gap={"30px"}
        >
          <VStack gap={20} alignItems={"start"}>
            <Heading>Have Questions?</Heading>

            <VStack alignItems={"start"} gap={10}>
              <HStack>
                <Image src={phone} alt="logo" />
                <Text fontSize={24}>+7 777 777 77 77</Text>
              </HStack>
              <HStack>
                <Image src={email} alt="logo" h={30} />
                <Text fontSize={24}>andyz@gmail.com</Text>
              </HStack>
              <HStack>
                <Image src={location} alt="logo" h={30} />
                <Text fontSize={24}>Almaty. Manas st. 31</Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignItems={"start"} w={{
            base: "350px",
            xl: "450px",
            "2xl": "600px"
          }}>
            <Box mb={"2em"} display={"flex"} gap={{
              base: 10,
            }} flexDir={{
              base: "column",
              md: "row"
            }}>
              <Input
                type="text"
                variant="flushed"
                placeholder="Name"
                fontSize={24}
              />
              <Input
                type="phone"
                variant="flushed"
                placeholder="Phone Number"
                fontSize={24}
              />
            </Box>
            <Text fontSize={24}>Message</Text>
            <Textarea h={200} resize={"none"} fontSize={20} />
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default Contact;
