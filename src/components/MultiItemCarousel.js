import React from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseCard from './CourseCard';

function MultiItemCarousel() {
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
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="multiItem__carousel__box">
            <h2 className="multiItem__carousel__header">Courses</h2>
            <Slider {...settings}>
                <div >
                    <CourseCard
                        title="Master Python in 21 days with our mentors"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        url="https://placeimg.com/480/480/animals"
                    />
                </div>
                <div >
                    <CourseCard
                        title="Master Python in 21 days with our mentors"
                        description="Nullam feugiat nisi vitae enim venenatis aliquam."
                        url="https://placeimg.com/480/480/nature"
                    />
                </div>
                <div >
                    <CourseCard
                        title="Master Python in 21 days with our mentors"
                        description="Vivamus imperdiet bibendum arcu, eu ultricies diam pellentesque quis."
                        url="https://placeimg.com/480/480/people"
                    />
                </div>
                <div>
                    <CourseCard
                        title="Master Python in 21 days with our mentors"
                        description="Fusce at posuere tellus. Ut luctus justo sit amet tellus fermentum"
                        url="https://placeimg.com/480/480/animals"
                    />
                </div>
                <div >
                    <CourseCard
                        title="Master Python in 21 days with our mentors"
                        description="Curabitur vestibulum neque sed enim dignissim, a tempor ex ultrices."
                        url="https://placeimg.com/480/480/people"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default MultiItemCarousel;
