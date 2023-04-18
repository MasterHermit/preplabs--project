import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const UserInterestChakra = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const interests = ["React js", "Angular", "Vue", "Web Development", "machine Learning", "dancing", "ggfghf", "hvhgfghdvgvgh", "ytytvv", "jhvvhdvhj", "jhgsdhv"]
    const handleInterestClick = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    }

    const sendChoosenInterests = () => {
        console.log(selectedInterests);
        setSelectedInterests([]);
    }

    const filteredInterests = interests.filter((interest) => {
        return interest.toLowerCase().includes(searchTerm.toLowerCase());
    })

    //interests buttons
    const toBeRenderedInterests = filteredInterests.map((interest) => {
        return (
            <Button
                bg="gray"
                m="4"
                onClick={() => handleInterestClick(interest)}
                key={interest}
                style={{
                    backgroundColor: selectedInterests.includes(interest) ? 'skyBlue' : '',
                    color: selectedInterests.includes(interest) ? "white" : "black"
                }}
                transition={"all ease-in-out 100ms"}
                _hover={{ backgroundColor: "black", transform: "scale(1.05)", color: "white !important" }}
            >
                {interest}
            </Button >
        )
    })


    return (
        <Box display="flex" justifyContent="center" alignItems="center" minW="100vw">
            <Box w="90%"
                p="6"
                mx="auto">
                <Text fontSize="3xl" fontWeight="extrabold">Choose Your Interests</Text>
                <Text fontWeight="semibold">Pick up your favorite topics to set up your fields</Text>
                <Input
                    placeholder="Search interests..."
                    w={{ base: "90%", md: "30%" }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Box
                    ml={{ base: '0', md: "12" }}
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent="start"
                    flexWrap="wrap"

                >
                    {toBeRenderedInterests}
                </Box>
                <Box mt="8" display="flex" justifyContent="center" alignItems="center">
                    <Button bg="black" color="white" onClick={sendChoosenInterests}>Save</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default UserInterestChakra;
