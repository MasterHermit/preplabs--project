import { useState } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

function CompanyCard({ logoSrc, name, customerService, numOfEmployees, about }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <Box borderWidth="1px" borderRadius="xl" overflow="hidden" p={4}>
            <Flex alignItems="center">
                <Image src={logoSrc} boxSize="50px" objectFit="contain" mr={4} />
                <Text fontSize="xl" fontWeight="bold">{name}</Text>
            </Flex>
            <Flex alignItems="center" mt={2}>
                <Text mr={2}>Customer Services</Text>
                <Text ml={6} fontWeight="bold">{numOfEmployees} employees</Text>
            </Flex>
            <Box>
                {showMore ? about : `${about.substring(0, 300)}... `}
                <Button
                    ml="2"
                    variant="link"
                    onClick={() => setShowMore(prevVal => !prevVal)}>
                    {showMore ? "show less" : " show more"}
                </Button>
            </Box>
        </Box>
    );
}

export default CompanyCard;

