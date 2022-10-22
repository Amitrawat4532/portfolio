import { Flex, Image, Text, Button, Stack, Box } from "@chakra-ui/react";
import React from "react";
import { Progress } from "@chakra-ui/react";

const Aboutpage = () => {
  return (
    <>
      <Box height="100vh" width="100%">
        {/* ***************header container************** */}
        <Flex height="15%" width="100%" bgColor="black" justifyContent="center">
          <Text fontSize="40px" fontWeight="500" color="white">
            ABOUT ME
          </Text>
        </Flex>

        {/* ***************************main container**************** */}
        <Flex bgColor="black" flexWrap="wrap" height="100%">
          {/* ****************left container************* */}
          <Flex
            justifyContent="center"
            width={["100%", "100%", "50%", "50%"]}
            height={["252px", "252px", "590px", "590px"]}
          >
            <Image
              src="./Images/amit.png"
              height={["250px", "250px", "300px", "350px"]}
              width={["60%", "60%", "60%", "60%"]}
              alignSelf="center"
              margin="auto"
            />
          </Flex>

          {/* ************************right container***************** */}

          <Flex
            flex="1"
            flexDirection="column"
            gap={["7%", "7%", "14%", "14%"]}
            justifyContent="center"
            margin="auto"
            alignItems="Center"
            width={["100%", "100%", "50%", "50%"]}
            height={["500px", "250px", "280px", "280px"]}
          >
            <Flex
              justifyContent={["center", "center", "start", "start"]}
              width="60%"
              height="100px"
            >
              <Text color="white" fontSize={["20px", "20px", "25px", "30px"]}>
                {" "}
                This is a Heading{" "}
              </Text>
            </Flex>

            <Flex justifyContent="start" width="70%" alignItems="center">
              <Text
                color="white"
                fontSize={["17px", "17px", "18px", "20px"]}
                minWidth="150px"
              >
                Name :
              </Text>
              <Text
                color="white"
                textAlign="start"
                fontSize={["15px", "15px", "15px", "17px"]}
              >
                Suchit Singh Rawat
              </Text>
            </Flex>

            <Flex justifyContent="start" width="70%" alignItems="center">
              <Text
                color="white"
                fontSize={["17px", "17px", "18px", "20px"]}
                minWidth="150px"
              >
                Date of birth :
              </Text>
              <Text
                color="white"
                textAlign="start"
                fontSize={["15px", "15px", "15px", "17px"]}
              >
                June 3 2001
              </Text>
            </Flex>

            <Flex justifyContent="start" width="70%" alignItems="center">
              <Text
                color="white"
                fontSize={["17px", "17px", "18px", "20px"]}
                minWidth="150px"
              >
                Address :
              </Text>
              <Text
                color="white"
                textAlign="start"
                fontSize={["15px", "15px", "15px", "17px"]}
              >
                Dehradun (Uttarakhand)
              </Text>
            </Flex>

            <Flex justifyContent="start" width="70%" alignItems="center">
              <Text
                color="white"
                fontSize={["17px", "17px", "18px", "20px"]}
                minWidth="150px"
              >
                Email I'd :
              </Text>
              <Text
                color="white"
                textAlign="start"
                fontSize={["15px", "15px", "15px", "17px"]}
              >
                amitrawat4532@gmail.com
              </Text>
            </Flex>

            <Flex justifyContent="start" width="70%" alignItems="center">
              <Text
                color="white"
                fontSize={["17px", "17px", "18px", "20px"]}
                minWidth="150px"
              >
                Phone no. :
              </Text>
              <Text
                color="white"
                textAlign="start"
                fontSize={["15px", "15px", "15px", "17px"]}
              >
                7351225034
              </Text>
            </Flex>

            <Flex
              justifyContent={["center", "center", "start", "start"]}
              width="60%"
              paddingLeft="20px"
            >
              <Button
                as="a"
                href="images/suchit singh.png"
                target="#"
                color="black"
                bgColor="orange"
                borderRadius="30px"
                width={["120px", "120px", "120px", "120px"]}
                height={["60px", "60px", "60px", "60px"]}
                fontSize={["17px", "17px", "17px", "17px"]}
              >
                view my cv
              </Button>
            </Flex>
          </Flex>

          {/* ******************main container end*********** */}
        </Flex>
      </Box>
    </>
  );
};
export default Aboutpage;
