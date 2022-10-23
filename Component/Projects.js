import { Flex, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <>
      <Flex
        bgColor="black"
        flexDirection="column"
        gap="30px"
        justifyContent="center"
      >
        <Flex
          height="120px"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="35px" fontWeight="600">
            My Projects
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          width="100%"
          height="400px"
          alignItems={["center", "center", "end", "end"]}
          gap="40px"
        >
          <Flex flexDirection="column" width="60%" alignItems="start">
            <Text
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              <Text
                as="span"
                color="white"
                fontSize={["15px", "15px", "20px", "20px"]}
                fontWeight="500"
              >
                https://trekkings-amitrawat4532.vercel.app/
              </Text>
            </Text>
            <Text
              Text
              as="a"
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              Next.js , Chakra UI
            </Text>
          </Flex>

          <Flex flexDirection="column" width="60%" alignItems="start">
            <Text>
              <Text
                as="a"
                color="white"
                fontSize={["15px", "15px", "20px", "20px"]}
                fontWeight="500"
              >
                https://foodpandaa.vercel.app/
              </Text>
            </Text>
            <Text
              Text
              as="a"
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              HTML , CSS, JavaScript , Bootstrap
            </Text>
          </Flex>

          <Flex flexDirection="column" width="60%" alignItems="start">
            <Text
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              <Text
                as="a"
                color="white"
                fontSize={["15px", "15px", "20px", "20px"]}
                fontWeight="500"
              >
                https://portfolio-kohl-gamma-15.vercel.app/
              </Text>
            </Text>
            <Text
              Text
              as="h4"
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              Next.js , Chakra UI
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Projects;
