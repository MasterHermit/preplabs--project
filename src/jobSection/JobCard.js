import React from 'react'
import { Box, Flex, Text, Image } from "@chakra-ui/react";


const JobCard = ({ job, onClick }) => {
    return (
        //tasks to-do

        <Box
            borderWidth="1px"
            borderRadius="lg"
            padding="2"
            margin="2"
            cursor="pointer"
            onClick={onClick}
        >
            <Flex>
                <Box marginRight="4">
                    <Image src="https://images.unsplash.com/photo-1544216291-b1dc4f7c8735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt={`${job.company} logo`} boxSize="75px" objectFit="contain" />
                </Box>
                <Box>
                    <Text fontSize="xl" marginTop="0" marginBottom="0" fontWeight="bold">
                        {job.title}
                    </Text>
                    <Text marginTop="0" marginBottom="0" >{job.company}</Text>
                    <Text marginTop="0" marginBottom="0">{job.location} ({job.type})</Text>
                    <Text marginTop="0" marginBottom="0" >2 Days ago</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default JobCard;
