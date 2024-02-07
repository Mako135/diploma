import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const CardDoctor = () => {
  return (
    <Box display={"flex"} gap={20} align={"center"} w={1200}>
      <Card
        maxW="sm"
        transition={"0.4s"}
        _hover={{
          boxShadow: "lg",
          transition: "0.4s",
        }}
      >
        <CardBody>
          <Image
            src="https://i.pinimg.com/736x/6d/b4/4f/6db44f206bb332cd749c5e92ed9bfa91.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Crew Milendos</Heading>
            <Text>Jr. Doctor</Text>
          </Stack>
        </CardBody>
      </Card>

      <Card
        maxW="sm"
        transition={"0.4s"}
        _hover={{
          boxShadow: "lg",
          transition: "0.4s",
        }}
      >
        <CardBody>
          <Image
            src="https://i.pinimg.com/736x/6d/b4/4f/6db44f206bb332cd749c5e92ed9bfa91.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Crew Milendos</Heading>
            <Text>Jr. Doctor</Text>
          </Stack>
        </CardBody>
      </Card>

      <Card
        maxW="sm"
        transition={"0.4s"}
        _hover={{
          boxShadow: "lg",
          transition: "0.4s",
        }}
      >
        <CardBody>
          <Image
            src="https://i.pinimg.com/736x/6d/b4/4f/6db44f206bb332cd749c5e92ed9bfa91.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Crew Milendos</Heading>
            <Text>Jr. Doctor</Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CardDoctor;
