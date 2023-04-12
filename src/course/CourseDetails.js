//chakra ui components
import { Box, Flex, Heading, Text, Button, HStack, Grid } from "@chakra-ui/react";

//icons
import { TbSettings2 } from "react-icons/tb"
import { GrLanguage } from "react-icons/gr"
import { AiOutlineVideoCamera, AiOutlineTrophy } from "react-icons/ai"
import { FaFileDownload } from "react-icons/fa"
import { BiNote } from "react-icons/bi"
import { MdOutlineLanguage } from "react-icons/md"

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
        {
            name: "React Router",
            duration: "30 minutes",
            topics: [
                { name: "Routing basics", duration: "10 minutes" },
                { name: "Route parameters", duration: "10 minutes" },
                { name: "Nested routes", duration: "10 minutes" }
            ]
        },
        {
            name: "React Native",
            duration: "1 hour 30 minutes",
            topics: [
                { name: "Introduction to React Native", duration: "10 minutes" },
                { name: "Creating a new project", duration: "15 minutes" },
                { name: "Components and styling", duration: "30 minutes" },
                { name: "Navigation in React Native", duration: "20 minutes" },
                { name: "Using APIs in React Native", duration: "15 minutes" }
            ]
        },
        {
            name: "Server-side rendering with React",
            duration: "45 minutes",
            topics: [
                { name: "Introduction to server-side rendering", duration: "10 minutes" },
                { name: "Setting up a server-side rendering project", duration: "15 minutes" },
                { name: "Server-side rendering with React", duration: "20 minutes" }
            ]
        },
        {
            name: "React Performance",
            duration: "1 hour",
            topics: [
                { name: "Optimizing React components", duration: "20 minutes" },
                { name: "Using shouldComponentUpdate", duration: "15 minutes" },
                { name: "React memoization", duration: "15 minutes" },
                { name: "Using React DevTools to improve performance", duration: "10 minutes" }
            ]
        }
        // add more lectures here
    ];
    const course = {
        thumbnail: "https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Introduction to React",
        price: 49.99,
    };

    return (
        //if you already have a parent div to put the component then remmove the first box
        <Box
            bgGradient="linear(to-b, #000000, #beb99e)"
        >
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
                                <TbSettings2 color="white" size="1.5rem" />
                                <Text color="white">
                                    Last updated 9/2019
                                </Text>
                            </HStack>
                            <HStack>
                                <MdOutlineLanguage color="white" size="1.5rem" />
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
                        <CourseCard thumbnail={course.thumbnail} title={course.title} price={course.price} />
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
