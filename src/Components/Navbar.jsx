import React from "react";
import {
  VStack,
  Flex,
  Box,
  Image,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ProjectLogo from "../assets/projectlogo.png";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        position="sticky"
        top="0"
        zIndex="10"
        background="white"
      >
        <VStack display={{ lg: "flex" }}>
          <Flex w={{ base: "100%", sm: "50%", md: "100%" }} h={"5rem"}>
            <Image src={ProjectLogo} ml="10%"></Image>
            <Stack direction="row" spacing={20} align="center" ml={{ md: 5 }}>
              <Menu isLazy={{ md: "show" }}>
                <NavLink to="/jobs">
                  <MenuButton color={"black"}>Jobs</MenuButton>
                </NavLink>

                <MenuList
                  backgroundColor={"white"}
                  color={"black"}
                  minH="15em"
                  minW="50em"
                >
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem>
                    <Grid
                      templateColumns="repeat(4, 1fr)"
                      gap={6}
                      w="200%"
                      ml="5%"
                    >
                      <GridItem borderRight={"1px"}>
                        <b>Popular categories</b>
                        <br />
                        <span>IT jobs</span>
                        <br />
                        <span>Sales jobs</span>
                        <br />
                        <span>Marketing jobs</span>
                        <br />
                        <span>Data Science jobs</span>
                        <br />
                        <span>HR jobs</span>
                        <br />
                        <span>Engineering jobs</span>
                      </GridItem>
                      <GridItem borderRight={"1px"}>
                        <b>Jobs in demand</b>
                        <br />
                        <span>Fresher jobs</span>
                        <br />
                        <span>MNC jobs</span>
                        <br />
                        <span>Remote jobs</span>
                        <br />
                        <span>Work from home jobs</span>
                        <br />
                        <span>Walk-in jobs</span>
                        <br />
                        <span>Part-time jobs</span>
                      </GridItem>
                      <GridItem borderRight={"1px"}>
                        <b>Jobs by location</b>
                        <br />
                        <span>Fresher jobs</span>
                        <br />
                        <span>MNC jobs</span>
                        <br />
                        <span>Remote jobs</span>
                        <br />
                        <span>Work from home jobs</span>
                        <br />
                        <span>Walk-in jobs</span>
                        <br />
                        <span>Part-time jobs</span>
                      </GridItem>
                      <GridItem>
                        <b>Explore more jobs </b>
                        <br />
                        <span>Jobs by category</span>
                        <br />
                        <span>Jobs by skill</span>
                        <br />
                        <span>Jobs by location</span>
                        <br />
                        <span>Jobs by designation</span>
                        <br />
                        <span>Create free job alert</span>
                      </GridItem>
                    </Grid>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <NavLink to="/companies">
                  <MenuButton color={"black"}>Companies</MenuButton>
                </NavLink>
                <MenuList
                  backgroundColor={"white"}
                  color={"black"}
                  minH="15em"
                  minW="50em"
                >
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem>
                    <Grid
                      templateColumns="repeat(4, 1fr)"
                      gap={6}
                      w="200%"
                      ml="5%"
                    >
                      <GridItem borderRight={"1px"}>
                        <b>Explore category</b>
                        <br />
                        <span>Unicorn</span>
                        <br />
                        <span>MNC</span>
                        <br />
                        <span>Startup</span>
                        <br />
                        <span>Product based</span>
                        <br />
                        <span>Internet</span>
                      </GridItem>
                      <GridItem borderRight={"1px"}>
                        <b>Explore collection</b>
                        <br />
                        <span>Top companies</span>
                        <br />
                        <span>IT companies</span>
                        <br />
                        <span>Fintech companies</span>
                        <br />
                        <span>Sponsored companies</span>
                        <br />
                        <span>Featured companies</span>
                      </GridItem>
                      <GridItem borderRight={"1px"}>
                        <b>Research companies</b>
                        <br />
                        <span>Interview questions</span>
                        <br />
                        <span>Company salaries</span>
                        <br />
                        <span>Company reviews</span>
                        <br />
                        <span>Salary Calculator</span>
                      </GridItem>
                      <GridItem>
                        <b>Explore more jobs </b>
                        <br />
                        <span>Jobs by category</span>
                        <br />
                        <span>Jobs by skill</span>
                        <br />
                        <span>Jobs by location</span>
                        <br />
                        <span>Jobs by designation</span>
                        <br />
                        <span>Create free job alert</span>
                      </GridItem>
                    </Grid>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <NavLink to="/services">
                  {" "}
                  <MenuButton color={"black"}>Services</MenuButton>
                </NavLink>
                <MenuList
                  backgroundColor={"white"}
                  color={"black"}
                  minH="15em"
                  minW="50em"
                >
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem>
                    <Grid
                      templateColumns="repeat(5, 1fr)"
                      gap={6}
                      w="200%"
                      ml="5%"
                    >
                      <Grid
                        templateColumns="repeat(1, 1fr)"
                        gap={6}
                        w="200%"
                        ml="5%"
                      >
                        <GridItem>
                          <b>Resume writing</b>
                          <br />
                          <span>Text resume</span>
                          <br />
                          <span>Visual resume</span>
                          <br />
                          <span>Resume critique</span>
                          <br />
                        </GridItem>
                        <GridItem>
                          <b>Find Jobs</b>
                          <br />
                          <span>Jobs4u</span>
                          <br />
                          <span>Priority applicant</span>
                          <br />
                          <span>Contact us</span>
                          <br />
                        </GridItem>
                      </Grid>
                      <Grid borderRight={"1px"}>
                        <GridItem>
                          <b>Get recruiter's attention</b>
                          <br />
                          <span>Resume display</span>
                          <br />
                          <span>Recruiter connection</span>
                          <br />
                          <span>Job search booster</span>
                          <br />
                        </GridItem>
                        <GridItem>
                          <b>Monthly subscriptions</b>
                          <br />
                          <span>Basic & premium plans</span>
                        </GridItem>
                      </Grid>

                      <GridItem borderRight={"1px"}>
                        <b>Research companies</b>
                        <br />
                        <span>Interview questions</span>
                        <br />
                        <span>Company salaries</span>
                        <br />
                        <span>Company reviews</span>
                        <br />
                        <span>Salary Calculator</span>
                      </GridItem>
                      <GridItem borderRight={"1px"}>
                        <b>Learn & upskill</b>
                        <br />
                        <span>Data Science courses</span>
                        <br />
                        <span>Technology courses</span>
                        <br />
                        <span>Management courses</span>
                        <br />
                        <span>Finance courses</span>
                        <br />
                        <span>Design courses</span>
                        <br />
                        <span>Healthcare courses</span>
                        <br />
                        <span>Degree programs</span>
                      </GridItem>

                      <GridItem>
                        <b>Free resume resources</b>
                        <br />
                        <span>Resume maker for freshers</span>
                        <br />
                        <span>Resume quality score</span>
                        <br />
                        <span>Resume samples</span>
                        <br />
                        <span>Job letter samples</span>
                        <br />
                      </GridItem>
                    </Grid>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>

            <Spacer></Spacer>
            <Stack direction="row" spacing={4} align="center" mr={{ md: 8 }}>
              <NavLink to="/sigin">
                {" "}
                <Button colorScheme="blue" variant="outline" borderRadius="md">
                  Login
                </Button>
              </NavLink>
              <NavLink to="signup">
                {" "}
                <Button colorScheme="red" variant="solid" borderRadius="md">
                  Register
                </Button>
              </NavLink>
              <Menu>
                <MenuButton
                  color={"black"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  For Employers
                </MenuButton>
                <MenuList backgroundColor={"white"} color={"black"}>
                  <MenuItem>Buy Online</MenuItem>
                  <MenuItem>Hiring Solutions</MenuItem>
                  <MenuItem>Employer Login</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </VStack>
      </Box>
    </div>
  );
};

export default Navbar;
