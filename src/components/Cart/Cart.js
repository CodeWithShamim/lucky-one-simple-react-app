import React from 'react';
import CartItem from '../../CartItem/CartItem';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
    return (
        <div className='cart-container'>
           <div>
                <h3>Seleted Foods</h3>
                <div className="dynamic-section">
                    {cart.map((cartItem, index) =><CartItem cartItem={cartItem} key={index}></CartItem>)}
                </div>
                <button className='choose-btn-1 border-0 px-3 pt-2 fw-bold'><p>CHOOSE 1 FOR ME</p></button><br />
                <button className='choose-btn-2 border-0 px-3 pt-2 fw-bold '><p>CHOOSE AGAIN</p></button>  
           </div>
        </div>
    );
};

export default Cart;