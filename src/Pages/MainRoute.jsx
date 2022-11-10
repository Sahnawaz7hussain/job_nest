import React from "react";
import { Routes, Route } from "react-router-dom";
import Companies from "./Companies";
import Homepage from "./Homepage";
import LandingPage from "./LandingPage";
import Servicespage from "./Servicespage";
import SingleCompany from "./SingleCompany";
import Signup from "./Signup";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<h1>LoginPage will invode here</h1>} />

      <Route path="/userpage" element={<LandingPage />} />

      <Route path="/services" element={<Servicespage />} />

      <Route path="/companies" element={<Companies />} />
      <Route path="/singlecompany/:id" element={<SingleCompany />} />
    </Routes>
  );
};

export default MainRoute;
