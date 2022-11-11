import { Box } from "@chakra-ui/react";
import React from "react";
import InterviewPrep from "../Components/InterviewPrep";
import Learning from "../Components/Learning";
import LearnMore from "../Components/LearnMore";
import Searchbar from "../Components/Searchbar";
import Standout from "../Components/Standout";
import TypesOfJob from "../Components/TypesOfJob";

const Homepage = () => {
  return (
    <Box as="div">
      <Searchbar />
      <TypesOfJob />
      <InterviewPrep />
      <LearnMore />
      <Learning />
      <Standout />
    </Box>
  );
};

export default Homepage;
