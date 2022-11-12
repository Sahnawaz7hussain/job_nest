import { Box } from "@chakra-ui/react";
import React from "react";
import DiscoverJob from "../Components/DiscoverJob";
import InterviewPrep from "../Components/InterviewPrep";
import Learning from "../Components/Learning";
import LearnMore from "../Components/LearnMore";
import Searchbar from "../Components/Searchbar";
import Standout from "../Components/Standout";
import TypesOfJob from "../Components/TypesOfJob";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import MainFeaturedCompanies from "../Components/MainFeaturedCompanies";

const Homepage = () => {
  return (
    <Box as="div">
      <Navbar/>
      <Searchbar />
      <TypesOfJob />
      <MainFeaturedCompanies />
      <InterviewPrep />
      <LearnMore />
      <Learning />
      <Standout />
      {/* <Footer/> */}
    </Box>
  );
};

export default Homepage;
