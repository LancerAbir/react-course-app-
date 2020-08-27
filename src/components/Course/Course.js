import React, { useState } from 'react';
import './Course.css'
import CourseDetails from '../Course Details/CourseDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {

    // Distructure
    const { name, img, price } = props.course

    // UseState Hook
    const [visibility, setVisibility] = useState(false)

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }


    return (
        <div>

            <div className="card" style={{ "width": "25rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price ${price}</p>

                    <button className="btn btn-primary" onClick={toggleVisibility}>  Delails <FontAwesomeIcon icon={faAngleDown} /> </button>
                    {visibility ? <CourseDetails course={props.course} addToCartHandler={props.addToCartHandler}></CourseDetails> : []}

                </div>
            </div>
        </div>

    );
};

export default Course;