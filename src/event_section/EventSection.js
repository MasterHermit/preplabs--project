import React, { useState, useEffect } from "react";
import { useMediaQuery, Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

//components
import EventDetails from "./EventDetails"
import EventDropdowns from "./EventDropdowns";
import EventCard from "./EventCard";

export default function EventSection() {

    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isLargerThanMobile] = useMediaQuery("(min-width: 600px)");
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch job data from an API 

        const fetchData = async () => {
            try {
                const response = await fetch(" http://localhost:8000/events");
                const data = await response.json();
                console.log(data);
                setEvents(data);
                //this is for showing a  deafult event details in large screen but not in mobile
                if (isLargerThanMobile) {
                    setSelectedEvent(data[0]);
                } else {
                    setSelectedEvent(null)
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        //the dependency is to re render if screen size adjusted
    }, [isLargerThanMobile]);


    const handleScreenRender = (event) => {
        if (isLargerThanMobile) {
            handleJobCardClick(event);
        }
        else {
            console.log(event);
            navigate("/events/details", { state: { event } })
        }
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
