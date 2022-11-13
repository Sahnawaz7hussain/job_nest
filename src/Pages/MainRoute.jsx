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
import Login from "./Login";
import AdminRegister from "../Components/Admin/AdminRegister";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminJobPost from "../Components/Admin/AdminJobPost";
import AdminPostedJobs from "../Components/Admin/AdminPostedJobs";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />

      <Route path="/user" element={<LandingPage />} />
      <Route path="/user/recommendedjobs" element={<RecommendedJobs />} />
      <Route path="/user/recommendedjobs/:id" element={<SingleJobDetails />} />

      <Route path="/services" element={<Servicespage />} />

      <Route path="/companies" element={<Companies />} />
      <Route path="/singlecompany/:id" element={<SingleCompany />} />

      <Route path="/admin/" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/postjob" element={<AdminJobPost />} />
      <Route path="/admin/jobs" element={<AdminPostedJobs />} />
    </Routes>
  );
};

export default MainRoute;
