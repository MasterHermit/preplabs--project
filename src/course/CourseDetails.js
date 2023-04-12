//chakra ui components
import { Box, Flex, Heading, Text, Button, HStack, Grid } from "@chakra-ui/react";

//icons
import { TbSettings2 } from "react-icons/tb"
import { GrLanguage } from "react-icons/gr"
import { AiOutlineVideoCamera, AiOutlineTrophy } from "react-icons/ai"
import { FaFileDownload } from "react-icons/fa"
import { BiNote } from "react-icons/bi"

//components
import CourseCard from "./CourseCard";
import LectureAccordion from "./LectureAccordion";

function CourseDetails() {
    const description = [
        "Have a intermediate skill level of python programming",
        "Use the jupyter Notebook Enviroment",
        "Use the numpy library to create and manipulate arrays",
        "Use the pandas module with pythob to create and structure data",

    ];
    const lectures = [
        {
            name: "Introduction to React",
            duration: "1 hour",
            topics: [
                { name: "What is React?", duration: "10 minutes" },
                { name: "Setting up a React project", duration: "15 minutes" },
                { name: "Components and props", duration: "20 minutes" },
                { name: "State and lifecycle methods", duration: "15 minutes" },
                { name: "Handling user events", duration: "10 minutes" }
            ]
        },
        {
            name: "React Hooks",
            duration: "1.5 hours",
            topics: [
                { name: "Introduction to Hooks", duration: "15 minutes" },
                { name: "useState Hook", duration: "20 minutes" },
                { name: "useEffect Hook", duration: "30 minutes" },
                { name: "useContext Hook", duration: "30 minutes" },
                { name: "Custom Hooks", duration: "15 minutes" }
            ]
        },
        // add more lectures here
    ];
    return (
        <Box bg="blackAlpha.600" minW="100vw" minH="100vh" >
            <Box mx="8" py="8">
                <Flex justify="space-between">
                    <Box w="75%">
                        <Heading as="h1" size="xl" mb="4">Learning Python for Data Analysis And Visualization</Heading>
                        <Heading as="h2" size="l" mb="4" color="white">Learn Python and how to use it to analyze your data  and present your results and datas</Heading>
                        <Flex m="4">
                            <Button bg="black" color="white" borderRadius="2xl" mr="8">
                                Bestseller
                            </Button>
                            <Text>Rating Sytem</Text>
                        </Flex>
                        <Text color="white">Created by Saistupa</Text>
                        <Flex mb="12">
                            <HStack mr="12">
                                <TbSettings2 size="1.5rem" />
                                <Text color="white">
                                    Last updated 9/2019
                                </Text>
                            </HStack>
                            <HStack>
                                <GrLanguage size="1.5rem" />
                                <Text color="white">English</Text>
                            </HStack>
                        </Flex>
                        <Grid mb="12" templateColumns='repeat(2, 1fr)' spacing={4}>
                            {description.map((item) => (
                                <Text color="white" key={item}>{item}</Text>
                            ))}
                        </Grid>
                        <Grid templateColumns='repeat(2, 1fr)' spacing={4}>
                            <Box m="4">
                                <HStack mr="12">
                                    <AiOutlineVideoCamera color="white" size="1.5rem" />
                                    <Text color="white">
                                        21 hours on-demand video
                                    </Text>
                                </HStack>
                            </Box>
                            <Box m="4">
                                <HStack mr="12">
                                    <AiOutlineTrophy color="white" size="1.5rem" />
                                    <Text color="white">
                                        certificate of completion
                                    </Text>
                                </HStack>
                            </Box>
                            <Box m="4">
                                <HStack mr="12">
                                    <BiNote color="white" size="1.5rem" />
                                    <Text color="white">
                                        3 articles
                                    </Text>
                                </HStack>
                            </Box>
                            <Box m="4">
                                <HStack mr="12">
                                    <FaFileDownload color="white" size="1.5rem" />
                                    <Text color="white">
                                        4 downloadable resources
                                    </Text>
                                </HStack>
                            </Box>
                        </Grid>
                    </Box>
                    <Box w="25%">
                        <CourseCard />
                    </Box>
                </Flex>
                <Box mt="8">
                    {/* yes we could have created a global accordion component and use it anywhere we required
                but as we are using a css lib so we can always look for this accordion structure and change as your need */}
                    <LectureAccordion lectures={lectures} />
                </Box>
            </Box>
        </Box>
    );
}

export default CourseDetails;
