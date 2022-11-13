import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import projectlogo from "../../assets/projectlogo.png";
import Footer from "../../Pages/Footer";
import { postNewCompanyActionFn } from "../../Redux/AppReducer/action";
import { getLocalStorageData, saveToLocalStorage } from "../../utils/localData";
import AdminNavbar from "./AdminNavbar";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const companyLoginData = getLocalStorageData("adminLoginData") || {};
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
            companies: registerData.title,
          };
          alert("Login Success");
          saveToLocalStorage("adminLoginData", adminLoginData);
          navigate("/admin/postjob");
        })
        .catch((e) => {
          alert("login success");
        });
    } else if (
      registerData.email !== adminLoginData.email &&
      registerData.password !== adminLoginData.password
    ) {
      // wrong creddd.
      alert("Wrong Credentials");
    } else {
      alert("Login Failure");
    }
  };
  if (companyLoginData.isAuth && companyLoginData.token.length !== 0) {
    return <Navigate to="/admin/postjob" />;
  }
  return (
    <Box>
      <AdminNavbar />
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
          <Text mt="15px">
            Don't Have account{" "}
            <Link to="/admin/register">
              {" "}
              <Box as="span" textDecoration={"underline"} color="blue">
                Register
              </Box>{" "}
            </Link>{" "}
          </Text>
        </Box>
        ;
      </Container>
      <Footer />
    </Box>
  );
};

export default AdminLogin;
