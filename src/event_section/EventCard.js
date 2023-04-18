import React from 'react'
import { Box, Flex, Text, Image, HStack } from "@chakra-ui/react";

//icons
import { FiEye, FiClock, } from "react-icons/fi";
import { AiFillTrophy } from "react-icons/ai";

export default function EventCard({ event, onClick }) {
    const hashTags = event.hashTags.map((hashTag) => {
        return (
            <Text mr="4" p="1" color="black" fontWeight="bold">#{hashTag}</Text>
        )
    })
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            padding="2"
            margin="2"
            cursor="pointer"
            onClick={onClick}
        >
            <Flex>
                <Box marginRight="4">
                    <Image src="https://images.unsplash.com/photo-1544216291-b1dc4f7c8735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt={`${event.company} logo`} boxSize="75px" objectFit="contain" />
                </Box>
                <Box>
                    <Box mb="2">
                        <Text fontSize="xl" marginTop="0" marginBottom="0" fontWeight="bold">
                            {event.title}
                        </Text>
                        <Text marginTop="0" marginBottom="0" >{event.company}</Text>
                    </Box>
                    <Flex >
                        {hashTags}
                    </Flex>
                    <Flex justifyContent="space-between">
                        <HStack mr="2">
                            <FiEye size="1.5rem" />
                            <Text>200 views</Text>
                        </HStack>
                        <HStack mr="2">
                            <FiClock size="1.5rem" />
                            <Text>24 Days</Text>
                        </HStack>
                        <HStack mr="2">
                            <AiFillTrophy color="gold" size="1.5rem" />
                            <Text>
                                INR {event.prizeMoney}
                            </Text>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}
