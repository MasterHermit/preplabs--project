import React, { useState } from "react"

//chakra ui components
import { Flex, Box, Input, Text, Button, Heading } from "@chakra-ui/react";

function WorkExperienceForm() {
    const [workExp, setWorkExp] = useState({
        designation: "",
        sector: "",
        startDate: "",
        endDate: "",
        company: "",
        country: "",
        city: "",
        state: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setWorkExp((prevWorkData) => (
            {
                ...prevWorkData, [name]: value
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { designation, sector, startDate, endDate, company, country, city, state } = workExp;
        if (designation.trim() === "") {
            alert("Please enter designation");
            return;
        }
        if (sector.trim() === "") {
            alert("Please enter sector");
            return;
        }
        if (startDate.trim() === "") {
            alert("please enter start date")
            return;
        }
        if (endDate.trim() === "") {
            alert("please enter end date")
            return;
        }
        if (company.trim() === "") {
            alert("please enter company")
            return;
        }
        if (country.trim() === "") {
            alert("please enter country")
            return;
        }
        if (city.trim() === "") {
            alert("please enter city")
            return;
        }
        if (state.trim() === "") {
            alert("please enter state")
            return;
        }

        console.log(workExp);
        // setWorkExp(
        //     {
        //         designation: "",
        //         sector: "",
        //         startDate: "",
        //         endDate: "",
        //         company: "",
        //         country: "",
        //         city: "",
        //         state: ""
        //     }
        // )
    }
    return (
        <Box minHeight="100vh" display="flex" alignItems="center">
            <Box

                bg="white"
                borderRadius="lg"
                boxShadow="lg"
                p="6"
                mx="auto"

                w={{ base: "90%", md: "80%" }}
            >
                <Heading as="h1">Work Experience</Heading>
                <Flex
                    direction={["column", "column", "row"]}
                    justifyContent="space-between"
                    flexWrap="wrap"
                    mb="6"
                >
                    <Box flex="1 1 45%" mr={[0, 0, "4"]} mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            Designation
                        </Text>
                        <Input
                            name="designation"
                            value={workExp.designation}
                            onChange={handleOnChange}
                        />
                    </Box>
                    <Box flex="1 1 45%" mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            Sector
                        </Text>
                        <Input
                            name="sector"
                            value={workExp.sector}
                            onChange={handleOnChange} />
                    </Box>
                    <Box flex="1 1 45%" mr={[0, 0, "4"]} mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            Start Date
                        </Text>
                        <Input
                            type="date"
                            placeholder=""
                            name="startDate"
                            value={workExp.startDate}
                            onChange={handleOnChange}
                        />
                    </Box>
                    <Box flex="1 1 45%" mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            End Date
                        </Text>
                        <Input type="date"
                            placeholder=""
                            name="endDate"
                            value={workExp.endDate}
                            onChange={handleOnChange}
                        />
                    </Box>
                    <Box flex="1 1 45%" mr={[0, 0, "4"]} mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            Company
                        </Text>
                        <Input name="company"
                            value={workExp.company}
                            onChange={handleOnChange} />
                    </Box>
                    <Box flex="1 1 45%" mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            Country
                        </Text>
                        <Input
                            name="country"
                            value={workExp.country}
                            onChange={handleOnChange}

                        />
                    </Box>
                    <Box flex="1 1 45%" mr={[0, 0, "4"]} mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            City
                        </Text>
                        <Input name="city"
                            value={workExp.city}
                            onChange={handleOnChange} />
                    </Box>
                    <Box flex="1 1 45%" mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            State
                        </Text>
                        <Input
                            name="state"
                            value={workExp.state}
                            onChange={handleOnChange}
                        />
                    </Box>
                </Flex>
                <Flex justifyContent="center">
                    <Button bg="black" color="white" mr="4">Cancel</Button>
                    <Button bg="black"
                        color="white"
                        onClick={handleOnSubmit}
                    >Save</Button>
                </Flex>
            </Box>
        </Box>
    );
}

export default WorkExperienceForm