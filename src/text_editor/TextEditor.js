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
    const [isLoading, setIsLoading] = useState(false);

    const handleImageUpload = async (event) => {
        setIsLoading(true);
        const file = event.target.files[0];
        //Tasks to-do
        //check if it is a valid image file or not
        //dissolve the error appearing if you cancel instead of selecting a image
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
            alert("no title bro");
            return;
        }
        if (postData.description.trim() === "") {
            alert("no description bro");
            return;
        }
        if (postData.category.trim() === "") {
            alert("no category bro");
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

                <Text fontSize="xl" color="white">
                    Title
                </Text>
                <Input
                    mb="2rem"
                    name="title"
                    value={postData.title}
                    onChange={handleOnChange}
                    className="text__editor__input"
                    colorScheme="white"
                    color="white"
                />

                {/* description  */}

                <Text fontSize="xl" color="white">
                    Description
                </Text>
                <Textarea
                    h="30vh"
                    mb="2rem"
                    name="description"
                    value={postData.description}
                    onChange={handleOnChange}
                    className="text__editor__input"
                />

                {/* image uploading section */}

                <Text fontSize="xl" color="white">
                    Upload
                </Text>
                <Box p="8">
                    <Flex alignItems="center">
                        <Input
                            type="file"
                            datamaxsize="1024"
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
                        {images.length < 1 ? "" : images.map((image, index) => (
                            <Box w="15%" h="15%" key={index} position="relative" ml={2}>
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
                {/* image uploading section end */}

                {/* select category */}
                <Select
                    mb="2rem"
                    // w="25%"
                    name="category"
                    value={postData.category}
                    onChange={handleOnChange}
                    placeholder="Select option"
                    className="text__editor__input"
                    color="white"
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
                    <Button bg="black" color="white" className="text__editor__button">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSavePost}
                        bg="black"
                        color="white"
                        className="text__editor__button"
                    >
                        Apply
                    </Button>
                </div>
            </div>
        </div>
    );
}
