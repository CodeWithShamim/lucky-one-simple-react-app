import React, {useEffect, useState} from 'react';
import Cart from '../Cart/Cart';
import Foods from '../Food/Food';
import './Shop.css'

const Shop = () => {
    const [foods, setFoods] = useState([]);
    useEffect(()=>{
        fetch('foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data));
    },[]);

    const [cart, setCart] = useState([]);
    const addToCart = (food)=>{
        const newCart = [...cart, food];
        setCart(newCart);
    }
// remove all item form cart 
    const removeItem = () =>{
        setCart([])
    }

    // choose 1 item form cart 
    const chooseOne = () =>{
        const randomItem = cart[Math.floor(Math.random()*cart.length)];
        // console.log(randomItem);
        if(randomItem){
            setCart([randomItem])
        }
    }

    // delete item selected item from cart 
    const deleteItem = (id) =>{
        const restItem = cart.find(cartItem=> cartItem.id !== id);
        setCart(restItem);
        console.log(id);
        
    };

    // console.log(foods);
    return (
        <div className="shop-container">
            <h1 className='p-4 text-warning fw-bold fs-1'>Food House</h1>
            <div className="row mt-5">
                <div className="food-container col-md-8">
                    <div className="row g-5">
                         {foods.map(food=><Foods key={food.id} food={food} addToCart={addToCart}></Foods>)}
                    </div>
                </div>
                <div className="cart-container col-md-4">
                    <Cart cart={cart} removeItem={removeItem} chooseOne={chooseOne} deleteItem={deleteItem}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;