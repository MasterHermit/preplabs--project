import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const UserInterestChakra = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const interests = [
        'Hiking',
        'Photography',
        'Cooking',
        'Traveling',
        'Reading',
        'Gardening',
        'Painting',
        'Playing musical instruments',
        'Writing',
        'Yoga',
        'Running',
        'Cycling',
        'Swimming',
        'Birdwatching',
        'Volunteering',
        'Knitting',
        'Drawing',
        'Dancing',
        'Singing',
        'Board games',
        'Video games',
        'Watching movies',
        'Listening to podcasts',
        'Skiing',
        'Camping',
        'DIY crafts',
        'Sculpting',
        'Collecting stamps',
    ];

    const handleInterestClick = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
        } else {
            setSelectedInterests([interest, ...selectedInterests]);
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
                m="4"
                onClick={() => handleInterestClick(interest)}
                key={interest}
                style={{
                    backgroundColor: selectedInterests.includes(interest) ? 'black' : 'gray',
                    color: selectedInterests.includes(interest) ? "white" : "black"
                }}
                transition={"all ease-in-out 100ms"}
                _hover={{ backgroundColor: "black", transform: "scale(1.05)", color: "white !important" }}
            >
                {interest}
            </Button >
        )
    })
    const toBeRenderedSelectedInterests = selectedInterests.map((interest) => {
        return (
            <Button
                bg="gray"
                m="4"
                onClick={() => handleInterestClick(interest)}
                key={interest}
                style={{
                    backgroundColor: selectedInterests.includes(interest) ? 'black' : '',
                    color: selectedInterests.includes(interest) ? "white" : "black"
                }}
                transition={"all ease-in-out 100ms"}
                _hover={{ backgroundColor: "black", transform: "scale(1.05)", color: "white !important" }}
            >
                {interest}
            </Button >
        )
    })
    const css = {
        "&::-webkit-scrollbar": {
            width: "8px",
            borderRadius: "8px",
            backgroundColor: "white",
            display: "none"
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "8px",
            backgroundColor: "black",
        },
    }


    return (
        <Box display="flex" justifyContent="center" alignItems="center" minW="100vw">
            <Box w={{ base: "100%", md: "90%" }}
                p="6"
                mx="auto">
                <Text fontSize="3xl" fontWeight="extrabold">Choose Your Interests</Text>
                <Text fontWeight="semibold">Pick up your favorite topics to set up your fields</Text>
                <Box
                    mb="6"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                >
                    <Box w={{ base: "100%", md: "30%" }} >
                        <Input
                            placeholder="Search interests..."
                            w="100%"
                            mt="4"
                            borderWidth='1px' borderRadius="xl" borderColor="black"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Box>
                    <Box w={{ base: "auto", md: "70%" }} display="flex" flexWrap="wrap" ml="4">
                        {toBeRenderedSelectedInterests}
                    </Box>
                </Box>
                <Box

                    css={css}
                    maxHeight={{ base: "35vh", md: "100vh" }}
                    overflowY="scroll"
                    ml={{ base: '0', md: "12" }}
                    display="flex"
                    flexWrap="wrap"
                    borderWidth="1px"
                    borderRadius="xl"
                    borderColor="black"
                    boxShadow="xl"
                >
                    {toBeRenderedInterests}
                </Box>
                <Box mt="8" display="flex" justifyContent="center" alignItems="center">
                    <Button bg="black" color="white" mr="6" onClick={sendChoosenInterests}>Save</Button>
                    <Button bg="black" color="white" >Skip</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default UserInterestChakra;
