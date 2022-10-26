import React, { useRef } from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ButtonGroup } from "@chakra-ui/react";

import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerFooter,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      {/* main container */}
      <Flex
        justifyContent="space-between"
        px="6"
        py="4"
        alignItems="center"
        position="absolute"
        w="100%"
        h="100px"
      >
        <Box
          width={["200", "250", "328", "328"]}
          // height={["140", "170", "256", "256"]}
        >
          <Text
            color={["orange", "orange", "white", "white"]}
            fontSize={["20px", "20px", "25px", "30px"]}
            textTransform="uppercase"
          >
            {" "}
            PERSONAL PORTFOLIO
          </Text>
        </Box>

        {/* Navbar container desktop */}
        <Flex
          // backgroundColor="rgba(255,255,255,0.3)"
          h="100%"
          width="65%"
          justifyContent="center"
          alignItems="center"
          gap="5"
          display={["none", "none", "flex", "flex"]}
        >
          <Button
            bgColor="transparent"
            color="white"
            fontSize={["0", "0", "25px", "30px"]}
          >
            HOME
          </Button>
          <Button
            bgColor="transparent"
            color="white"
            fontSize={["15px", "20px", "25px", "30px"]}
          >
            ABOUT ME
          </Button>
          <Button
            bgColor="transparent"
            color="white"
            fontSize={["15px", "20px", "25px", "30px"]}
          >
            MY PROJECTS
          </Button>
          <Button
            bgColor="transparent"
            color="white"
            fontSize={["15px", "20px", "25px", "30px"]}
          >
            CONTACT ME
          </Button>
        </Flex>

        <IconButton
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          aria-label="Search database"
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          color="orange"
          background="tranparent"
          fontSize="45px"
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton fontSize="30px" color="red" m="4" />

            {/* Navbar container desktop */}

            <Flex
              flexDirection="column"
              justifyContent="center"
              display={["flex", "flex", "none", "none"]}
              alignItems="center"
              height="100%"
            >
              <Button
                fontSize="25px"
                color="black"
                bg="transparent"
                h="100px"
                w="100%"
                fontFamily="anton"
                fontWeight="light"
              >
                Home
              </Button>
              <Button
                fontSize="25px"
                color="black"
                bg="transparent"
                h="100px"
                w="100%"
                fontFamily="anton"
                fontWeight="light"
              >
                About{" "}
              </Button>
              <Button
                fontSize="25px"
                color="black"
                bg="transparent"
                h="100px"
                w="100%"
                fontFamily="anton"
                fontWeight="light"
              >
                My Projects
              </Button>
              <Button
                fontSize="25px"
                color="black"
                bg="transparent"
                h="100px"
                w="100%"
                fontFamily="anton"
                fontWeight="light"
              >
                Get in Touch
              </Button>
            </Flex>

            {/* ***************Navbar  footer mobile view******************** */}
            <DrawerFooter borderTopWidth="1px">
              <Flex
                height="4vh"
                width="100%"
                justifyContent="space-evenly"
                mb="15px"
              >
                <Image src="./Images/instagram.png" />
                <Image src="./Images/git.png" />
                <Image src="./Images/gmail.png" />
                <Image src="./Images/linkedin.png" />
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default Navbar;
