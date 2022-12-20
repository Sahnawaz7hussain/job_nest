import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import projectlogo from "../../assets/projectlogo.png";
import Footer from "../../Components/Footer";
import { postNewJobActionFn } from "../../Redux/AppReducer/action";
import { getLocalStorageData } from "../../utils/localData";
import AdminNavbar from "./AdminNavbar";

const AdminJobPost = () => {
  const navigate = useNavigate();
  const [newJobData, setNewJobData] = useState({
    title: "",
    summary: "",
    rating: 0,
    companies: "",
    package: "",
    experience: "0 Year",
    location: "",
    skills: "",
    companyId: "",
    posted:"0 DAY AGO"
  });
  const dispatch = useDispatch();
  const companyData = getLocalStorageData("adminLoginData") || {};
  const [maxP, setMaxP] = useState("");
  const [minP, setMinP] = useState("");
  const handleMaxOnChange = (e) => {
    setMaxP(e.target.value);
  };
  const handleMinOnChange = (e) => {
    setMinP(e.target.value);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewJobData({
      ...newJobData,
      [name]: value,
    });
  };
  useEffect(() => {
    setNewJobData({
      ...newJobData,
      package: `${minP} - ${maxP}`,
      companies: companyData.companies,
      companyId: companyData.token,
    });
  }, [setMaxP, setMinP, minP, maxP]);


  const handlePostJonOnClick = () => {
    // setNewJobData({
    dispatch(postNewJobActionFn(newJobData)).then((r) => {
      navigate("/user/recommendedjobs");
      // console.log("response of new company added;", r);
    });
    // console.log("ne Job Data", newJobData);
  };
  if (!companyData.isAuth) {
    return <Navigate to="/admin" />;
  }




  return (
    <Box>
      <AdminNavbar />
      <Container>
        <Box>
          <Image m="auto" src={projectlogo} alt="Job Nest" />
          <Heading mb="15px" as="h2" size="lg">
            Post New Job
          </Heading>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
              type="text"
              onChange={handleOnChange}
              name="title"
              id="title"
            />
            <FormLabel>Summary</FormLabel>
            <Textarea
              placeholder="Job Summary"
              type="text"
              onChange={handleOnChange}
              name="summary"
              id="summary"
            />
            <Flex mt="20px">
              <Select
                placeholder="Max Salary"
                type="text"
                onChange={handleMaxOnChange}
                name="maxsalary"
                id="maxSalary"
              >
                <option value="4LPA">4 LPA</option>
                <option value="5LPA">5 LPA</option>
                <option value="6LPA">6 LPA</option>
                <option value="7LPA">7 LPA</option>
                <option value="8LPA">8 LPA</option>
                <option value="9LPA">9 LPA</option>
                <option value="10LPA">10 LPA</option>
              </Select>
              <Select
                placeholder="Min Salary"
                type="text"
                onChange={handleMinOnChange}
                name="minsalary"
                id="minsalary"
              >
                <option value="2LPA">2 LPA</option>
                <option value="3LPA">3 LPA</option>
                <option value="4LPA">4 LPA</option>
                <option value="5LPA">5 LPA</option>
              </Select>
            </Flex>
            <FormLabel>Experience</FormLabel>
            <Select
              placeholder="Experience"
              name="experience"
              onChange={handleOnChange}
              id="experience"
            >
              <option value="0 Year">0 Year</option>
              <option value="1 Year">1 Year</option>
              <option value="2 Year">2 Years</option>
              <option value="3 Year">3 Years</option>
              <option value="4 Year">4 Years</option>
              <option value="5 Year">5 Years</option>
            </Select>
            <FormLabel>Location</FormLabel>
            <Input
              placeholder="Location"
              type="text"
              onChange={handleOnChange}
              name="location"
              id="location"
            />
            <FormLabel>Skills</FormLabel>
            <Input
              name="skills"
              onChange={handleOnChange}
              placeholder="Please put - for multiple skills"
              id="skills"
            />
          </FormControl>
          <Button
            onClick={handlePostJonOnClick}
            my="30px"
            color="#fff"
            bg="blue.700"
            w="100%"
            _hover={{ bg: "blue.500" }}
          >
            Post Job
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default AdminJobPost;
