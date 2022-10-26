import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footerpage = () => {
  return (
    <>
      <Flex bg="black" textAlign="center" justifyContent="center" width="100%">
        <Text color="wheat" margin="auto" fontSize="20px">
          © 2022 Personal Portfolio. All Rights Reserved
        </Text>
      </Flex>
    </>
  );
};
export default Footerpage;
