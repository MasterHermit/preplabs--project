import React from 'react'
import { Center, Spinner, Box } from "@chakra-ui/react";

export default function LargeLoader() {
    return (
        <Box
            bg="gray.800"
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            zIndex="9999"
            opacity="0.8"
        >
            <Center height="100vh">
                <Spinner size="xl" color="blue.500" />
            </Center>
        </Box>
    )
}
