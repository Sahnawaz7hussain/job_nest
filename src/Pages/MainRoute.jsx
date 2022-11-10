import React from "react";
import { Routes, Route } from "react-router-dom";
import Companies from "./Companies";
import Homepage from "./Homepage";
import LandingPage from "./LandingPage";
import Servicespage from "./Servicespage";
import SingleCompany from "./SingleCompany";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<h1>RegisterPage will invode here</h1>} />
      <Route path="/signin" element={<h1>LoginPage will invode here</h1>} />

      <Route path="/userpage" element={<LandingPage />} />

      <Route path="/services" element={<Servicespage />} />

      <Route path="/companies" element={<Companies />} />
      <Route path="/singlecompany/:id" element={<SingleCompany />} />
    </Routes>
  );
};

export default MainRoute;
