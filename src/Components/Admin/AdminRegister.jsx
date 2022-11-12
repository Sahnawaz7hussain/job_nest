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
import { useNavigate } from "react-router-dom";
import projectlogo from "../../assets/projectlogo.png";
import { getLocalStorageData, saveToLocalStorage } from "../../utils/localData";
const AdminRegister = () => {
  const navigate = useNavigate();
  const adminLoginData = getLocalStorageData("adminLoginData") || {};
  const [companyRegisterData, setCompanyRegisterData] = useState({
    title: "",
    image: "",
    description: "",
    location: "",
    sector: "",
    companytype: "",
    rating: 0,
    review: "0 reviews",
    followers: 0,
    thumbnail: "",
    about: "",
    email: "",
    password: "",
    id: Date.now(),
    jobs: [],
  });

  const handleRegisterOnChange = (e) => {
    const { name, value } = e.target;
    setCompanyRegisterData({
      ...companyRegisterData,
      [name]: value,
    });
  };

  //////////////
  const handleRegisterOnClick = () => {
    if (
      companyRegisterData.email === "" ||
      companyRegisterData.title === "" ||
      companyRegisterData.image == "" ||
      companyRegisterData.description == "" ||
      companyRegisterData.password == ""
    ) {
      alert("Please fill Required Details");
    } else {
      saveToLocalStorage("companyRegisterData", companyRegisterData);
      alert("Register Success");
      navigate("/admin/login");
    }
    //console.log("register data:::,", companyRegisterData);
  };
  if (adminLoginData.token && adminLoginData.isAuth) {
    //Todo  Routing.
    console.log("adminLogin Data", adminLoginData);
  }
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
        <FormControl isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input
            onChange={handleRegisterOnChange}
            mb="10px"
            isRequired
            placeholder="Company Name"
            type="text"
            name="title"
            id="title"
          />
          <FormLabel>Official Email</FormLabel>
          <Input
            placeholder="Official Email"
            type="email"
            name="email"
            onChange={handleRegisterOnChange}
            id="email"
          />
          <FormLabel>Company Logo url</FormLabel>
          <Input
            onChange={handleRegisterOnChange}
            mb="10px"
            placeholder="Company Logo url"
            type="url"
            name="image"
            id="image"
          />
          <FormLabel>Description</FormLabel>

          <Input
            onChange={handleRegisterOnChange}
            mb="10px"
            placeholder="Description"
            type="text"
            name="description"
            id="description"
          />
          <FormLabel>Select Location</FormLabel>
          <Select
            onChange={handleRegisterOnChange}
            mb="10px"
            placeholder="Select Location"
            type="text"
            name="location"
            id="location"
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Nagpur">Nagpur</option>
          </Select>
          <Flex space="10px">
            <Select
              onChange={handleRegisterOnChange}
              mb="10px"
              placeholder="Select Sector"
              type="text"
              name="sector"
              id="sector"
            >
              <option value="private">Private</option>
              <option value="public">Public</option>
            </Select>
            <Select
              onChange={handleRegisterOnChange}
              mb="10px"
              placeholder="Select Industry"
              type="text"
              name="companytype"
              id="companytype"
            >
              <option value="banking">Banking</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="itservicesandconsulting">
                IT Services & Consulting
              </option>
              <option value="electronicsmanufacturing">
                Electronics Manufacturing
              </option>
              <option>Others</option>
            </Select>
          </Flex>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleRegisterOnChange}
            id="password"
          />
        </FormControl>
        <Button
          onClick={handleRegisterOnClick}
          _hover={{ bg: "blue.700" }}
          color="#fff"
          mt="30px"
          w="100%"
          bg="#2870c1"
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AdminRegister;
