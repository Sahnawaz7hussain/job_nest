import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import AdminJobPost from "../Components/Admin/AdminJobPost";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminNavbar from "../Components/Admin/AdminNavbar";
import AdminRegister from "../Components/Admin/AdminRegister";
import AllCompanies from "../Components/Companies/AllCompanies";
import Sidebar from "../Components/Companies/Sidebar";
import Navbar from "../Components/Navbar";
import AdminRoutes from "./AdminRoutes";

const Companies = () => {
  return (
    <Box>
      <Navbar/>
      <Heading textAlign={"center"} my="40px" size={"lg"}>
        Featured companies actively hiring
      </Heading>
      <Box
        w={"90%"}
        m="auto"
        h="auto"
        display={"flex"}
        border={"0px solid green"}
      >
        <Sidebar />
        <AllCompanies />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <AdminRegister />
      <AdminLogin />
      {/* <AdminNavbar /> */}
      {/* <AdminRoutes /> */}
      {/* <AdminJobPost /> */}
    </Box>
  );
};

export default Companies;
