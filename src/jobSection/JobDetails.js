import React, { useState } from "react";
import { Box, Flex, Text, HStack, Button, UnorderedList, ListItem } from "@chakra-ui/react";

//components
import CompanyCard from "./CompanyCard";

//icons 
import { FaSuitcase } from "react-icons/fa";
import { CgNotes } from "react-icons/cg"
import { AiOutlineUnorderedList } from "react-icons/ai"




const JobDetails = ({ job }) => {
    let responsibility = job.responsibilities.split("\r\n")
    const [showAllSkills, setShowAllSkills] = useState(false);
    const toggleShowAll = () => {
        setShowAllSkills((prevShowAllSkills) => !prevShowAllSkills);
    };
    const displayedSkills = showAllSkills ? job.skills : job.skills.slice(0, 3);
    const hiddenSkillsCount = job.skills.length - displayedSkills.length;
    return (
        <Box padding="4" margin="3">
            <Text fontSize="xl" fontWeight="bold">
                {job.title}
            </Text>
            <Text >{job.organisation.title}</Text>
            <Text >{job.location.city}  {job.job_type[0].title}</Text>
            <HStack m="2">
                <FaSuitcase size="1.5rem" />
                <Text m="4" fontWeight="medium">
                    {job.role}
                </Text>
            </HStack>
            <HStack m="2">
                <CgNotes size="1.5rem" />
                <Text m="4" fontWeight="medium">
                    500 - 1,001 employees
                </Text>
            </HStack>
            <HStack m="2">
                <AiOutlineUnorderedList size="1.5rem" />
                {displayedSkills.map((skill) => (
                    <Text key={skill.id}>{skill.title}</Text>
                ))}
                {hiddenSkillsCount > 0 && (
                    <Button variant="link" color="black !important" textDecoration="none" onClick={toggleShowAll}>
                        {showAllSkills ? "Show less" : `+ ${hiddenSkillsCount} more`}
                    </Button>
                )}
            </HStack>
            <Flex m="4">
                <Button
                    m="4"
                    p="4"
                    w="8rem"
                    bg="black"
                    color="white"
                    borderRadius="28px"
                >Easy Apply</Button>
                <Button
                    m="4"
                    p="4"
                    w="8rem"
                    bg="black"
                    color="white"
                    borderRadius="28px"
                >Save</Button>
            </Flex>
            <Text m="4" fontSize="xl" fontWeight="bold">
                About the job
            </Text>
            <Text m="4" fontSize="l" fontWeight="bold">Job Brief</Text>
            <Text m="4" >We are currently hiring a Performance Marketing manager with a Successful track record to drive revenue, user acquisition and brand awarness huivhpiurebvibe onvrobewubvuo oivbeoibrvon oj ivrobje  ivneornoivn </Text>
            <Text m="4" fontSize="xl" fontWeight="bold">Main Responsibilities of a Performance Marketing Manager</Text>
            <Text ml="4" fontSize="l" fontWeight="bold">Your responsibilites will include:</Text>
            <UnorderedList ml="10" >
                {responsibility.map((res, index) => (
                    <ListItem key={index}>{res}</ListItem>
                ))}
            </UnorderedList>

            {/* pass the company data props to the company card component */}
            <CompanyCard
                logoSrc={job.organisation.media}
                name={job.organisation.title}
                customerService="24/7 customer support"
                numOfEmployees={1000}
                about={job.organisation.description}
            />

        </Box>
    );
};

export default JobDetails;