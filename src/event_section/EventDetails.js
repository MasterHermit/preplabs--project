import React from 'react'

//chakra components
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

//icons
import { BsBuildings, BsCurrencyRupee } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { AiOutlineCalendar, AiOutlineHeart } from "react-icons/ai";
import { FiEye, FiClock, } from "react-icons/fi";

export default function EventDetails({ event }) {
    const hashTags = event.hashTags.map((hashTag) => {
        return (
            <Text mr="4" p="1" color="black" fontWeight="bold">#{hashTag}</Text>
        )
    })
    return (
        <Box padding="4" margin="3">
            <Flex>
                <Box marginRight="4">
                    <Image src="https://images.unsplash.com/photo-1544216291-b1dc4f7c8735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt={`${event.company} logo`} boxSize="75px" objectFit="contain" />
                </Box>
                <Box>
                    <Box mb="2">
                        <Text fontSize="xl" marginTop="0" marginBottom="0" fontWeight="bold">
                            {event.title}
                        </Text>
                        <HStack mb="2">
                            <BsBuildings size="1.5rem" />
                            <Text marginTop="0" marginBottom="0" >{event.company}</Text>
                        </HStack>
                        <HStack mb="2">
                            <GoLocation size="1.5rem" />
                            <Text marginTop="0" marginBottom="0" >{event.location}</Text>
                        </HStack>
                    </Box>

                    <Flex >
                        {hashTags}
                    </Flex>

                    <Flex>
                        <HStack mr="4" borderRadius="full" bg="black" color="white" px="4" py="2">
                            <AiOutlineCalendar size="1.5rem" />
                            <Text>Calender</Text>
                        </HStack>
                        <HStack mr="4" borderRadius="full" bg="black" color="white" px="4" py='2'>
                            <AiOutlineHeart size="1.5rem" />
                            <Text>Wishlist</Text>
                        </HStack>
                    </Flex>

                    <Box display="flex" justifyContent="space-between" m="4" justify="space-between">
                        <Flex>
                            <HStack mr="4">
                                <FiClock size="1.5rem" />
                                <Text>19 days left</Text>
                            </HStack>
                            <HStack>
                                <FiEye size="1.5rem" />
                                <Text>200 views</Text>
                            </HStack>
                        </Flex>
                        <Flex>
                            <HStack mr="4">
                                <BsCurrencyRupee size="1.5rem" />
                                <Text>100</Text>
                            </HStack>
                            <HStack>
                                <FiEye size="1.5rem" />
                                <Text>200 views</Text>
                            </HStack>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}
