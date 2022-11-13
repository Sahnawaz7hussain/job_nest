import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import AllCompanies from "../Components/Companies/AllCompanies";
import Sidebar from "../Components/Companies/Sidebar";

import Navbar from "../Components/Navbar";


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
    </Box>
  );
};

export default Companies;
