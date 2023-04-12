import { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const LectureAccordion = ({ lectures }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Accordion allowToggle>
            {lectures.map((lecture, index) => (
                <AccordionItem key={index}>
                    <h2>
                        <AccordionButton onClick={() => setIsOpen(!isOpen)}>
                            <Box flex="1" textAlign="left">
                                <Text color="white" fontWeight="bold">{lecture.name}</Text>
                            </Box>
                            <Flex alignItems="center">
                                <Text color="white" fontSize="sm" mr={2}>{lecture.duration}</Text>
                                <Icon color="white" as={isOpen ? GoChevronUp : GoChevronDown} />
                            </Flex>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        {lecture.topics.map((topic, index) => (
                            <Flex justifyContent="space-between" key={index} ml={4}>
                                <Text color="white">{topic.name}</Text>
                                <Text fontSize="sm" color="white">{topic.duration}</Text>
                            </Flex>
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default LectureAccordion;
