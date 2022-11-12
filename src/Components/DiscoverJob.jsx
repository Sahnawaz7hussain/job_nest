import React from "react";
import Carousel from "react-grid-carousel";
import "../Styles/DiscoverJob.css";
import { PopularRolesData } from "../Data/PopularRolesData";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Box, Text } from "@chakra-ui/react";

const DiscoverJob = () => {
  //  pending
  PopularRolesData.map((items) => {
    // console.log(items.ele)
  });


//  pending
PopularRolesData.map((items) => {
    // console.log(items.ele)
  })


  // PopularRolesData.map((items) => {
  //   console.log(items.ele)
  // })

  return (

    <Box as="div" className="discoverMainContainer">
      <Carousel cols={3} rows={1}>
        {PopularRolesData.map((items, index) => (
          <Carousel.Item key={index}>
            <Box className="discoverCards">
              {items.ele.map((element, index) => (
                <Box className="discoverSingleCard" key={index}>
                  <Box className="discoverRoles">
                    <Text className="discoverRolesName">{element.name}</Text>
                    <Box>
                      <Text className="discoverRolesJob">{element.jobs}</Text>
                      <Text>
                        <HiOutlineChevronRight />
                      </Text>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};
export default DiscoverJob;
