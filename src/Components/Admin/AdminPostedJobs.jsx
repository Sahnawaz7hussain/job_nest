import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../Footer";
import { getLocalStorageData } from "../../utils/localData";
import AdminNavbar from "./AdminNavbar";

const AdminPostedJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const companyLoginData = getLocalStorageData("adminLoginData") || {};
    const queryParams = {
      params: {
        companyId: companyLoginData.token,
      },
    };
    // dispatch();
    // #TODO
  }, []);
  return (
    <Box>
      <AdminNavbar />
      <Box>
        <Heading>Jobs Components</Heading>
      </Box>
      <Footer />
    </Box>
  );
};

export default AdminPostedJobs;
