import { Box, Checkbox, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sector, setSector] = useState(searchParams.getAll("sector") || []);
  const [industry, setIndustry] = useState(
    searchParams.getAll("industry") || []
  );
  const [locationFilter, setLocationFilter] = useState(
    searchParams.getAll("location") || []
  );
  const handleSectorOnChange = (e) => {
    const option = e.target.value;
    let newSector = [...sector];
    if (newSector.includes(option)) {
      newSector.splice(newSector.indexOf(option), 1);
    } else {
      newSector.push(option);
    }
    setSector(newSector);
  };
  // HANDLE INDUSTRY CHANGE
  const handleIndustryOnChange = (e) => {
    const option = e.target.value;
    const newIndustry = [...industry];
    if (newIndustry.includes(option)) {
      newIndustry.splice(newIndustry.indexOf(option), 1);
    } else {
      newIndustry.push(option);
    }
    setIndustry(newIndustry);
  };
  // HANDLE LOCATION FILTER ONCHANGE
  const handleLocationFilterOnChange = (e) => {
    const option = e.target.value;
    const newLocationFilter = [...locationFilter];
    if (newLocationFilter.includes(option)) {
      newLocationFilter.splice(newLocationFilter.indexOf(option), 1);
    } else {
      newLocationFilter.push(option);
    }
    setLocationFilter(newLocationFilter);
  };
  useEffect(() => {
    const params = {};
    sector && (params.sector = sector);
    industry && (params.industry = industry);
    locationFilter && (params.location = locationFilter);
    setSearchParams(params);
  }, [sector, setSearchParams, industry, locationFilter]);

  // console.log("sector", industry);
  return (
    <Box h="auto" w={"250px"}>
      <Box
        display={"flex"}
        alignItems="center"
        boxSizing="border-box"
        padding={"10px"}
        height={"auto"}
        w="100%"
        borderBottom={"1px solid grey"}
        pb="15px"
      >
        <CiFilter size={"22px"} />

        <Text ml="5px" fontSize={"17px"} fontWeight="600">
          Filters
        </Text>
      </Box>
      <Box
        borderBottom={"1px solid grey"}
        boxSizing={"border-box"}
        paddingBottom="40px"
      >
        <Text my="10px" fontWeight={"600"}>
          Sector
        </Text>
        <VStack align={"left"}>
          <Checkbox
            onChange={handleSectorOnChange}
            value={"public"}
            defaultChecked={sector.includes("public")}
          >
            <Text fontSize={"14px"}>Public</Text>
          </Checkbox>
          <Checkbox
            onChange={handleSectorOnChange}
            value={"private"}
            defaultChecked={sector.includes("private")}
          >
            <Text fontSize={"14px"}>Private</Text>
          </Checkbox>
        </VStack>
      </Box>
      {/* FILTER BASED ON COMPANY TYPE  */}
      <Box
        borderBottom={"1px solid grey"}
        boxSizing={"border-box"}
        paddingBottom="40px"
      >
        <Text my="10px" fontWeight={"600"}>
          Industy
        </Text>
        <VStack align={"left"} spacing="8px">
          <Checkbox
            onChange={handleIndustryOnChange}
            value={"banking"}
            defaultChecked={industry.includes("banking")}
          >
            <Text fontSize={"14px"}>Banking</Text>
          </Checkbox>
          <Checkbox
            onChange={handleIndustryOnChange}
            value={"itservicesandconsulting"}
            defaultChecked={industry.includes("itservicesandconsulting")}
          >
            <Text fontSize={"14px"}>IT Services & Consulting</Text>
          </Checkbox>
          <Checkbox
            onChange={handleIndustryOnChange}
            value={"ecommerce"}
            defaultChecked={industry.includes("ecommerce")}
          >
            <Text>E-Commerce</Text>
          </Checkbox>
          <Checkbox
            onChange={handleIndustryOnChange}
            value={"electronicsmanufacturing"}
            defaultChecked={industry.includes("electronicsmanufacturing")}
          >
            <Text fontSize={"14px"}>Electronics Manufacturing</Text>
          </Checkbox>
          <Checkbox
            onChange={handleIndustryOnChange}
            value={"bpocallcentre"}
            defaultChecked={industry.includes("bpocallcentre")}
          >
            <Text fontSize={"14px"}>BPO / Call Centre</Text>
          </Checkbox>
        </VStack>
      </Box>
      {/* FILTER ON THE BESIS OF LOCATION  */}
      <Box
        borderBottom={"0px solid grey"}
        boxSizing={"border-box"}
        paddingBottom="40px"
      >
        <Text my="10px" fontWeight={"600"}>
          Location
        </Text>
        <VStack align={"left"} spacing="8px">
          <Checkbox
            value={"Mumbai"}
            onChange={handleLocationFilterOnChange}
            defaultChecked={locationFilter.includes("Mumbai")}
          >
            <Text fontSize={"14px"}>Mumbai</Text>
          </Checkbox>
          <Checkbox
            value={"Delhi"}
            onChange={handleLocationFilterOnChange}
            defaultChecked={locationFilter.includes("Delhi")}
          >
            <Text fontSize={"14px"}>Delhi</Text>
          </Checkbox>
          <Checkbox
            value={"Bangalore"}
            onChange={handleLocationFilterOnChange}
            defaultChecked={locationFilter.includes("Bangalore")}
          >
            <Text>Bangalore</Text>
          </Checkbox>
          <Checkbox
            value={"Pune"}
            onChange={handleLocationFilterOnChange}
            defaultChecked={locationFilter.includes("Pune")}
          >
            <Text fontSize={"14px"}>Pune</Text>
          </Checkbox>
          <Checkbox
            value={"Chennai"}
            onChange={handleLocationFilterOnChange}
            defaultChecked={locationFilter.includes("Chennai")}
          >
            <Text fontSize={"14px"}>Chennai</Text>
          </Checkbox>
          <Checkbox
            value={"Kolkata"}
            onChange={handleLocationFilterOnChange}
            defaultChecked={locationFilter.includes("Kolkata")}
          >
            <Text fontSize={"14px"}>Kolkata</Text>
          </Checkbox>
          <Checkbox
            value={"Nagpur"}
            onChange={handleLocationFilterOnChange}
            defaultChecked={locationFilter.includes("Nagpur")}
          >
            <Text fontSize={"14px"}>Nagpur</Text>
          </Checkbox>
          <Checkbox
            value={"Hyderabad"}
            onChange={handleLocationFilterOnChange}
            defaultChecked={locationFilter.includes("Hyderabad")}
          >
            <Text fontSize={"14px"}>Hyderabad</Text>
          </Checkbox>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;
