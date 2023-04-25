import { Box, Flex, VStack, Icon, useBreakpointValue } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaBriefcase, FaBook } from "react-icons/fa";

const AdvanceSidebar = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex
            direction={isMobile ? "column" : "row"}
            height={isMobile ? "auto" : "100vh"}
            width={isMobile ? "100vw" : "auto"}
            position="fixed"
            top={0}
            left={0}
            bg="gray.200"
            boxShadow={isMobile ? "0 0 10px rgba(0, 0, 0, 0.3)" : "none"}
            zIndex={100}
        >
            <VStack
                width={isMobile ? "100%" : "auto"}
                height={isMobile ? "auto" : "100%"}
                spacing={4}
                p={4}
                display="flex"
                flexDirection={{ base: "row", md: "column" }}
            >
                <Box as="button" display="flex" alignItems="center">
                    <Icon as={FaHome} mr={2} />
                    {!isMobile && <Box>Home</Box>}
                </Box>
                <Box as="button" display="flex" alignItems="center">
                    <Icon as={FaInfoCircle} mr={2} />
                    {!isMobile && <Box>About</Box>}
                </Box>
                <Box as="button" display="flex" alignItems="center">
                    <Icon as={FaBriefcase} mr={2} />
                    {!isMobile && <Box>Jobs</Box>}
                </Box>
                <Box as="button" display="flex" alignItems="center">
                    <Icon as={FaBook} mr={2} />
                    {!isMobile && <Box>Course</Box>}
                </Box>
            </VStack>
        </Flex>
    );
};

export default AdvanceSidebar;
