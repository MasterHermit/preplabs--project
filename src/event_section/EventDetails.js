import React, { useState } from 'react'
//components
import MultiImageCarousel from '../components/MultiItemCarousel';

//chakra components
import { Box, Flex, HStack, Image, Text, Button, UnorderedList, ListItem } from "@chakra-ui/react";

//icons
import { BsBuildings, BsCurrencyRupee } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { AiOutlineCalendar, AiOutlineHeart, AiFillTrophy } from "react-icons/ai";
import { FiEye, FiClock, } from "react-icons/fi";



export default function EventDetails({ event }) {
    const [wishlist, setWishlist] = useState(false)
    function handleWishlistClick() {
        setWishlist(prevValue => !prevValue)
    }

    const data = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },]
    const datas = [
        {
            id: 1,
            src: 'https://placeimg.com/840/480/animals',
            alt: 'Image 1',
        },
        {
            id: 2,
            src: 'https://placeimg.com/840/480/nature',
            alt: 'Image 2',
        },
        {
            id: 3,
            src: 'https://placeimg.com/840/480/people',
            alt: 'Image 3',
        },
        {
            id: 1,
            src: 'https://placeimg.com/840/480/animals',
            alt: 'Image 1',
        },
        // ... add more data objects as needed
    ];

    const hashTags = event.hashTags.map((hashTag, index) => {
        return (
            <Text key={index} mr="4" p="1" color="black" fontWeight="bold">#{hashTag}</Text>
        )
    })
    return (
        //remove hover effects from wish list button
        <Box padding="4" margin="3">
            <Flex>
                <Box width="10%" marginRight="4">
                    <Image src="https://images.unsplash.com/photo-1544216291-b1dc4f7c8735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt={`${event.company} logo`} boxSize="75px" objectFit="contain" />
                </Box>
                <Box width="70%">
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

                    <Flex>
                        <Box>
                            <Button mr="4" bg="black" color="white" borderRadius="full">
                                Register
                            </Button>
                        </Box>
                        <Box>
                            <Button bg="black" color="white" borderRadius="full">
                                Save
                            </Button>
                        </Box>
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
                            <HStack ml="4">
                                <BsCurrencyRupee marginRight="0" size="1.5rem" />
                                <Text marginLeft="0">100</Text>
                            </HStack>
                        </Flex>
                    </Box>
                </Box>
            </Flex >
            <Box>
                <Box>
                    <Text marginBottom="0" fontWeight="bold" >Eligibility</Text>
                    <Text marginTop="0">All</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold" >About the Internhip</Text>
                    <Box>
                        <Text fontWeight="semibold">Black and blue Hiring for the position of trainee </Text>
                        <Text>
                            We are excited to announce that we are currently looking for a full stack developer intern to join our team. As a full stack developer intern, you will have the opportunity to work on a variety of exciting projects and gain hands-on experience with cutting-edge technologies.

                            The ideal candidate for this position should have a strong foundation in web development, with experience in both front-end and back-end technologies. You should be comfortable working with HTML, CSS, and JavaScript, as well as popular front-end frameworks like React, Vue, or Angular.
                        </Text>
                    </Box>
                    <Box>
                        <Text fontWeight="bold">Responsibilities of Candidate:</Text>
                        <UnorderedList>
                            {data.map((item) => (
                                <ListItem key={item.id}>{item.name}</ListItem>
                            ))}
                        </UnorderedList>
                    </Box>


                    <Box>
                        <Text fontWeight="bold">What are the important dates & destinations</Text>
                        <HStack>
                            <AiOutlineCalendar size="1.5rem" mr="4" />
                            <Box mt="2">
                                <Text marginTop="0" marginBottom="0">
                                    Registration deadline
                                </Text>
                                <Text marginTop="0" marginBottom="0">
                                    01 May 23,08:00 PM IST
                                </Text>
                            </Box>
                        </HStack>
                    </Box>

                    <Box mt="6">
                        <Text marginTop="0" marginBottom="0" fontWeight="bold">Contact The Organisers</Text>
                        <Flex mt="2">
                            <Box mr="8">
                                <Text marginTop="0" marginBottom="0">SaiStupa</Text>
                                <Text marginTop="0" marginBottom="0">+91 6574290241</Text>
                            </Box>
                            <Box>
                                <Text marginTop="0" marginBottom="0">SaiStupa</Text>
                                <Text marginTop="0" marginBottom="0">+91 6574290241</Text>
                            </Box>
                        </Flex>
                    </Box>

                    <Text fontWeight="extrabold" mt="4">What's at stake - Rewards and Prizes ?</Text>
                    <Box display="flex" mt="6">
                        <Box
                            w={{ base: "90%", md: "40%" }}
                            borderWidth="2px"
                            borderColor="black"
                            borderRadius="xl"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text fontWeight="bold" fontSize="xl">Winner</Text>
                            <Box w={{ base: "90%", md: "80%" }} >
                                <HStack display={"flex"} justifyContent={"space-between"}>
                                    <Text fontSize="2xl" fontWeight="extrabold">
                                        INR 6,000
                                    </Text>
                                    <AiFillTrophy size="8rem" color="gold" />
                                </HStack>
                            </Box>
                        </Box>
                    </Box>

                    <Box mt="4">
                        <Text marginTop="0" fontWeight="bold">In Pictures</Text>
                        <Box display="flex" justifyContent="center">
                            <MultiImageCarousel datas={datas} />
                        </Box>

                    </Box>

                </Box>
            </Box>
        </Box >
    )
}
