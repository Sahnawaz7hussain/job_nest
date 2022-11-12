import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminJobPost from "../Components/Admin/AdminJobPost";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminRegister from "../Components/Admin/AdminRegister";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/companies/register" element={<AdminRegister />} />
      <Route path="/companies/login" element={<AdminLogin />} />
      <Route path="/companies/postjob" element={<AdminJobPost />} />
    </Routes>
  );
};

export default AdminRoutes;
