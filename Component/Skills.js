import { Flex, Text, Stack, Box } from "@chakra-ui/react";
import React from "react";
import { Progress } from "@chakra-ui/react";
const Skills = () => {
  return (
    <>
      <Flex
        bgColor="black"
        border="2px solid white"
        flexDirection="column"
        gap="30px"
      >
        <Flex height="50px" width="100%" justifyContent="center">
          <Text color="white" fontSize="30px" fontWeight="400">
            Skills
          </Text>
        </Flex>
        <Box w="100%" h="100%">
          <Stack spacing={5} w="100%" h="100%">
            <Text color="yellow" textAlign="center">
              HTML
            </Text>
            <Progress colorScheme="orange" height="20px" value={80} />

            <Text color="yellow" textAlign="center">
              CSS
            </Text>

            <Progress colorScheme="orange" height="20px" value={30} />
            <Text color="yellow" textAlign="center">
              JavaScript
            </Text>
            <Progress colorScheme="orange" height="20px" value={20} />
            <Text color="yellow" textAlign="center">
              React.js
            </Text>
            <Progress colorScheme="orange" height="20px" value={90} />

            <Text color="yellow" textAlign="center">
              Next.js
            </Text>

            <Progress colorScheme="orange" height="20px" value={20} />
          </Stack>
        </Box>
      </Flex>
    </>
  );
};
export default Skills;
