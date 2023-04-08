import React from 'react';
import { HStack, Flex, Box, Text } from '@chakra-ui/react';
import { FiHome, FiBook, FiBriefcase, FiClipboard, FiCalendar } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <Flex
            direction="column"
            position="sticky"
            top="0"
            height="100vh"
            width="20%"
            bg="black"
            color="white"
            px="4"
            py="8"
        >
            <Box
                as="a"
                href="/"
                display="flex"
                alignItems="center"
                justifyContent="left"
                w="60%"
                p="2"
                _hover={{ border: "2px solid white" }}
                borderRadius="0.5rem"
                mb="8"
            >
                <HStack >
                    <FiHome size="1.5rem" />
                    <Text size="1.5rem" ml="4" textAlign="center" fontWeight="medium">
                        HOME
                    </Text>
                </HStack>
            </Box>

            <Box
                as="a"
                href="/courses"
                display="flex"
                alignItems="center"
                justifyContent="left"
                w="60%"
                p="2"
                _hover={{ border: "2px solid white" }}
                borderRadius="0.5rem"
                mb="8"
            >
                <HStack>
                    <FiBook size="1.5rem" />
                    <Text ml="4" fontWeight="medium">
                        COURSES
                    </Text>
                </HStack>
            </Box>

            <Box
                as="a"
                href="/jobs"
                display="flex"
                alignItems="center"
                justifyContent="left"
                w="60%"
                p="2"
                _hover={{ border: "2px solid white" }}
                borderRadius="0.5rem"
                mb="8"
            >
                <HStack>
                    <FiBriefcase size="1.5rem" />
                    <Text ml="4" fontWeight="medium">
                        JOBS
                    </Text>
                </HStack>
            </Box>

            <Box
                as="a"
                href="/exams"
                display="flex"
                alignItems="center"
                justifyContent="left"
                w="60%"
                p="2"
                _hover={{ border: "2px solid white" }}
                borderRadius="0.5rem"
                mb="8">
                <HStack>
                    <FiClipboard size="1.5rem" />
                    <Text ml="4" fontWeight="medium">
                        EXAMS
                    </Text>
                </HStack>
            </Box>

            <Box
                as="a"
                href="/events"
                display="flex"
                alignItems="center"
                justifyContent="left"
                w="60%"
                p="2"
                _hover={{ border: "2px solid white" }}
                borderRadius="0.5rem"
                mb="8">
                <HStack>
                    <FiCalendar size="1.5rem" />
                    <Text ml="4" fontWeight="medium">
                        EVENTS
                    </Text>
                </HStack>
            </Box>
        </Flex>
    );
};

export default Sidebar;
