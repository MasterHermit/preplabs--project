import React, { useState, useEffect } from "react";
import { useMediaQuery, Box, Flex } from "@chakra-ui/react";

//components
import EventDetails from "./EventDetails"
import EventDropdowns from "./EventDropdowns";
import EventCard from "./EventCard";

export default function EventSection() {

    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        // Fetch job data from an API 

        const fetchData = async () => {
            try {
                const response = await fetch(" http://localhost:8000/events");
                const data = await response.json();
                console.log(data);
                setEvents(data);
                setSelectedEvent(data[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);


    const handleScreenRender = (event) => {
        // if (isLargerThanMobile) {
        handleJobCardClick(event);

        //   else {
        //       console.log(job);
        //   navigate("/jobs/details", {state: {job} })
        // }
    }

    const handleJobCardClick = (event) => {
        setSelectedEvent(event);
    };

    const handleSearchInputChange = (event) => {
        // Implement search functionality here
    };

    const handleFilterChange = (event) => {
        // Implement filter functionality here
    };
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
        //tasks to-do
        //go to JobDropdowns and fix dropdowns in mobile view
        <>
            <EventDropdowns />
            <Flex

                flexDirection={{ base: "column", md: "row" }}
            >
                {/* to apply scroll in chakra we have to assign maxHeight Property */}
                <Box
                    width={{ base: "100%", md: "30%" }}
                    maxHeight="100vh"
                    overflowY="scroll"
                    css={css}
                >
                    <Flex flexDirection="column">
                        <Box marginTop="4">
                            {/* Render job cards here */}
                            {events.map((event) => (
                                <EventCard key={event.id} event={event} onClick={() => handleScreenRender(event)} />
                            ))}
                        </Box>
                    </Flex>
                </Box>
                <Box width={{ base: "100%", md: "70%" }} maxHeight="100vh" overflowY="scroll" css={css}>
                    {selectedEvent && <EventDetails event={selectedEvent} />}
                </Box>
            </Flex>
        </>
    );

}
