import React, { useState, useEffect } from "react";
import { useMediaQuery, Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

//components
import JobDetails from "./JobDetails";
import JobCard from "./JobCard";
import MobileViewJobSection from "./MobileViewJobSection";
import JobDrawers from "./JobDrawers";
import JobDropdowns from "./JobDropdowns";


const JobSection = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isLargerThanMobile] = useMediaQuery("(min-width: 600px)");
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch job data from an API 

        const fetchData = async () => {
            try {
                const response = await fetch(" http://localhost:8000/jobs");
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);


    const handleScreenRender = (job) => {
        if (isLargerThanMobile) {
            handleJobCardClick(job);
        }
        else {
            console.log(job);
            navigate("/jobs/details", { state: { job } })
        }
    }

    const handleJobCardClick = (job) => {
        setSelectedJob(job);
    };

    const handleSearchInputChange = (event) => {
        // Implement search functionality here
    };

    const handleFilterChange = (event) => {
        // Implement filter functionality here
    };

    return (
        <>
            <JobDropdowns />
            <Flex
                bg="blackAlpha.600"
                flexDirection={{ base: "column", md: "row" }}
            >
                {/* to apply scroll in chakra we have to assign maxHeight Property */}
                <Box
                    width={{ base: "100%", md: "30%" }}
                    maxHeight="100vh"
                    overflowY="scroll"
                    css={{
                        "&::-webkit-scrollbar": {
                            width: "8px",
                            borderRadius: "8px",
                            backgroundColor: "white",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            borderRadius: "8px",
                            backgroundColor: "white",
                        },
                    }}
                >
                    <Flex flexDirection="column">
                        <Box marginTop="4">
                            {/* Render job cards here */}
                            {jobs.map((job) => (
                                <JobCard key={job.id} job={job} onClick={() => handleScreenRender(job)} />
                            ))}
                        </Box>
                    </Flex>
                </Box>
                <Box width={{ base: "100%", md: "70%" }} maxHeight="100vh" overflowY="auto">
                    {selectedJob && <JobDetails job={selectedJob} />}
                </Box>
            </Flex>
        </>
    );
};

export default JobSection;