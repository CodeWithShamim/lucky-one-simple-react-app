import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-container'>
           <div>
                <h3>Seleted Foods</h3>
                <button className='choose-btn-1 border-0 px-3 pt-2 fw-bold'><p>CHOOSE 1 FOR ME</p></button><br />
                <button className='choose-btn-2 border-0 px-3 pt-2 fw-bold '><p>CHOOSE AGAIN</p></button>  
           </div>
        </div>
    );
};

export default Cart;