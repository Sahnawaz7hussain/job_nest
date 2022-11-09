import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompniesActionFn } from "../../Redux/AppReducer/action";

const AllCompanies = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => {
    return store;
  });

  useEffect(() => {
    dispatch(getCompniesActionFn());
  }, []);
  console.log("store:::", state);
  return <Box h={"100vh"} w="70%" m="auto" background="antiquewhite"></Box>;
};

export default AllCompanies;
