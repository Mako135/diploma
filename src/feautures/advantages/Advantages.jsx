import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import caseH from "../../assets/case.png";
import list from "../../assets/list.png";
import user from "../../assets/user.png";

const Advantages = () => {
  return (
    <>
      <VStack m={150}>
        <Heading width={200} textAlign={"center"}>ABOUT US</Heading>
        <Text
          textAlign={"center"}
          fontSize={20}
          marginBottom={8}
        >
          Quality Healthcare Accessible to Everyone.
        </Text>
        <Box
          display={"flex"}
          flexDir={{
            base: "column",
            md: "row"
          }}
          justifyContent={"space-between"}
          gap={10}
        >
          <VStack
            m={"auto"}
            backgroundColor={"#011954"}
            width={{
              base: "350px",
              xl: "400px"
            }}
            height={360}
            justifyContent={"center"}
          >
            <Image
              src={caseH}
              alt="logo"
              width={{
                base: "80px",
                xl: "150px"
              }}
              objectFit={"cover"}
            />
            <Text
              fontSize={{
                base: "24px",
                xl: "30px"
              }}
              textAlign={"center"}
              color={"white"}
              mt={18}
            >
              24 Hour Emergency
            </Text>
            <Text
              fontSize={{
                base: "12px",
                md: "20px"
              }}
              textAlign={"center"}
              color={"white"}
            >
              Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut
              labore.
            </Text>
          </VStack>
          <VStack
            m={"auto"}
            backgroundColor={"#011954"}
            width={{
              base: "350px",
              xl: "400px"
            }}
            height={360}
            justifyContent={"center"}
          >
            <Image
              src={list}
              alt="logo"
              width={{
                base: "80px",
                xl: "150px"
              }}
              objectFit={"cover"}
            />
            <Text
              fontSize={{
                base: "24px",
                xl: "30px"
              }}
              textAlign={"center"}
              color={"white"}
              mt={18}
            >
              Personolyzed Care
            </Text>
            <Text
              fontSize={{
                base: "12px",
                md: "20px"
              }}
              textAlign={"center"}
              color={"white"}
            >
              Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut
              labore.
            </Text>
          </VStack>
          <VStack
            m={"auto"}
            backgroundColor={"#011954"}
            width={{
              base: "350px",
              xl: "400px"
            }}
            height={360}
            justifyContent={"center"}
          >
            <Image
              src={user}
              alt="logo"
              width={{
                base: "80px",
                xl: "150px"
              }}
              objectFit={"cover"}
            />
            <Text
              fontSize={{
                base: "24px",
                xl: "30px"
              }}
              textAlign={"center"}
              color={"white"}
              mt={18}
            >
              Professional Doctors
            </Text>
            <Text
              fontSize={{
                base: "12px",
                md: "20px"
              }}
              textAlign={"center"}
              color={"white"}
            >
              Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut
              labore.
            </Text>
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default Advantages;
