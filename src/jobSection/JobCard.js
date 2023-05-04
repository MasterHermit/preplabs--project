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
                    <Image src={job.organisation.media} alt="company logo" boxSize="75px" objectFit="contain" />
                </Box>
                <Box>
                    <Text fontSize="xl" marginTop="0" marginBottom="0" fontWeight="bold">
                        {job.title}
                    </Text>
                    <Text marginTop="0" marginBottom="0" >{job.organisation.title}</Text>
                    <Text marginTop="0" marginBottom="0">{job.location.city} ({job.job_type[0].title})</Text>
                    <Text marginTop="0" marginBottom="0" >2 Days ago</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default JobCard;
