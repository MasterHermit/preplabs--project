import React from 'react'
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";


export default function MyjobsAlertCard() {
    const status = "unapproved"
    let statusBgColor;
    let statusText;
    if (status.toLowerCase() === "unapproved") {
        statusBgColor = "red";
        statusText = "Unapproved";
    } else if (status.toLowerCase() === "inprogress") {
        statusBgColor = "purple";
        statusText = "In Progress";
    } else if (status.toLowerCase() === "active") {
        statusBgColor = "green";
        statusText = "Active";
    } else if (status.toLowerCase() === "inactive") {
        statusBgColor = "orange"
        statusText = "In Active";
    }
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
                direction={{ base: "row", md: "column" }}
                w={{ base: "100%", md: "20%" }}
                justifyContent="center"
                alignItems="center"

            >
                <Box>
                    <Button
                        borderRadius="full"
                        bg={statusBgColor}
                        color="white">{statusText}</Button>
                </Box>
            </Flex>
        </Flex>
    )
}
