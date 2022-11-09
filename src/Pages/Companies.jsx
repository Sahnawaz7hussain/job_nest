import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import AllCompanies from "../Components/Companies/AllCompanies";
import Sidebar from "../Components/Companies/Sidebar";

const Companies = () => {
  return (
    <Box>
      <Heading textAlign={"center"} my="40px" size={"lg"}>
        Featured companies actively hiring
      </Heading>
      <Box width={"90%"} m="auto" display={"flex"}>
        <Sidebar />
        <AllCompanies />
      </Box>
    </Box>
  );
};

export default Companies;
