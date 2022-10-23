import { Flex, Text, Stack, Box } from "@chakra-ui/react";
import React from "react";
import { Progress } from "@chakra-ui/react";
const Skills = () => {
  return (
    <>
      <Flex bgColor="black" flexDirection="column" gap="60px">
        <Flex height="50px" width="100%" justifyContent="center">
          <Text color="white" fontSize="35px" fontWeight="600">
            SKILLS
          </Text>
        </Flex>
        <Flex w="100%" h="100%" justifyContent="center">
          <Stack spacing={5} w="50%" h="100%">
            <Text color="yellow" textAlign="center">
              HTML
            </Text>
            <Progress
              colorScheme="orange"
              height={["10px", "15px", "20px", "20px"]}
              value={90}
            />

            <Text color="yellow" textAlign="center">
              CSS
            </Text>

            <Progress
              colorScheme="orange"
              height={["10px", "15px", "20px", "20px"]}
              value={80}
            />
            <Text color="yellow" textAlign="center">
              JavaScript
            </Text>
            <Progress
              colorScheme="orange"
              height={["10px", "15px", "20px", "20px"]}
              value={50}
            />
            <Text color="yellow" textAlign="center">
              React.js
            </Text>
            <Progress
              colorScheme="orange"
              height={["10px", "15px", "20px", "20px"]}
              value={50}
            />

            <Text color="yellow" textAlign="center">
              Next.js
            </Text>

            <Progress
              colorScheme="orange"
              height={["10px", "15px", "20px", "20px"]}
              value={40}
            />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
export default Skills;
