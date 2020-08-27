import React from 'react';
import './CourseDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faFastForward } from '@fortawesome/free-solid-svg-icons'

const CourseDetails = (props) => {

    // Distructure
    const { name, price, startIn, trainer, summary, totalClass } = props.course

    return (
        <div className="row details-box">
            <div className="col-md-5">
                <div className="summary">
                    <h5> <strong>Course Summary</strong> </h5>
                    {
                        summary.map(su => <li className="summary-list"> <FontAwesomeIcon icon={faFastForward} /> {su.value}</li>)
                    }
                </div>
            </div>
            <div className="col-md-7">
                <div className="details-content text-right">
                    <h5> <strong>{name}</strong> </h5>
                    <h6>Fixed Price: <strong>${price}</strong> </h6>
                    <h6>Trainer: <strong>{trainer}</strong> </h6>
                    <h6>Class Start in: <strong>{startIn}</strong> </h6>
                    <h6>Total Class: <strong>{totalClass}</strong> </h6>

                    <button onClick={() => props.addToCartHandler(props.course)} className="btn btn-success">Enroll Now <FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </div>
    );

}

export default CourseDetails;