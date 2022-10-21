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
        justifyContent="space-evenly"
        alignItems="center"
        position="absolute"
        w="100%"
      >
        <Box
          width={["200", "250", "328", "328"]}
          height={["140", "170", "256", "256"]}
          pt="70px"
        >
          <Text
            color="white"
            fontSize={["15px", "20px", "25px", "30px"]}
            textTransform="uppercase"
          >
            {" "}
            PERSONAL PORTFOLIO
          </Text>
        </Box>

        {/* Navbar container desktop */}
        <Flex
          //   backgroundColor="rgba(255,255,255,0.3)"
          width="65%"
          justifyContent="center"
          gap="5"
          transform="translateY(-34px)"
          pr="5"
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
            SERVICE
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
          color="white"
          background="tranparent"
          fontSize="30px"
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
                Service
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
                Contact me
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
                <Image src="./images/instagram.png" />
                <Image src="./images/viber.png" />
                <Image src="./images/gmail.png" />
                <Image src="./images/whatsapp.png" />
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default Navbar;
