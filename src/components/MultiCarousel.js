import React from 'react';
import { Carousel, Card } from 'antd';
import "./carousel.css"

function MultiCarousel() {
    return (
        <div className='carousel__box'>
            <Carousel autoplay slidesToShow={3}>
                <div className='carousel__item__box'>

                </div >
                <div className='carousel__item__box'>
                </div >
                <div className='carousel__item__box'>

                </div>
                <div className='carousel__item__box'>
                </div>

            </Carousel>
        </div>
    );
}

export default MultiCarousel;
