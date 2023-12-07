import {
  Button,
  Flex,
  Link,
  Text,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { AnimationOnScroll } from "react-animation-on-scroll";
import useTypewriter from 'react-typewriter-hook';

// import Typewriter from "typewriter-effect";

const Homepage = () => {
  const text = 'Web Developer';

  const typedText = useTypewriter(text);
  const Mail= "amitrawat4532@gmail.com"

  const handleDownload = () => {
    // Replace 'path/to/your/cv.pdf' with the correct path to your PDF file
    const cvPath = '/Images/Suchit@resume.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.setAttribute('download', 'Suchit singh.pdf'); // Change 'YourCV.pdf' to the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      {/* ************main container*********/}
      <Flex
        className="Home_container"
        id="homepage"
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
          height={["850px", "750px", "700px", "700px"]}
          alignItems="center"
          width="100%"
        >
          <Flex flexDirection="column" justifyContent="center">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              initiallyVisible={true}
            >
              <Text as="p" color="yellow">
                Hello!
              </Text>
           
              <Text
                as="h1"
                fontSize={["40px", "50px", "50px", "50px"]}
                color="#f8e2e2"
                id="headings"
              >
                I&apos;am <br />
                <Text as="span" color="orange">
                  Suchit Singh
                </Text>
              </Text>
              <Text as="p" color="yellow">
              {typedText}
              </Text>
              <br />
            </AnimationOnScroll>
            {/* ************************buttons****************** */}
            <Flex gap="5px">
              <Button
              onClick={handleDownload}
                
               
               
                color="black"
                bgColor="orange"
                borderRadius="5px"
                width="100%"
                p="10px"
              >
                View Resume 
              </Button>
              
              <Button
                as="a"
                href="https://github.com/Amitrawat4532"
                target="_blank"
                color="black"
                bgColor="orange"
                borderRadius="5px"
                width="100%"
                p="10px"

              >
                my git account
              </Button>
            </Flex>
          </Flex>
        </Flex>
        {/* Image Container */}

        <Flex
          height={["150px", "150px", "100px", "100px"]}
          justifyContent="center"
          width="100%"
          gap={["10px", "10px", "20px", "20px"]}
          alignItems="start"
        >
          <Link href="https://github.com/Amitrawat4532" target="_blank">
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              color="orange"
              icon={<BsGithub />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Link>
          <Link href={`mailto:${Mail}`} target="_blank">
            <IconButton
              aria-label="Email"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              color="orange"
              icon={<MdEmail />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
            />
          </Link>

          <Link href="https://www.instagram.com/amitrawat4532/" target="_blank">
            <IconButton
              aria-label="twitter"
              variant="ghost"
              size="lg"
              color="orange"
              icon={<BsInstagram size="28px" />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Link>

          <Link
            href="https:www.linkedin.com/in/suchit-singh-368a05229"
            target="_blank"
          >
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              size="lg"
              color="orange"
              icon={<BsLinkedin size="28px" />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Homepage;
