import React from 'react';
import CartItem from '../../CartItem/CartItem';
import './Cart.css'

const Cart = ({cart,removeItem,chooseOne,deleteItem}) => {
    // console.log(cart);
    return (
        <div className='cart-container'>
           <div className=''>
                <h3 className='text-primary fw-bold'>Seleted Foods</h3>
                <div className="dynamic-section">
                    {cart.map((cartItem, index) =><CartItem cartItem={cartItem} key={index} deleteItem={deleteItem}></CartItem>)}
                </div>
                <button onClick={chooseOne} className='choose-btn-1 border-0 px-3 pt-2 fw-bold'><p>CHOOSE 1 FOR ME</p></button><br />
                <button onClick={removeItem} className='choose-btn-2 border-0 px-3 pt-2 fw-bold '><p>CHOOSE AGAIN</p></button>  
           </div>
        </div>
    );
};

export default Cart;