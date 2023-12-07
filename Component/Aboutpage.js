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
  const handleDownload = () => {
    // Replace 'path/to/your/cv.pdf' with the correct path to your PDF file
    const cvPath = '/Images/Suchit@resume.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.setAttribute('download', 'Suchit singh.pdf'); // Change 'YourCV.pdf' to the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box bgColor="black" className="about_container">
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
                  Email I&apos;d :
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
              onClick={handleDownload}
                
               
               
                color="black"
                bgColor="orange"
                borderRadius="5px"
                width="100%"
                p="10px"
              >
                View Resume 
              </Button>
              </Flex>
            </Flex>
          </Stack>
          <Flex
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
                height: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
                marginTop: "15px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "gray",
                borderRadius: "24px",
              },
            }}
            scrollSnapType="x mandatory"
            px={["8", "8", "0", "0"]}
          >
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
