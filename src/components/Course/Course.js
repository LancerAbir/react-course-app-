import React, { useState } from 'react';
import './Course.css'
import CourseDetails from '../Course Details/CourseDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Course = (props) => {

    // Distructure
    const { name, img, price, key } = props.course


    // UseState Hook
    const [visibility, setVisibility] = useState(false)

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }

    const width = "25rem"
    const Mwidth = "45rem"

    const isTrue = props.showEnrollBtn

    return (
        <div>

            <div className="card" style={{ "width": isTrue === true ? width : Mwidth }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> <Link to={"/course/" + key}>{name}</Link> </h5>
                    <p className="card-text">Price ${price}</p>

                    <button className="btn btn-primary" onClick={toggleVisibility}>  Delails <FontAwesomeIcon icon={faAngleDown} /> </button>
                    {visibility ? <CourseDetails showEnrollBtn={props.showEnrollBtn} course={props.course} addToCartHandler={props.addToCartHandler}></CourseDetails> : []}

                </div>
            </div>
        </div>

    );
};

export default Course;