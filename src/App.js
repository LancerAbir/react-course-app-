import React, { useState } from 'react';
import courseData from './courseData'
import Course from './components/Course/Course';
import './App.css'
import Cart from './components/Cart/Cart';


function App() {

  const [courses] = useState(courseData)

  const [cart, setCart] = useState([])

  const addToCartHandler = (e) => {
    const newCart = [...cart, e]
    setCart(newCart)
  }

  return (
    <div className="container">
      <h1 className="text-center header bg-secondary text-white" >Online Crash Course</h1>
      <div className="row">
        <div className="col-md-9">
          <div className="course-box">
            <div className="row">
              {
                courses.map(course => <div className="col-md-6"> <Course key={course.key} addToCartHandler={addToCartHandler} course={course}></Course></div>)
              }
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <Cart cart={cart}> </Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
