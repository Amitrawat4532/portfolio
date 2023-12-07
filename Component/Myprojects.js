import React from 'react'
import { Button, Flex, Image, Text, Link } from "@chakra-ui/react";


const Myprojects = () => {
  return (
    <Flex
    bgColor="black"
    p="30px"
    pt={["20px", "30px","40px","200px"]}
    flexDirection="column"
    gap={["10px","10px","30px","30px"]}
    justifyContent="center"
    width={["100%", "100%", "100%", "100%"]}
    className="myproject_container"
  >
    <Flex
     
      width="100%"
      justifyContent="center"
      alignItems="center"
      padding="10px"
      margin="auto"
    >
      <Text color="white" fontSize="35px" fontWeight="600">
        My Projects
      </Text>
    </Flex>

    <Flex
    flexDirection={["column","column","row","row"]}
      width="100%"
      alignItems="center"
      justifyContent="center"
      gap="0px"
      flexWrap="wrap"
    >
      <Flex flexDirection="column" width="40%" pt={["50px","50px","100px","100px"]} alignItems="center">
        <Link
          href="https://www.igatpurihillstrektourism.com"
          target="#blank"
        >
          <Text
            color="white"
            fontSize={["15px", "15px", "20px", "20px"]}
            fontWeight="500"
            _hover={{
              color: "red",
            }}
          >
            https://www.igatpurihillstrektourism.com
          </Text>
        </Link>

        <Text
          color="white"
          fontSize={["15px", "15px", "20px", "20px"]}
          fontWeight="300"
        >
          Next.js , Tailwind CSS 
        </Text>
      </Flex>

      <Flex flexDirection="column" width="40%" pt="100px" alignItems="center">
        <Link href="https://foodpandaa.vercel.app/" target="#blank">
          <Text
            color="white"
            fontSize={["15px", "15px", "20px", "20px"]}
            fontWeight="500"
            _hover={{
              color: "red",
            }}
          >
            https://foodpandaa.vercel.app/
          </Text>
        </Link>

        <Text
          color="white"
          fontSize={["15px", "15px", "20px", "20px"]}
          fontWeight="300"
        >
          HTML , CSS, JavaScript , Bootstrap
        </Text>
      </Flex>

      <Flex flexDirection="column" width="40%" pt="100px" alignItems="center">
        <Link
          href="https://portfolio-amitrawat4532.vercel.app"
          target="#blank"
        >
          <Text
            color="white"
            fontSize={["15px", "15px", "20px", "20px"]}
            fontWeight="500"
            _hover={{
              color: "red",
            }}
          >
            https://portfolio-amitrawat4532.vercel.app
          </Text>
        </Link>

        <Text
          as="h4"
          color="white"
          fontSize={["15px", "15px", "20px", "20px"]}
          fontWeight="300"
        >
          Next.js , Chakra UI
        </Text>
      </Flex>
      <Flex flexDirection="column" width="40%" pt="100px" alignItems="center">
        <Link
          href="https://www.rafaindia.in"
          target="#blank"
        >
          <Text
            color="white"
            fontSize={["15px", "15px", "20px", "20px"]}
            fontWeight="500"
            _hover={{
              color: "red",
            }}
          >
            https://www.rafaindia.in
          </Text>
        </Link>

        <Text
          as="h4"
          color="white"
          fontSize={["15px", "15px", "20px", "20px"]}
          fontWeight="300"
        >
          Next.js , Chakra UI
        </Text>
      </Flex>
      
      <Flex flexDirection="column" width="40%" pt="100px" alignItems="center">
        <Link
          href="https://blogwebsite-rho.vercel.app"
          target="#blank"
        >
          <Text
            color="white"
            fontSize={["15px", "15px", "20px", "20px"]}
            fontWeight="500"
            _hover={{
              color: "red",
            }}
          >
            https://blogwebsite-rho.vercel.app
          </Text>
        </Link>

        <Text
          as="h4"
          color="white"
          fontSize={["15px", "15px", "20px", "20px"]}
          fontWeight="300"
        >
          Next.js , Chakra UI
        </Text>
      </Flex>
      
      <Flex flexDirection="column" width="40%" pt="100px" alignItems="center">
        <Link
          href="https://applegsap.vercel.app"
          target="#blank"
        >
          <Text
            color="white"
            fontSize={["15px", "15px", "20px", "20px"]}
            fontWeight="500"
            _hover={{
              color: "red",
            }}
          >
            https://applegsap.vercel.app
          </Text>
        </Link>

        <Text
          as="h4"
          color="white"
          fontSize={["15px", "15px", "20px", "20px"]}
          fontWeight="300"
        >
          Next.js , Tailwind , GSAP
        </Text>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default Myprojects