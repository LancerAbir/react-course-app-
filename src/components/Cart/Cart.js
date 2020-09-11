import React from 'react';
import './Cart.css';


const Cart = (props) => {

    // Distructure
    const cartBox = props.cart

    // reduce loop function
    let price = cartBox.reduce((result, prd) => result + prd.price * prd.quantity, 0)

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
                {
                    props.children
                }
            </div>

        </div>
    );
};

export default Cart;