import React from 'react'
import { Carousel } from 'antd';
import "./carousel.css"
export default function SingleItemCarousel({ images }) {
    const carouselItems = images.map((image) => {
        return (
            <div key={image}>
                <img src={image} alt="image" />
            </div>
        )
    })
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <div className="carousel__box">
            <Carousel autoplay>
                <div>
                    <img className="carousel__item" src="https://placeimg.com/840/480/animals" alt="Animal" />
                </div>
                <div>
                    <img className="carousel__item" src="https://placeimg.com/840/480/nature" alt="Nature" />
                </div>
                <div>
                    <img className="carousel__item" src="https://placeimg.com/840/480/people" alt="People" />
                </div>
            </Carousel>
        </div>
    )
}
