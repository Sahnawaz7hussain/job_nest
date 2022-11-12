import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import projectlogo from "../../assets/projectlogo.png";
import { postNewCompanyActionFn } from "../../Redux/AppReducer/action";
import { getLocalStorageData, saveToLocalStorage } from "../../utils/localData";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [adminAuth, setAdminAuth] = useState(false);
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
    let registerData = getLocalStorageData("companyRegisterData") || {};
    if (
      Object.keys(registerData).length === 0 &&
      registerData.constructor === Object
    ) {
      alert("please Register you company Before Login");
      navigate("/admin/register");
    } else if (
      registerData.email === adminLoginData.email &&
      registerData.password === adminLoginData.password
    ) {
      dispatch(postNewCompanyActionFn(registerData))
        .then((r) => {
          let adminLoginData = {
            token: `${registerData.email}${registerData.password}`,
            isAuth: true,
          };
          //setAdminAuth(true);
          alert("Login Success and post company");
          saveToLocalStorage("adminLoginData", adminLoginData);
        })
        .catch((e) => {
          setAdminAuth(true);
          alert("login success");
        });
    } else if (
      registerData.email !== adminLoginData.email &&
      registerData.password !== adminLoginData.password
    ) {
      // wrong creddd.
      alert("Wrong Credentials");
      setAdminAuth(false);
    } else {
      alert("Login Failure");
    }
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
          Login
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
