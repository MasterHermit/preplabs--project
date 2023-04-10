import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";


//components
import JobDetails from "./JobDetails";
import JobCard from "./JobCard";


const JobSection = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        // Fetch job data from an API 

        const fetchData = async () => {
            try {
                const response = await fetch(" http://localhost:8000/jobs");
                const data = await response.json();
                console.log(data);
                setJobs(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);

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
        <Flex
            bg="skyblue"
            flexDirection={{ base: "column", md: "row" }}
        >
            <Box width={{ base: "100%", md: "30%" }} overflowY="scroll">
                <Flex flexDirection="column">
                    <Box marginTop="4">
                        {/* Render job cards here */}
                        {jobs.map((job) => (
                            <JobCard key={job.id} job={job} onClick={() => handleJobCardClick(job)} />
                        ))}
                    </Box>
                    <Box marginTop="4">
                        {/* Add pagination here */}
                    </Box>
                </Flex>
            </Box>
            <Box width={{ base: "100%", md: "70%" }}>
                {selectedJob &&
                    <JobDetails job={selectedJob} />
                }
            </Box>
        </Flex>
    );
};

export default JobSection;