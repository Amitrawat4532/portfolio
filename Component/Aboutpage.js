import { Flex, Image, Text, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { Progress } from "@chakra-ui/react";

const Aboutpage = () => {
  return (
    <>
      {/* ***************header container************** */}
      <Flex height="100px" width="100%" bgColor="black" justifyContent="center">
        <Text fontSize="40px" fontWeight="500" color="white">
          ABOUT ME
        </Text>
      </Flex>

      {/* ***************************main container**************** */}
      <Flex bgColor="black" flexWrap="wrap" height="100%">
        {/* ****************left container************* */}
        <Flex
          flex="1"
          height={["230px", "300px", "500px", "600px"]}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="./Images/amit.png"
            height={["150px", "200px", "300px", "350px"]}
            width="60%"
          />
        </Flex>
        {/* ************************right container***************** */}

        <Flex
          flex="1"
          flexDirection="column"
          gap="7%"
          justifyContent="center"
          margin="5px"
          alignItems="Center"
        >
          <Flex justifyContent="start" width="60%">
            <Text color="white" fontSize={["15px", "20px", "25px", "30px"]}>
              {" "}
              This is a Heading{" "}
            </Text>
          </Flex>

          <Flex justifyContent="start" width="70%" alignItems="center">
            <Text
              color="white"
              fontSize={["12px", "15px", "18px", "20px"]}
              minWidth="150px"
            >
              Name :
            </Text>
            <Text
              color="white"
              textAlign="start"
              fontSize={["10px", "12px", "15px", "17px"]}
            >
              Suchit Singh Rawat
            </Text>
          </Flex>

          <Flex justifyContent="start" width="70%" alignItems="center">
            <Text
              color="white"
              fontSize={["12px", "15px", "18px", "20px"]}
              minWidth="150px"
            >
              Date of birth :
            </Text>
            <Text
              color="white"
              textAlign="start"
              fontSize={["10px", "12px", "15px", "17px"]}
            >
              June 3 2001
            </Text>
          </Flex>

          <Flex justifyContent="start" width="70%" alignItems="center">
            <Text
              color="white"
              fontSize={["12px", "15px", "18px", "20px"]}
              minWidth="150px"
            >
              Address :
            </Text>
            <Text
              color="white"
              textAlign="start"
              fontSize={["10px", "12px", "15px", "17px"]}
            >
              Dehradun (Uttarakhand)
            </Text>
          </Flex>

          <Flex justifyContent="start" width="70%" alignItems="center">
            <Text
              color="white"
              fontSize={["12px", "15px", "18px", "20px"]}
              minWidth="150px"
            >
              Email I'd :
            </Text>
            <Text
              color="white"
              textAlign="start"
              fontSize={["10px", "12px", "15px", "17px"]}
            >
              amitrawat4532@gmail.com
            </Text>
          </Flex>

          <Flex justifyContent="start" width="70%" alignItems="center">
            <Text
              color="white"
              fontSize={["12px", "15px", "18px", "20px"]}
              minWidth="150px"
            >
              Phone no. :
            </Text>
            <Text
              color="white"
              textAlign="start"
              fontSize={["10px", "12px", "15px", "17px"]}
            >
              7351225034
            </Text>
          </Flex>

          <Flex justifyContent="start" width="60%" paddingLeft="20px">
            <Button
              as="a"
              href="images/suchit singh.png"
              target="#"
              color="black"
              bgColor="orange"
              borderRadius="30px"
              width="120px"
              height="50px"
            >
              view my CV
            </Button>
          </Flex>
        </Flex>

        {/* ******************main container end*********** */}
      </Flex>
    </>
  );
};
export default Aboutpage;
