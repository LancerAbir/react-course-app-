import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    console.log(props.cart);
    // Distructure
    const cartBox = props.cart

    // reduce loop function
    let price = cartBox.reduce((result, prd) => result + prd.price, 0)

    // Discount
    const discount = price * 10 / 100

    // Tax
    const tax = price * 5 / 100

    // Grand Total
    const grandTotal = (price - discount) + tax

    // number Formatter 
    function formatNumber(num) {
        const getNumber = (num).toFixed(2)
        return Number(getNumber)
    }

    return (
        <div className="cart-box">
            <div className="cartDetails">
                <h1>Cart Box</h1>
                <h5>Total Selected Course <strong>{cartBox.length}</strong> </h5>
                <p>Course Price <strong>${formatNumber(price)}</strong> </p>
                <p>Discount 10%<strong>${formatNumber(discount)}</strong></p>
                <p>Tax 7%<strong>${formatNumber(tax)}</strong></p>
                <p className="totalCost">Total Price <strong>${formatNumber(grandTotal)}</strong></p>
                <button className="btn btn-danger">Check Out<FontAwesomeIcon icon={faShoppingBag} /></button>
            </div>

        </div>
    );
};

export default Cart;