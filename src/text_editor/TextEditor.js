import React, { useState } from "react";
import {
    Input,
    Text,
    Textarea,
    Select,
    Button,
    CircularProgress,
    CloseButton,
    Flex,
    Image,
    Box,
    useToast,
} from "@chakra-ui/react";

import "./textEditor.css";

export default function TextEditor() {
    const toast = useToast();

    //state for post data without image
    const [postData, setPostData] = useState({
        title: "",
        description: "",
        category: "",
    });

    //image uploading logic and data
    const [images, setImages] = useState([]);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        //Tasks to-do
        //bug fixed but need some testing
        //check if it is a valid image file or not =>done
        //dissolve the error appearing if you cancel instead of selecting a image =>done
        if (file.type.split('/')[0] === 'image') {
            try {
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

            }
        } else {
            console.log('This is not an image file');
            return;
        }

    };

    const handleImageDelete = (index) => {
        setImages((prevImages) => {
            const newImages = [...prevImages];
            newImages.splice(index, 1);
            return newImages;
        });
    };
    //image uploading logic end

    //post data logic without image
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setPostData((prevValue) => ({ ...prevValue, [name]: value }));
    };

    //submission of whole post data
    //async might be req for image uploading to api
    const handleSavePost = (e) => {
        if (postData.title.trim() === "") {
            toast({
                title: "Error",
                description: "Please enter a title",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        if (postData.description.trim() === "") {
            toast({
                title: "Error",
                description: "Please enter a description",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        if (postData.category.trim() === "") {
            toast({
                title: "Error",
                description: "Please select a category",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        console.log(postData, images);

        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setPostData({
                    title: "",
                    description: "",
                    category: "",
                })

            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="text__editor__background">
            <div className="text__editor__box">
                {/* title */}

                <Text fontSize="xl" color="black">
                    Title *
                </Text>
                <Input
                    mb="2rem"
                    name="title"
                    value={postData.title}
                    onChange={handleOnChange}
                    className="text__editor__input"
                    color="black"
                />

                {/* description  */}

                <Text fontSize="xl" color="black">
                    Description *
                </Text>
                <Textarea
                    h="30vh"
                    mb="2rem"
                    color="black"
                    name="description"
                    value={postData.description}
                    onChange={handleOnChange}
                    className="text__editor__input"
                />

                {/* image uploading section */}

                <Text fontSize="xl" color="black">
                    Upload
                </Text>
                <Box p="8">
                    <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
                        <Input
                            type="file"
                            datamaxsize="1024"
                            accept="image/*"
                            onChange={handleImageUpload}
                            isDisabled={images.length >= 2}
                            display="none"
                            id="image-input"
                        />
                        <label htmlFor="image-input">
                            <Button
                                as="div"
                                size="sm"
                                variant="outline"
                                colorScheme="white"
                                borderWidth="2"
                                borderColor="black"
                                w="8rem"
                                h="8rem"
                                cursor="pointer"
                                disabled={images.length >= 2}
                                _disabled={{
                                    opacity: 0.4,
                                    cursor: "not-allowed",
                                }}
                            >
                                <Box
                                    as="span"
                                    color="black"
                                    fontSize="sm"
                                    border="black"
                                >
                                    Upload Image
                                </Box>
                            </Button>
                        </label>
                        {images.length < 1 ? "" : images.map((image, index) => (
                            <Flex w={{ base: "35%", md: "15%" }}
                                h={{ base: "35%", md: "15%" }}
                                mb={{ base: "4" }}
                                mr={{ base: "0", md: "4" }}
                                key={index} position="relative" ml={2}>
                                <Box>
                                    <CloseButton
                                        size="lg"
                                        fontWeight="bold"
                                        borderWidth="2px"
                                        borderColor="black"
                                        borderRadius="50%"
                                        color="black"
                                        position="absolute"
                                        top="-0.5rem"
                                        right="-0.5rem"
                                        onClick={() => handleImageDelete(index)}
                                    />
                                </Box>
                                <Box
                                    h="8rem"
                                    w="15rem"
                                    boxShadow="md"

                                >
                                    <Image
                                        w="100%"
                                        h="100%"
                                        objectFit="cover"
                                        src={URL.createObjectURL(image.file)}
                                        alt="Uploaded image"
                                    />
                                </Box>
                            </Flex>
                        ))}
                    </Flex>
                </Box>
                {/* image uploading section end */}

                {/* select category */}
                <Text fontSize="xl" color="black">
                    Category *
                </Text>
                <Select
                    mb="2rem"
                    // w="25%"
                    name="category"
                    value={postData.category}
                    onChange={handleOnChange}
                    placeholder="Select option"
                    className="text__editor__input"
                    color="black"
                >
                    <option style={{ color: "black" }} value="option1">
                        Option 1
                    </option>
                    <option style={{ color: "black" }} value="option2">
                        Option 2
                    </option>
                    <option style={{ color: "black" }} value="option3">
                        Option 3
                    </option>
                </Select>

                {/* save and cancel button */}

                <div className="text__editor__button__box">
                    <Button
                        bg="black"
                        color="white"
                        _hover={{ bg: "red" }}
                        className="text__editor__button">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSavePost}
                        bg="black"
                        color="white"
                        _hover={{ bg: "gray" }}
                        className="text__editor__button"
                    >
                        Apply
                    </Button>
                </div>
            </div>
        </div>
    );
}
