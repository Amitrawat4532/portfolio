import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footerpage = () => {
  return (
    <>
      <Flex
        bg="black"
        textAlign="center"
        justifyContent="center"
        border="2px solid red"
      >
        <Text color="wheat" margin="auto">
          © 2022 Personal Portfolio. All rights reserved | Designed and Develop
          by Amitrawat
        </Text>
      </Flex>
    </>
  );
};
export default Footerpage;
