import { useState, useEffect } from 'react';
import { Box, Select, Text } from '@chakra-ui/react';

function EventDropdowns() {
  const [selectedItems, setSelectedItems] = useState(
    {
      allOpr: "",
      sortBy: "",
      allFilters: "",
      status: "",
      eligibility: "",
      category: ""
    }
  )

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setSelectedItems(prevValue => ({ ...prevValue, [name]: value }))
  }

  //useEffect will take all the parameters of selectedItems so page will re render if a value changes
  //however don't put the whole object as selectedItems to avoid re rendering of page in refresh also
  useEffect(() => {
    //api call for data with selected options 
    console.log(selectedItems);
  }, [selectedItems.jobType, selectedItems.expLevel, selectedItems.company, selectedItems.location])

  return (
    //Tasks to-do 
    //style the dropdown options and add a hover 


    <Box
      display="flex"
      justifyContent="left"
      mt="2"
    >
      {/* First Dropdown */}
      <Box
        borderWidth="1px"
        borderRadius="2xl"
        borderColor="black"
        boxShadow="xl"
        alignContent="center"
        ml="4"
        w="10%"
      >
        <Select
          borderRadius="2xl"
          // sx={{
          //     backgroundImage: "linear-gradient(90deg, rgba(254, 254, 254, 0.56) -11.62%, rgba(255, 255, 255, 0.16) 87.29%)",
          //     boxShadow: "2px 4px 50px rgba(0, 0, 0, 0.25)",
          // }}
          color="black"
          placeholder="All Opportunities"
          name="allOpr"
          value={selectedItems.allOpr}
          onChange={handleOnChange}
        >
          <option style={{ color: "black" }} value="1">Full Time</option>
          <option style={{ color: "black" }} value="2">Part Time</option>
        </Select>
      </Box>
      {/* Second Dropdown */}
      <Box
        borderWidth="1px"
        borderRadius="2xl"
        borderColor="black"
        boxShadow="xl"
        alignContent="center"
        ml="4"
        w="10%">
        <Select
          borderRadius="2xl"
          color="black"
          placeholder="Sort By"
          name="sortBy"
          value={selectedItems.sortBy}
          onChange={handleOnChange}
        >
          <option style={{ color: "black" }} value="entry-level">Entry Level</option>
          <option style={{ color: "black" }} value="mid-level">Mid Level</option>
          <option style={{ color: "black" }} value="senior-level">Senior Level</option>
        </Select>
      </Box>

      {/* Third Dropdown */}
      <Box
        borderWidth="1px"
        borderRadius="2xl"
        borderColor="black"
        boxShadow="xl"
        alignContent="center"
        ml="4"
        w="10%">
        <Select
          borderRadius="2xl"
          // sx={{
          //     backgroundImage: "linear-gradient(90deg, rgba(254, 254, 254, 0.56) -11.62%, rgba(255, 255, 255, 0.16) 87.29%)",
          //     boxShadow: "2px 4px 50px rgba(0, 0, 0, 0.25)",
          // }}
          color="black"
          placeholder="All Filters"
          name="allFilters"
          value={selectedItems.allFilters}
          onChange={handleOnChange}
        >
          <option style={{ color: "black" }} value="1">Gooogle</option>
          <option style={{ color: "black" }} value="2">Microsoft</option>
        </Select>
      </Box>

      {/* Fourth Dropdown */}
      <Box
        borderWidth="1px"
        borderRadius="2xl"
        borderColor="black"
        boxShadow="xl"
        alignContent="center"
        ml="4"
        w="10%">
        <Select
          borderRadius="2xl"
          // sx={{
          //     backgroundImage: "linear-gradient(90deg, rgba(254, 254, 254, 0.56) -11.62%, rgba(255, 255, 255, 0.16) 87.29%)",
          //     boxShadow: "2px 4px 50px rgba(0, 0, 0, 0.25)",
          // }}
          color="black"
          placeholder="Status"
          name="status"
          value={selectedItems.status}
          onChange={handleOnChange}
        >
          <option style={{ color: "black" }} value="1">On-site</option>
          <option style={{ color: "black" }} value="2">Remote</option>
        </Select>

      </Box>
      {/* Eligibility section */}
      <Box
        borderWidth="1px"
        borderRadius="2xl"
        borderColor="black"
        boxShadow="xl"
        alignContent="center"
        ml="4"
        w="10%">
        <Select
          borderRadius="2xl"
          // sx={{
          //     backgroundImage: "linear-gradient(90deg, rgba(254, 254, 254, 0.56) -11.62%, rgba(255, 255, 255, 0.16) 87.29%)",
          //     boxShadow: "2px 4px 50px rgba(0, 0, 0, 0.25)",
          // }}
          color="black"
          placeholder="Eligibility"
          name="eligibility"
          value={selectedItems.eligibility}
          onChange={handleOnChange}
        >
          <option style={{ color: "black" }} value="1">On-site</option>
          <option style={{ color: "black" }} value="2">Remote</option>
        </Select>

      </Box>

      {/* category section */}
      <Box
        borderWidth="1px"
        borderRadius="2xl"
        borderColor="black"
        boxShadow="xl"
        alignContent="center"
        ml="4"
        w="10%">
        <Select
          borderRadius="2xl"
          // sx={{
          //     backgroundImage: "linear-gradient(90deg, rgba(254, 254, 254, 0.56) -11.62%, rgba(255, 255, 255, 0.16) 87.29%)",
          //     boxShadow: "2px 4px 50px rgba(0, 0, 0, 0.25)",
          // }}
          color="black"
          placeholder="Category"
          name="category"
          value={selectedItems.category}
          onChange={handleOnChange}
        >
          <option style={{ color: "black" }} value="1">On-site</option>
          <option style={{ color: "black" }} value="2">Remote</option>
        </Select>

      </Box>
    </Box>
  );
}

export default EventDropdowns;