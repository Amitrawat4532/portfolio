import { Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import React from "react";

const Education = () => {
  return (
    <>
      {/* **********************************main container**************************** */}
     
        {/* ************************left container******************** */}
        <Flex
          bgColor="black"
          flexDirection="column"
          gap="30px"
          justifyContent="center"
         width="100%"
    pt={["20px", "30px","40px","200px"]}

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

            justifyContent="center"
            gap="40px"
          >
            <Flex flexDirection="column" width="100%" alignItems="center" gap="60px">

             <Flex flexDirection="column" gap="20px" textAlign="center">
                <Text
                  as="span"
                  color="red"
                  fontSize={["15px", "15px", "20px", "20px"]}
                  fontWeight="500"
                >
                  2019-2022
                </Text>
            
              <Text
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
                Devbhoomi Uttarakhand University ,Dehradun(Uttarakhand).
              </Text>
              </Flex>
           

              <Flex flexDirection="column" gap="20px" textAlign="center">
              <Text
                as="span"
                color="red"
                fontSize={["15px", "15px", "20px", "20px"]}
                fontWeight="500"
              >
                2018-2019
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
                Vivekananda School ,Dehradun(Uttarakhand).
              </Text>
          </Flex>



             <Flex flexDirection="column" gap="20px" textAlign="center">
             
                <Text
                  as="span"
                  color="red"
                  fontSize={["15px", "15px", "20px", "20px"]}
                  fontWeight="500"
                >
                  2016-2017
                </Text>
            
              <Text
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
                Vivekananda School ,Dehradun(Uttarakhand).
              </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* ************************right container******************** */}
        
    </>
  );
};
export default Education;
