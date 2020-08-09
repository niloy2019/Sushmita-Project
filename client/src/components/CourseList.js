import React, { Component, useState, useEffect } from 'react'
import $ from "jquery";
import Pagination from './Pegination'
import img1 from './assets/course1.PNG'
import img2 from './assets/course2.PNG'
import img3 from './assets/course3.PNG'
import img4 from './assets/course4.PNG'
import style from './Course.module.css'
import MobilePegination from './MobilePegination';

const  CourseList = () => {
    
      const [loading, setLoading] = useState(true);
      const [courses, setCourses] = useState([]);
      const [showPerPage, setShowPerPage] = useState(24);
      const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
      });
      const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
      };
    //   const [count, setCount] = useState(0);

      useEffect ( () => {
            const fetchCourse = async () => {
                    // setLoading(true);
                    $.ajax({
                        url: "http://localhost:5000/course/",
                        type: 'GET',
                        dataType: 'json', // added data type
                        success: function(res) {
                            setCourses(res)
                        }
                    });
                    setLoading(false);
            }
            fetchCourse();
     },[]);

     
     if(loading){
        return (
            <h1>Loading...</h1>
        )   
     }  

     

     let PeginationComponenet,MobilePeginationComponent,length,img
     let count=0

     if(courses.length){
         length=courses.length
        PeginationComponenet     = <div className={style.pegination}>
                                        <Pagination
                                            showPerPage={showPerPage}
                                            onPaginationChange={onPaginationChange}
                                            total={courses.length}
                                            className={style.pegination}
                                        />
                                    </div>
        MobilePeginationComponent=  <div  className={style.mobilePegination} > 
                                        <MobilePegination
                                            showPerPage={showPerPage}
                                            onPaginationChange={onPaginationChange}
                                            total={courses.length} 
                                        />   
                                    </div>                
     }

     

     
     
     return (
        <div className="App">
 
            <table>
                <thead>
                    <tr>    
                        <td  style={{width: "5%"}}>       </td>
                        <td  style={{width: "20%"}}>
                            <h1>Courses ({length}) </h1>
                        </td>
                        <td  style={{width: "50%"}}>       </td>
                        <td  style={{width: "34%",}}>
                        {PeginationComponenet}
                        {MobilePeginationComponent}
                        </td>
                    </tr>
                </thead>
            </table>
            
            <div className={style.recipes}>
        
                {courses.slice(pagination.start, pagination.end).map((course) => {
                
                    if(count%4==0){
                        img = <img  src={img4} className={style.img1} alt={img1} />
                     }else if(count%3==0){
                        img = <img  src={img3} className={style.img1} alt={img1} />
                     }else if(count%2==0){
                        img = <img  src={img2} className={style.img1} alt={img1} />
                     }else if(count%1==0){
                        img = <img  src={img1} className={style.img1} alt={img1} />
                     }

                     console.log(count)
                     count++
                    return  <div className={style.recipe} key={course._id} >
          
                                {img}
                            
                                <div >
                                     <h5 >{count}. &nbsp; {course.courseName}</h5>
                                     <p >HavardX</p>
                                     <br/>
                                     <p>Course</p>
                                </div>               
                    </div>     
                   
                })}

                {/* <div className={style.pegination2}>
                    {PeginationComponenet} 
                </div>    */}
            
            </div>
        </div>
    );
}


export default CourseList

// const [currentPage, setCurrentPage] = useState(1);
// const [coursesPerPage, setcoursesPerPage] = useState(10);



// console.log(courses)

// <div className="col-md-3 mb-3" key={course._id}  >
//     <div className="card">
//         <img  src={img} className={style.img} className="card-img-top"/>
//         <div className="card-body">
//             <h5 className="card-title">{course.courseName}</h5>
//             <p>HavardX</p>
//             <p>Course</p>
//         </div>
//     </div>
// </div>