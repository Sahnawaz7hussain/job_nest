import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import projectlogo from "../../assets/projectlogo.png";
const AdminJobPost = () => {
  const [newJobData, setNewJobData] = useState({
    title: "",
    description: "",
    maxsalary: "",
    minsalary: "",
    role: "",
    location: "",
    skills: [],
  });
  //   const [skills, setSkills] = useState([]);

  const handleSkillsChange = (e) => {
    let value = e.target.value;
    const skill = value.trim().split(" ");
    setNewJobData({
      ...newJobData,
      skills: skill,
    });
    // setSkills(skill);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewJobData({
      ...newJobData,
      [name]: value,
    });
  };
  const handlePostJonOnClick = () => {
    console.log("ne Job Data", newJobData);
  };
  return (
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
          />
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Description"
            type="text"
            onChange={handleOnChange}
            name="description"
          />
          <FormLabel>Max Salary</FormLabel>
          <Input
            placeholder="Max Salary"
            type="number"
            onChange={handleOnChange}
            name="maxsalary"
          />
          <FormLabel>Min Salary</FormLabel>
          <Input
            placeholder="Min Salary"
            type="number"
            onChange={handleOnChange}
            name="minsalary"
          />
          <FormLabel>Job Role</FormLabel>
          <Input
            placeholder="Job Role"
            type="text"
            onChange={handleOnChange}
            name="jobrol"
            isRequired
          />
          <FormLabel>Location</FormLabel>
          <Input
            placeholder="Location"
            type="text"
            onChange={handleOnChange}
            name="location"
          />
          <FormLabel>Skills</FormLabel>
          <Input
            onChange={handleSkillsChange}
            placeholder="Please put a space for every skill"
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
  );
};

export default AdminJobPost;
