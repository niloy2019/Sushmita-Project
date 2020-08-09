import React, { useEffect,useState } from 'react';
import style from './Course.module.css'
import { BrowserRouter as Router} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";



const Course = ( {courses,loading}) => {

    if(loading){
        return <h2>Loading...</h2>
    }

    return(
            <div>
                <ul className='list-group mb-4'>
                    {courses.map(course => (
                        <li key={course._id} className='list-group-item' >
                            {course.courseName}
                        </li>
                    ))}

                </ul>
            </div>
    );
    
} 


export default Course