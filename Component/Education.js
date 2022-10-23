import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Education = () => {
  return (
    <>
      <Flex
        bgColor="black"
        flexDirection="column"
        gap="30px"
        justifyContent="center"
      >
        <Flex
          height="100px"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="35px" fontWeight="600">
            Education
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
                2019-2022
              </Text>
            </Text>
            <Text
              Text
              as="h4"
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              B.sc(Information and Technology)
            </Text>
            <Text
              as="p"
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              Devbhoomi Uttrakhand University ,Dehradun(Uttrakhand).
            </Text>
          </Flex>

          <Flex flexDirection="column" width="60%" alignItems="start">
            <Text>
              <Text
                as="span"
                color="white"
                fontSize={["15px", "15px", "20px", "20px"]}
                fontWeight="500"
              >
                2018-2019
              </Text>
            </Text>
            <Text
              Text
              as="h4"
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              Sr. Secondary High School
            </Text>
            <Text
              as="p"
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              Vivekananda School ,Dehradun(Uttrakhand).
            </Text>
          </Flex>

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
                2016-2017
              </Text>
            </Text>
            <Text
              Text
              as="h4"
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              Sr. Secondary High School
            </Text>
            <Text
              as="p"
              color="white"
              fontSize={["15px", "15px", "20px", "20px"]}
              fontWeight="300"
            >
              Vivekananda School ,Dehradun(Uttrakhand).
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Education;
