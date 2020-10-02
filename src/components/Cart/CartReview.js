import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import courseData from '../../courseData';
import { Card, Button } from 'react-bootstrap';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import happyImage from '../../images/giphy.gif'


const CartReview = () => {

    const [cart, setCart] = useState([])

    const [orderPlaced] = useState(false)

    const history = useHistory()
    const proceedCheckoutHandler = () => {
        history.push('/shipment')
    }
    const removeItem = (productKey) => {
        console.log("remove item", productKey);
        const newKey = cart.filter(pd => pd.key !== productKey)
        setCart(newKey)
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const saveDataInLocal = getDatabaseCart()
        const proKeys = Object.keys(saveDataInLocal)
        // const proValue = Object.values(saveDataInLocal)
        const cartPro = proKeys.map(key => {
            const allCourseData = courseData.find(cd => cd.key === key)
            allCourseData.quantity = saveDataInLocal[key]
            return allCourseData
        })
        setCart(cartPro)
    }, [])

    let thankYou
    if (orderPlaced) {
        thankYou = <img src={happyImage} alt="" />
    }


    return (

        <div className="row">
            <div className="col-md-9">
                <div className="course-box">
                    <div className="row">
                        <h1> Cart Items {cart.length} </h1>
                        {
                            cart.map(ct =>
                                <Card className="bg-dark text-white">
                                    <Card.Img src={ct.img} alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title>{ct.name}</Card.Title>
                                        <Card.Text>
                                            Price is {ct.price}
                                        </Card.Text>
                                        <Card.Text>
                                            Quantity {ct.quantity}
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                        <Button onClick={() => removeItem(ct.key)} className="btn btn-danger"> Remove Item </Button>
                                    </Card.ImgOverlay>
                                </Card>
                            )
                        }
                        {
                            thankYou
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <Cart cart={cart}>
                    <button onClick={proceedCheckoutHandler} className="btn btn-danger">Proceed Checkout <FontAwesomeIcon icon={faShoppingBag} /></button>
                </Cart>
            </div>
        </div>

    );
};

export default CartReview;