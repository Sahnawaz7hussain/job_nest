import { Box, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import projectlogo from "../../assets/projectlogo.png";

const AdminNavbar = () => {
  return (
    <Box
      borderBottom="1px solid grey"
      paddingX={["15px", "20px", "35px"]}
      mb="200px"
    >
      <Flex alignItems={"center"}>
        <Image src={projectlogo} alt="Job Nest" />
        <Spacer />
        <HStack spacing={"15px"} display="flex">
          <Link to="/companies/postjob">
            <Text
              fontSize={"19px"}
              _hover={{
                cursor: "pointer",
                fontWeight: "bold",
                transform: "scale(1.01)",
                transition: "0.7s ease-in-out",
              }}
            >
              Post Job
            </Text>
          </Link>
          <Link to="/companies/login">
            <Text
              fontSize={"19px"}
              _hover={{
                cursor: "pointer",
                fontWeight: "bold",
                transform: "scale(1.01)",
                transition: "0.7s ease-in-out",
              }}
            >
              Login
            </Text>
          </Link>
          <Link to="/companies/register">
            <Text
              fontSize={"19px"}
              _hover={{
                cursor: "pointer",
                fontWeight: "bold",
                transform: "scale(1.01)",
                transition: "0.7s ease-in-out",
              }}
            >
              Register
            </Text>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default AdminNavbar;
