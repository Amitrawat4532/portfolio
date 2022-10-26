import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Education = () => {
  return (
    <>
      {/* **********************************main container**************************** */}
      <Flex flexDirection={["column", "column", "row", "row"]}>
        {/* ************************left container******************** */}
        <Flex
          bgColor="black"
          flexDirection="column"
          gap="30px"
          justifyContent="center"
          width={["100%", "100%", "50%", "50%"]}
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
            alignItems="center"
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
        {/* ************************right container******************** */}
        <Flex
          bgColor="black"
          flexDirection="column"
          gap="30px"
          justifyContent="center"
          width={["100%", "100%", "50%", "50%"]}
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
            alignItems="center"
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
      </Flex>
    </>
  );
};
export default Education;
