import React, { useState } from "react";
import {
    Box,
    Button,
    CircularProgress,
    CloseButton,
    Flex,
    Image,
    Input,
    useToast,
} from "@chakra-ui/react";

const ImageUploader = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const toast = useToast();

    const handleImageUpload = async (event) => {
        setIsLoading(true);
        const file = event.target.files[0];

        try {
            // You can replace this with your actual image upload logic
            // const imageUrl = await uploadImageToServer(file);
            const newImage = { file };
            setImages((prevImages) => [...prevImages, newImage]);
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Failed to upload image.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageDelete = (index) => {
        setImages((prevImages) => {
            const newImages = [...prevImages];
            newImages.splice(index, 1);
            return newImages;
        });
    };

    return (
        <Box p="8">
            <Flex alignItems="center">
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    isDisabled={isLoading || images.length >= 2}
                    display="none"
                    id="image-input"
                />
                <label htmlFor="image-input">
                    <Button
                        as="div"
                        size="sm"
                        variant="outline"
                        colorScheme="white"
                        w="8rem"
                        h="8rem"
                        cursor="pointer"
                        disabled={isLoading || images.length >= 2}
                        _disabled={{
                            opacity: 0.4,
                            cursor: "not-allowed",
                        }}
                    >
                        {isLoading ? (
                            <CircularProgress size="28px" isIndeterminate color="teal" />
                        ) : (
                            <Box as="span" fontSize="sm">
                                Upload Image
                            </Box>
                        )}
                    </Button>
                </label>
                {images.map((image, index) => (
                    <Box
                        w="15%"
                        h="15%"
                        key={index} position="relative" ml={2}>
                        <CloseButton
                            size="md"
                            colorScheme="red"
                            position="absolute"
                            top="-0.5rem"
                            right="-0.5rem"
                            onClick={() => handleImageDelete(index)}
                        />
                        <Image
                            src={URL.createObjectURL(image.file)}
                            alt="Uploaded image"
                            objectFit="cover"
                        />
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default ImageUploader;
