import { Box } from "@chakra-ui/react";
import React from "react";
import Searchbar from "../Components/Searchbar";
import TypesOfJob from "../Components/TypesOfJob";

const Homepage = () => {
  return (
    <Box as="div">
      <Searchbar />
      <TypesOfJob />
    </Box>
  );
};

export default Homepage;
