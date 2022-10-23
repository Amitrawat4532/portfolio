import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const Contactpage = () => {
  return (
    <>
      <Flex
        bgColor="black"
        flexDirection="column"
        gap="30px"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <Flex
          height="100px"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="35px" fontWeight="600">
            Get in Touch
          </Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center" gap="20px" width="50%">
          <Input type="text" placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your Email"></Input>
          <Input type="text" placeholder="Enter your message"></Input>
          <Button color="black">Submit</Button>
        </Flex>
      </Flex>
    </>
  );
};
export default Contactpage;
