import { Flex, Text, Stack, Box } from "@chakra-ui/react";
import React from "react";
import { Progress } from "@chakra-ui/react";
const Skills = () => {
  return (
    <>
      <Flex
        bgColor="black"
        flexDirection="column"
        gap="60px"
        width="100%"
        height="100vh"
      >
        <Flex
          height="150px"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="35px" fontWeight="600">
            SKILLS
          </Text>
        </Flex>

        <Flex
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
          {/* ************************left container********************* */}
          <Flex w="50%" h="100%" justifyContent="center">
            <Stack spacing={5} w="80%" h="100%">
              <Text color="white" textAlign="center">
                HTML
              </Text>
              <Progress
                colorScheme="red"
                height={["10px", "15px", "20px", "20px"]}
                value={90}
              />

              <Text color="white" textAlign="center">
                JavaScript
              </Text>

              <Progress
                colorScheme="red"
                height={["10px", "15px", "20px", "20px"]}
                value={80}
              />
              <Text color="white" textAlign="center">
                Chakra UI
              </Text>
              <Progress
                colorScheme="red"
                height={["10px", "15px", "20px", "20px"]}
                value={50}
              />
              <Text color="white" textAlign="center">
                Next.js
              </Text>
              <Progress
                colorScheme="red"
                height={["10px", "15px", "20px", "20px"]}
                value={50}
              />
            </Stack>
          </Flex>

          {/* *****************right container*************** */}
          <Flex w="50%" h="100%" justifyContent="center">
            <Stack spacing={5} w="80%" h="100%">
              <Text color="white" textAlign="center">
                CSS
              </Text>
              <Progress
                colorScheme="red"
                height={["10px", "15px", "20px", "20px"]}
                value={90}
              />

              <Text color="white" textAlign="center">
                Bootstrap
              </Text>

              <Progress
                colorScheme="red"
                height={["10px", "15px", "20px", "20px"]}
                value={80}
              />
              <Text color="white" textAlign="center">
                React.Js
              </Text>
              <Progress
                colorScheme="red"
                height={["10px", "15px", "20px", "20px"]}
                value={50}
              />
              <Text color="white" textAlign="center">
                Wix Web Development
              </Text>
              <Progress
                colorScheme="red"
                height={["10px", "15px", "20px", "20px"]}
                value={50}
              />
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Skills;
