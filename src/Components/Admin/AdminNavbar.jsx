import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projectlogo from "../../assets/projectlogo.png";
import {
  getLocalStorageData,
  removeLocalStorageData,
} from "../../utils/localData";

const AdminNavbar = () => {
  const [adminLoginData, setAdminLoginData] = useState({});
  // const adminLoginData = getLocalStorageData("adminLoginData") || {};

  const handleLogoutOnClick = () => {
    removeLocalStorageData("adminLoginData");
    alert("Lougout Success");
    window.location.reload();
  };
  useEffect(() => {
    let adminLoginD = getLocalStorageData("adminLoginData") || {};
    setAdminLoginData(adminLoginD);
  }, []);
  return (
    <Box
      borderBottom="1px solid grey"
      boxSizing="border-box"
      paddingX={["15px", "30px", "55px"]}
      mb="20px"
      position={"sticky"}
      top="0"
      bg="#fff"
      zIndex={"2000"}
    >
      <Flex alignItems={"center"}>
        <Image src={projectlogo} alt="Job Nest" />
        <Spacer />
        <HStack spacing={"18px"} display="flex">
          <Link to="/admin/postjob">
            <Text
              fontSize={"17px"}
              _hover={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              Post Job
            </Text>
          </Link>
          {adminLoginData.isAuth ? (
            <Link to="/admin/jobs">
              <Text>Posted Jobs</Text>
            </Link>
          ) : (
            <Link to="/admin">
              <Button
                bg="transparent"
                border={"2px solid blue"}
                borderRadius="10px"
                fontSize={"17px"}
                color="blue"
                _hover={{
                  cursor: "pointer",
                  bg: "blue",
                  color: "#fff",
                }}
              >
                Login
              </Button>
            </Link>
          )}

          {adminLoginData.isAuth ? (
            <Button
              onClick={() => handleLogoutOnClick()}
              color={"#fff"}
              bg="red"
              border={"1px solid red"}
              _hover={{ bg: "#fff", color: "red" }}
            >
              Logout
            </Button>
          ) : (
            <Link to="/admin/register">
              <Button
                fontSize={"17px"}
                bg="#e53e3e"
                border="2px solid #e53e3e"
                color="#fff"
                _hover={{
                  cursor: "pointer",
                  bg: "transparent",
                  color: "#e53e3e",
                }}
              >
                Register
              </Button>
            </Link>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};

export default AdminNavbar;
