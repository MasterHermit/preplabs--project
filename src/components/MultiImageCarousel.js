import React from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Image } from "@chakra-ui/react";


function MultiImageCarousel({ datas }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <FcNext />,
        prevArrow: <FcPrevious />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true
                }
            }
        ]
    };
    const toBeRendered = datas.map((data) => {
        return (
            <Box as="div" key={data.id} >
                <Image

                    px="2"
                    w="52rem"
                    h="30rem"
                    objectFit="contain"
                    src={data.src}
                    alt={data.alt}
                    transition="all 0.2s ease-in-out"
                    _hover={{
                        transform: "scale(1.1)"
                    }}
                />
            </Box>
        )
    })

    return (
        <Box w="80%">
            <Slider {...settings}>
                {toBeRendered}
            </Slider>
        </Box>
    );
}

export default MultiImageCarousel;
