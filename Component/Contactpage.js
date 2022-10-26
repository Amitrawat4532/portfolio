import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsPerson,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const confetti = {
  light: {
    primary: "4299E1", // blue.400
    secondary: "BEE3F8", // blue.100
  },

  dark: {
    primary: "1A365D", // blue.900
    secondary: "2A4365", // blue.800
  },
};

export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      align="center"
      justify="center"
      css={{
        backgroundColor: "black",
      }}
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              color="wheat"
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Link href="https://www.facebook.com/profile.php?id=100005578184906&sk=friends">
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    color="white"
                    icon={<MdEmail />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                  />
                </Link>

                <Link href="https://github.com/Amitrawat4532">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    color="white"
                    icon={<BsGithub />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.instagram.com/amitrawat4532/">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    color="white"
                    icon={<BsInstagram size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https:www.linkedin.com/in/suchit-singh-368a05229">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    color="white"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bgColor="black"
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel color="white">Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} color="white" />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        color="white"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="white">Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement
                        children={<MdOutlineEmail />}
                        color="white"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        color="white"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="white">Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      color="white"
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    bg="orange"
                    color="black"
                    _hover={{
                      bg: "blue.500",
                    }}
                    isFullWidth
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
