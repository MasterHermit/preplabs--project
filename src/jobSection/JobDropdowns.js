import { useState, useEffect } from 'react';
import { Box, Select, Text } from '@chakra-ui/react';

function JobDropdowns() {
    const [selectedItems, setSelectedItems] = useState(
        {
            jobType: "",
            expLevel: "",
            company: "",
            location: "",
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
        //while putting in original section remove bg from main box 
        //style the dropdown options and add a hover 

        <Box
            display="flex"
            justifyContent="left"
            bg="blackAlpha.600"
        >
            {/* First Dropdown */}
            <Box
                alignContent="center" ml="4" w="15%">
                <Select
                    borderRadius="2xl"
                    sx={{
                        backgroundImage: "linear-gradient(90deg, rgba(254, 254, 254, 0.56) -11.62%, rgba(255, 255, 255, 0.16) 87.29%)",
                        boxShadow: "2px 4px 50px rgba(0, 0, 0, 0.25)",
                    }}
                    color="white"
                    placeholder="Job Type"
                    name="jobType"
                    value={selectedItems.jobType}
                    onChange={handleOnChange}
                >
                    <option style={{ color: "black" }} value="full-time">Full Time</option>
                    <option style={{ color: "black" }} value="part-time">Part Time</option>
                    <option style={{ color: "black" }} value="contract">Contract</option>
                </Select>
            </Box>
            {/* Second Dropdown */}
            <Box alignContent="center" ml="4" w="15%">
                <Select
                    borderRadius="2xl"
                    sx={{
                        backgroundImage: "linear-gradient(90deg, rgba(254, 254, 254, 0.56) -11.62%, rgba(255, 255, 255, 0.16) 87.29%)",
                        boxShadow: "2px 4px 50px rgba(0, 0, 0, 0.25)",
                    }}
                    color="white"
                    placeholder="Experience Level"
                    name="expLevel"
                    value={selectedItems.expLevel}
                    onChange={handleOnChange}
                >
                    <option style={{ color: "black" }} value="entry-level">Entry Level</option>
                    <option style={{ color: "black" }} value="mid-level">Mid Level</option>
                    <option style={{ color: "black" }} value="senior-level">Senior Level</option>
                </Select>
            </Box>

            {/* Third Dropdown */}
            <Box alignContent="center" ml="4" w="15%">
                <Select
                    borderRadius="2xl"
                    sx={{
                        backgroundImage: "linear-gradient(90deg, rgba(254, 254, 254, 0.56) -11.62%, rgba(255, 255, 255, 0.16) 87.29%)",
                        boxShadow: "2px 4px 50px rgba(0, 0, 0, 0.25)",
                    }}
                    color="white"
                    placeholder="Company"
                    name="company"
                    value={selectedItems.company}
                    onChange={handleOnChange}
                >
                    <option style={{ color: "black" }} value="date-posted">Gooogle</option>
                    <option style={{ color: "black" }} value="job-type">Microsoft</option>
                    <option style={{ color: "black" }} value="location">Meta</option>
                </Select>
            </Box>

            {/* Fourth Dropdown */}
            <Box alignContent="center" ml="4" w="15%">
                <Select
                    borderRadius="2xl"
                    sx={{
                        backgroundImage: "linear-gradient(90deg, rgba(254, 254, 254, 0.56) -11.62%, rgba(255, 255, 255, 0.16) 87.29%)",
                        boxShadow: "2px 4px 50px rgba(0, 0, 0, 0.25)",
                    }}
                    color="white"
                    placeholder="Location"
                    name="location"
                    value={selectedItems.location}
                    onChange={handleOnChange}
                >
                    <option style={{ color: "black" }} value="new-york">On-site</option>
                    <option style={{ color: "black" }} value="los-angeles">Remote</option>
                    <option style={{ color: "black" }} value="chicago">Hybrid</option>
                </Select>

            </Box>
        </Box>
    );
}

export default JobDropdowns;