import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { BsFillBookmarkFill } from "react-icons/bs"
import "./carousel.css"
export default function CourseCard({ title, description, url }) {
    return (
        <div className="courseCard__box">
            <div className="course__card">
                <img src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt={title} className="course__image" />
                <h3 className="course__title">{title}</h3>
                <p className="course__description">{description}</p>
                <div className="courseCard__rating__box">
                    <span className="courseCard__rating__bookmark"> <BsFillBookmarkFill />   </span>
                </div>
            </div>
        </div>
    )
}
