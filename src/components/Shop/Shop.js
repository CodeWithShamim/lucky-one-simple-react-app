import React, {useEffect, useState} from 'react';
import Foods from '../Food/Food';
import './Shop.css'

const Shop = () => {
    const [foods, setFoods] = useState([]);
    useEffect(()=>{
        fetch('foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data));
    },[]);

    // console.log(foods);
    return (
        <div className="shop-container">
            <h2>Food House</h2>
            <div className="row">
                <div className="food-container col-md-8">
                    <div className="row  g-4 ">
                         {foods.map(food=><Foods key={food.id} food={food}></Foods>)}
                    </div>
                </div>
                <div className="cart-container col-md-4">
                    <h1>Cart container</h1>
                </div>
            </div>
        </div>
    );
};

export default Shop;