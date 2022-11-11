import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import projectlogo from "../../assets/projectlogo.png";

const AdminLogin = () => {
  const [adminLoginData, setAdminLoginData] = useState({
    email: "",
    password: "",
  });
  const handleAdminLoginChange = (e) => {
    const { name, value } = e.target;
    setAdminLoginData({
      ...adminLoginData,
      [name]: value,
    });
  };
  const handleLoginOnClick = () => {
    console.log("login data", adminLoginData);
  };
  return (
    <Container>
      <Box
        border="1px solid grey"
        borderRadius={"10px"}
        paddingY={"25px"}
        paddingX={"15px"}
      >
        <Image
          m="auto"
          w="120px"
          h="45px"
          objectFit={"cover"}
          src={projectlogo}
          alt="logo"
        />
        <Heading mb="20px" as="h3" size="md">
          Post New Jobs.
        </Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            id="2"
            mb="10px"
            isRequired
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleAdminLoginChange}
          />
          <FormLabel>Password</FormLabel>
          <Input
            mb="10px"
            id="1"
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleAdminLoginChange}
          />
        </FormControl>
        <Button
          _hover={{ color: "black", bg: "blue.700" }}
          color="white"
          mt="30px"
          w="100%"
          bg="#2870c1"
          onClick={handleLoginOnClick}
        >
          Submit
        </Button>
      </Box>
      ;
    </Container>
  );
};

export default AdminLogin;
