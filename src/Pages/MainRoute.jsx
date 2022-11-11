import React from "react";
import { Routes, Route } from "react-router-dom";
import Companies from "./Companies";
import Homepage from "./Homepage";
import LandingPage from "./LandingPage";
import Servicespage from "./Servicespage";
import SingleCompany from "./SingleCompany";
import Signup from "./Signup";
import RecommendedJobs from "./RecommendedJobs";
import SingleJobDetails from "./SingleJobDetails";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<h1>LoginPage will invode here</h1>} />

      <Route path="/user" element={<LandingPage />}/>
      <Route path="/user/recommendedjobs" element={<RecommendedJobs />} />
      <Route path="/user/recommendedjobs/:id" element={<SingleJobDetails />} />

      <Route path="/services" element={<Servicespage />} />

      <Route path="/companies" element={<Companies />} />
      <Route path="/singlecompany/:id" element={<SingleCompany />} />
    </Routes>
  );
};

export default MainRoute;
