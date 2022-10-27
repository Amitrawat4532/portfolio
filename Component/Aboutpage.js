import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";

export default function SplitWithImage() {
  return (
    <Box bgColor="black">
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} margin="auto">
            <Text
              textTransform={"uppercase"}
              color={"white"}
              fontWeight={600}
              fontSize="20px"
              bg="black"
              p={2}
              alignSelf={"center"}
              rounded={"md"}
            >
              Personal Details
            </Text>
            <Flex
              flex="1"
              flexDirection="column"
              gap="5%"
              justifyContent="center"
              alignItems="Center"
              width="100%"
              margin="auto"
            >
              <Flex justifyContent="start" width="100%" alignItems="center">
                <Text
                  color="white"
                  fontSize={["17px", "17px", "18px", "20px"]}
                  minWidth="120px"
                >
                  Name :
                </Text>
                <Text
                  color="white"
                  textAlign="start"
                  fontSize={["15px", "15px", "15px", "17px"]}
                >
                  Suchit Singh Rawat
                </Text>
              </Flex>

              <Flex justifyContent="start" width="100%" alignItems="center">
                <Text
                  color="white"
                  fontSize={["17px", "17px", "18px", "20px"]}
                  minWidth="150px"
                >
                  Date of birth :
                </Text>
                <Text
                  color="white"
                  textAlign="start"
                  fontSize={["15px", "15px", "15px", "17px"]}
                >
                  June 3 2001
                </Text>
              </Flex>

              <Flex justifyContent="start" width="100%" alignItems="center">
                <Text
                  color="white"
                  fontSize={["17px", "17px", "18px", "20px"]}
                  minWidth="120px"
                >
                  Address :
                </Text>
                <Text
                  color="white"
                  textAlign="start"
                  fontSize={["15px", "15px", "15px", "17px"]}
                >
                  Dehradun (Uttarakhand)
                </Text>
              </Flex>

              <Flex justifyContent="start" width="100%" alignItems="center">
                <Text
                  color="white"
                  fontSize={["17px", "17px", "18px", "20px"]}
                  minWidth="120px"
                >
                  Email I'd :
                </Text>
                <Text
                  color="white"
                  textAlign="start"
                  fontSize={["15px", "15px", "15px", "17px"]}
                >
                  amitrawat4532@gmail.com
                </Text>
              </Flex>

              <Flex justifyContent="start" width="100%" alignItems="center">
                <Text
                  color="white"
                  fontSize={["17px", "17px", "18px", "20px"]}
                  minWidth="120px"
                >
                  Phone no. :
                </Text>
                <Text
                  color="white"
                  textAlign="start"
                  fontSize={["15px", "15px", "15px", "17px"]}
                >
                  7351225034
                </Text>
              </Flex>

              <Flex justifyContent="center" width="60%" pt="30px">
                <Button
                  as="a"
                  href="images/suchit singh.png"
                  target="#"
                  color="black"
                  bgColor="orange"
                  borderRadius="30px"
                  width={["80px", "80px", "120px", "120px"]}
                  height={["30px", "30px", "60px", "60px"]}
                  fontSize={["12px", "12px", "17px", "17px"]}
                >
                  view my cv
                </Button>
              </Flex>
            </Flex>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src="Images/amit.png"
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
