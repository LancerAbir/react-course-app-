import React from 'react';
import Course from './Course/Course';
import Cart from './Cart/Cart';
import courseData from '../courseData';
import { useState } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../utilities/databaseManager';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Home = () => {

    const [courses] = useState(courseData)

    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const proKeys = Object.keys(savedCart)
        const previousCart = proKeys.map(existingKey => {
            const product = courseData.find(pd => pd.key === existingKey)
            product.quantity = savedCart[existingKey]
            return product
        })
        setCart(previousCart);
    }, [])

    const addToCartHandler = (e) => {
        const toBeAddKey = e.key
        const sameProduct = cart.find(pd => pd.key === toBeAddKey)
        let count = 1
        let newCart
        if (sameProduct) {
            count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(pd => pd.key !== toBeAddKey)
            newCart = [...others, sameProduct]
        } else {
            e.quantity = 1
            newCart = [...cart, e]
        }

        setCart(newCart)

        addToDatabaseCart(e.key, count)
    }


    return (
        <>
            <div className="col-md-9">
                <div className="course-box">
                    <div className="row">
                        {
                            courses.map(course => <div className="col-md-6">  <Course key={course.key} showEnrollBtn={true} addToCartHandler={addToCartHandler} course={course}></Course></div>)
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <Cart cart={cart}>
                    <Link to="/cartReview">
                        <button className="btn btn-info">Cart Review <FontAwesomeIcon icon={faSearch} /></button>
                    </Link>
                </Cart>
            </div>
        </>
    );
};

export default Home;