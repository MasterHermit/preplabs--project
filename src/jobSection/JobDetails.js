import React, { useState } from "react";
import { Box, Flex, Text, HStack, Button, UnorderedList, ListItem } from "@chakra-ui/react";

//components
import CompanyCard from "./CompanyCard";

//icons 
import { FaSuitcase } from "react-icons/fa";
import { CgNotes } from "react-icons/cg"
import { FcTodoList } from "react-icons/fc"
import { AiOutlineUnorderedList } from "react-icons/ai"




const JobDetails = ({ job }) => {
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
            <Text color="white">{job.company}</Text>
            <Text color="white">{job.location}  {job.type}</Text>
            <HStack m="2">
                <FaSuitcase color="white" size="1.5rem" />
                <Text m="4" color="white" fontWeight="medium">
                    full-time associate
                </Text>
            </HStack>
            <HStack m="2">
                <CgNotes color="white" size="1.5rem" />
                <Text m="4" color="white" fontWeight="medium">
                    500 - 1,001 employees
                </Text>
            </HStack>
            <HStack m="2">
                <AiOutlineUnorderedList color="white" size="1.5rem" />
                {displayedSkills.map((skill) => (
                    <Text color="white" key={skill}>{skill}</Text>
                ))}
                {hiddenSkillsCount > 0 && (
                    <Button color="white" variant="link" onClick={toggleShowAll}>
                        {showAllSkills ? "Show less" : `+ ${hiddenSkillsCount} more`}
                    </Button>
                )}
            </HStack>
            <Flex m="4">
                <Button
                    m="4"
                    bg="black"
                    color="white"
                    borderRadius="28px"
                >Easy Apply</Button>
                <Button
                    m="4"
                    bg="black"
                    color="white"
                    borderRadius="28px"
                >Save</Button>
            </Flex>
            <Text m="4" fontSize="xl" fontWeight="bold">
                About the job
            </Text>
            <Text m="4" fontSize="l" fontWeight="bold">Job Brief</Text>
            <Text m="4" color="white">We are currently hiring a Performance Marketing manager with a Successful track record to drive revenue, user acquisition and brand awarness huivhpiurebvibe onvrobewubvuo oivbeoibrvon oj ivrobje  ivneornoivn </Text>
            <Text m="4" fontSize="xl" fontWeight="bold">Main Responsibilities of a Performance Marketing Manager</Text>
            <Text ml="4" color="white" fontSize="l" fontWeight="bold">Your responsibilites will include:</Text>
            <UnorderedList ml="10" color="white">
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>

            {/* pass the company data props to the company card component */}
            <CompanyCard
                logoSrc="https://images.unsplash.com/photo-1544216291-b1dc4f7c8735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                name="Acme Inc."
                customerService="24/7 customer support"
                numOfEmployees={1000}
                about="Societe Generale is one of the leading European financial services groups. Based on a diversified and integrated banking model, the Group combines financial strength and proven expertise in innovation with a strategy of
                sustainable growth, aiming to be the trusted partner for its clients, committed
                to the positive transformations of society and the economy.
                Societe Generale is one of the leading European financial services groups. Based on a diversified and integrated banking model, the Group combines financial strength and proven expertise in innovation with a strategy of
                sustainable growth, aiming to be the trusted partner for its clients, committed
                to the positive transformations of society and the economy.
                "
            />

        </Box>
    );
};

export default JobDetails;