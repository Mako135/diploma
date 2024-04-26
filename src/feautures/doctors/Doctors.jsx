import { Box, Card, CardBody, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";


const Doctors = () => {
  return (
    <>
      <VStack m={"150px 0"}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "24px"
          }}
        >
          OUR DOCTORS
        </h2>

        <Box
          display={"flex"}
          flexDir={{
            base: "column",
            md: "row"
          }}
          mt={20}
          gap={20}
        >
          <Card
            maxW="350"
            m={"auto"}
            transition={".3s"}
            _hover={{
              transition: " 0.3s ",
              boxShadow: "xl",
              transform: "scale(1.001)"
            }}
          >
            <CardBody>
              <Image
                src="https://i.pinimg.com/originals/37/5a/ec/375aec7e73f2699fbd0636b52a5694a1.jpg"
                alt="Green double couch with wooden legs"
                width={380}
                height={450}
                objectFit={"cover"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">John Doe</Heading>
                <Text>Our first Doctor</Text>
              </Stack>
            </CardBody>
          </Card>

          <Card
            transition={"all 0.3s"}
            maxW="350"
            m={"auto"}
            _hover={{
              transition: " 0.3s ",
              boxShadow: "xl",
              transform: "scale(1.001)"
            }}
          >
            <CardBody>
              <Image
                src="https://i.pinimg.com/originals/37/5a/ec/375aec7e73f2699fbd0636b52a5694a1.jpg"
                alt="Green double couch with wooden legs"
                width={380}
                height={450}
                objectFit={"cover"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">John Doe</Heading>
                <Text>Our first Doctor</Text>
              </Stack>
            </CardBody>
          </Card>

          <Card
            maxW="350"
            m={"auto"}
            transition={"0.3s"}
            _hover={{
              transition: " 0.3s ",
              boxShadow: "xl",
              transform: "scale(1.001)"
            }}
          >
            <CardBody>
              <Image
                src="https://i.pinimg.com/originals/37/5a/ec/375aec7e73f2699fbd0636b52a5694a1.jpg"
                alt="Green double couch with wooden legs"
                width={380}
                height={450}
                objectFit={"cover"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">John Doe</Heading>
                <Text>Our first Doctor</Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </VStack>
    </>
  );
}

export default Doctors