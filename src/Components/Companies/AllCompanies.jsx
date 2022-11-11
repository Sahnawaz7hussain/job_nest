import {
  Box,
  GridItem,
  Text,
  Grid,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import "./allcompanies.css";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCompniesActionFn } from "../../Redux/AppReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const AllCompanies = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { isLoading, isError, companies } = useSelector((store) => {
    return {
      isLoading: store.isLoading,
      isError: store.isError,
      companies: store.companies,
    };
  }, shallowEqual);

  useEffect(() => {
    const sector = searchParams.getAll("sector");
    const industry = searchParams.getAll("industry");
    const location = searchParams.getAll("location");
    if (location || companies.length === 0) {
      const queryParams = {
        params: {
          sector,
          industry,
          location,
        },
      };

      dispatch(getCompniesActionFn(queryParams));
    }
  }, [location.search, dispatch, searchParams]);
  console.log("locationn:::", location);
  return (
    <Box
      h={"auto"}
      w="70%"
      m="auto"
      mt="0px"
      mr="0px"
      // background="antiquewhite"
      border={"0px solid red"}
    >
      <Text fontSize={"19px"} color="blackAlpha.700" fontWeight={"700"}>
        Showing companies ({companies.length})
      </Text>
      <Box>
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
          gap={6}
          boxSizing="borderBox"
          py={"15px"}
        >
          {companies.length > 0 &&
            companies.map((item) => (
              <GridItem key={item.id} alignContent="center">
                <Link to={`/singlecompany/${item.id}`}>
                  <Box
                    className="companiesBoxContainer"
                    border={"1px solid lightgrey"}
                    h="315px"
                    display={"flex"}
                    flexDirection="column"
                    alignItems={"center"}
                    borderRadius="8px"
                    position={"relative"}
                  >
                    <Image
                      m="auto"
                      w="110px"
                      h="40px"
                      my="27px"
                      objectFit={"cover"}
                      src={item.image}
                    />
                    <Heading
                      as="h4"
                      fontSize={"20px"}
                      w="50%"
                      textAlign={"center"}
                      mb="15px"
                      color={"blackAlpha.800"}
                    >
                      {item.title}
                    </Heading>

                    <Text
                      fontSize={"15px"}
                      fontWeight="600"
                      color={"blackAlpha.700"}
                    >
                      Rating: {item.rating}{" "}
                      <Box as="span" color="gold">
                        ⭐
                      </Box>
                    </Text>
                    <Text
                      fontSize={"15px"}
                      fontWeight="600"
                      color={"blackAlpha.700"}
                    >
                      {item.review}.
                    </Text>
                    <Text
                      textAlign={"center"}
                      color={"blackAlpha.800"}
                      w="80%"
                      my="10px"
                      lineHeight={"1.2"}
                      fontWeight={"600"}
                    >
                      {item.description}
                    </Text>
                    <Box bottom="4" position={"absolute"}>
                      <Button
                        bg="blue.50"
                        color="blue.600"
                        borderRadius={"15px"}
                      >
                        View Jobs
                      </Button>
                    </Box>
                  </Box>
                </Link>
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllCompanies;
