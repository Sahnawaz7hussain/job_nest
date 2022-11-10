import { Box } from "@chakra-ui/react";
import React from "react";
import InterviewPrep from "../Components/InterviewPrep";
import Searchbar from "../Components/Searchbar";
import TypesOfJob from "../Components/TypesOfJob";

const Homepage = () => {
  return (
    <Box as="div">
      <Searchbar />
      <TypesOfJob />
      <InterviewPrep />
    </Box>
  );
};

export default Homepage;
