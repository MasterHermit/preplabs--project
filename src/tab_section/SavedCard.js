import React from 'react'
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { BsFillBookmarkFill } from "react-icons/bs"
export default function SavedCard() {
    return (
        <Flex
            width={{ base: "100%", md: "60%" }}
            borderWidth="2px"
            borderColor="black"
            bg="white"
            boxShadow="md"
            direction={{ base: "column", md: "row" }}
            p={4}
            mb="4"
        >
            <Flex w={{ base: "100%", md: "80%" }}>
                <Box
                    mr={4}>
                    <Image src="https://images.unsplash.com/photo-1544216291-b1dc4f7c8735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" boxSize="75px" objectFit="contain" />
                </Box>
                <Box
                >
                    <Text fontWeight="extrabold">Marketing Manager</Text>
                    <Text fontWeight="semibold">preplabs pvt ltd.</Text>
                    <Text fontWeight="semibold">Mumbai,India(On-site)</Text>
                </Box>
            </Flex>
            <Flex
                direction={{ base: "row-reverse", md: "column" }}
                w={{ base: "100%", md: "20%" }}
                justifyContent={{ base: "center", md: "space-between" }}
                alignItems={{ base: "center", md: "end" }}

            >
                <Box ml="6" >
                    <BsFillBookmarkFill />
                </Box>
                <Box>
                    <Button
                        borderRadius="full"
                        bg="black"
                        color="white"
                        _hover={{
                            bg: "gray",
                        }}
                    >Easy Apply</Button>
                </Box>
            </Flex>
        </Flex>
    )
}
