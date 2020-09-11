import React from 'react';
import { useParams } from 'react-router-dom';
import courseData from '../../courseData';
import Course from '../Course/Course';


const SingleCourse = () => {

    const { SingleCourseKey } = useParams()
    const course = courseData.find(sc => sc.key === SingleCourseKey)
    // console.log(course);

    return (
        <div>
            <Course showEnrollBtn={false} course={course}></Course>
        </div>
    );
};

export default SingleCourse;