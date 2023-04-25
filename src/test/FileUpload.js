import { useState } from "react";
import {
    Box,
    Button,
    Flex,
    Text,
    IconButton,
    useToast,
} from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai"

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const toast = useToast();

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) {
            return;
        }
        if (selectedFile.type !== "application/pdf") {
            toast({
                title: "Invalid file type",
                description: "Please upload a PDF file.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        setFile(selectedFile);
    };

    const handleCancelClick = () => {
        setFile(null);
    };

    return (
        <Flex alignItems="center" justifyContent="center">
            <Box>
                <Button as="label" htmlFor="resume-upload">
                    Upload Resume
                </Button>
                <input
                    type="file"
                    id="resume-upload"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                />
            </Box>
            {file && (
                <Box ml={4}>
                    <Flex alignItems="center">
                        <Text fontSize="sm">{file.name}</Text>
                        <IconButton
                            icon={<AiOutlineCloseCircle />}
                            size="xs"
                            ml={2}
                            onClick={handleCancelClick}
                            aria-label="Cancel"
                        />
                    </Flex>
                </Box>
            )}
        </Flex>
    );
};

export default FileUpload;
