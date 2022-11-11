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
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import projectlogo from "../../assets/projectlogo.png";
const AdminRegister = () => {
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
        <Heading as="h1" size="lg">
          Register Your Company&
        </Heading>
        <Heading mb="20px" as="h3" size="md">
          Post New Jobs.
        </Heading>
        <FormControl>
          <FormLabel>Company Name</FormLabel>
          <Input mb="10px" isRequired placeholder="Company Name" />
          <FormLabel>Company Logo url</FormLabel>
          <Input mb="10px" placeholder="Company Logo url" />
          <FormLabel>Description</FormLabel>

          <Textarea mb="10px" placeholder="Description" />
          <FormLabel>Banner url</FormLabel>
          <Input mb="10px" placeholder="Banner url" />
          <FormLabel>Select Location</FormLabel>
          <Select mb="10px" placeholder="Select Location">
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Nagpur">Nagpur</option>
          </Select>
          <Flex space="10px">
            <Select mb="10px" placeholder="Select Sector">
              <option value="private">Private</option>
              <option value="public">Public</option>
            </Select>
            <Select mb="10px" placeholder="Select Industry">
              <option value="banking">Banking</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="itservicesandconsulting">
                IT Services & Consulting
              </option>
              <option value="electronicsmanufacturing">
                Electronics Manufacturing
              </option>
            </Select>
          </Flex>
        </FormControl>
        <Button mt="30px" w="100%" bg="blue.300">
          Submit
        </Button>
      </Box>
      ;
    </Container>
  );
};

export default AdminRegister;
