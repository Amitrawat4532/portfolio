import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Homepage = () => {
  return (
    <>
      {/* ************main container*********/}
      <Flex
        bgColor="black"
        height="100vh"
        width="100%"
        alignItems="center"
        pt="30px"
        flexDirection="column"
        // gap={["30px", "30px", "0px", "0px"]}
      >
        {/* Detail container */}
        <Flex
          justifyContent="center"
          flexDirection="column"
          height={["550px", "500px", "700px", "950px"]}
          alignItems="center"
          width="100%"
        >
          <Flex flexDirection="column" justifyContent="center">
            <Text as="p" color="yellow">
              Hello!
            </Text>
            <Text
              as="h1"
              fontSize={["40px", "50px", "50px", "50px"]}
              color="#f8e2e2"
            >
              I'am <br />
              <Text as="span" color="orange">
                Suchit Singh
              </Text>
            </Text>
            <Text as="p" color="yellow">
              A Web Developer
            </Text>
            <br />

            {/* ************************buttons****************** */}
            <Flex gap="5px">
              <Button
                as="a"
                href="images/suchit singh.png"
                target="#"
                color="black"
                bgColor="orange"
                borderRadius="5px"
                width="100px"
              >
                view my CV
              </Button>

              <Button
                as="a"
                href=""
                target="#"
                color="black"
                bgColor="orange"
                borderRadius="5px"
                width="150px"
              >
                my git account
              </Button>
            </Flex>
          </Flex>
        </Flex>
        {/* Image Container */}

        <Flex
          height={["100px", "230px", "100px", "100px"]}
          justifyContent="center"
          width="100%"
          gap={["10px", "10px", "20px", "20px"]}
          alignItems={["end", "end", "start", "start"]}
        >
          <Image
            src="./Images/instagram.png"
            height="40px"
            href="www.instagram.com"
          />
          <Image
            src="./Images/viber.png"
            height="40px"
            href="www.instagram.com"
          />
          <Image
            src="./Images/gmail.png"
            height="40px"
            href="www.instagram.com"
          />
          <Image
            src="./Images/whatsapp.png"
            height="40px"
            href="www.instagram.com"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Homepage;
