import { Flex, Box, Input, Text, Button, Heading } from "@chakra-ui/react";

function WorkExperienceForm() {
    return (
        <Box minHeight="100vh" display="flex" alignItems="center">
            <Box

                bg="white"
                borderRadius="lg"
                boxShadow="lg"
                p="6"
                mx="auto"

                w={{ base: "90%", md: "80%" }}
            >
                <Heading as="h1">Work Experience</Heading>
                <Flex
                    direction={["column", "column", "row"]}
                    justifyContent="space-between"
                    flexWrap="wrap"
                    mb="6"
                >
                    <Box flex="1 1 45%" mr={[0, 0, "4"]} mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            Designation
                        </Text>
                        <Input />
                    </Box>
                    <Box flex="1 1 45%" mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            Sector
                        </Text>
                        <Input />
                    </Box>
                    <Box flex="1 1 45%" mr={[0, 0, "4"]} mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            Start Date
                        </Text>
                        <Input type="date" placeholder="" />
                    </Box>
                    <Box flex="1 1 45%" mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            End Date
                        </Text>
                        <Input type="date" placeholder="" />
                    </Box>
                    <Box flex="1 1 45%" mr={[0, 0, "4"]} mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            Company
                        </Text>
                        <Input />
                    </Box>
                    <Box flex="1 1 45%" mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            Country
                        </Text>
                        <Input />
                    </Box>
                    <Box flex="1 1 45%" mr={[0, 0, "4"]} mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            City
                        </Text>
                        <Input />
                    </Box>
                    <Box flex="1 1 45%" mb={[4, 4, 0]}>
                        <Text fontWeight="bold" mb="2">
                            State
                        </Text>
                        <Input />
                    </Box>
                </Flex>
                <Flex justifyContent="center">
                    <Button bg="black" color="white" mr="4">Cancel</Button>
                    <Button bg="black" color="white">Save</Button>
                </Flex>
            </Box>
        </Box>
    );
}

export default WorkExperienceForm