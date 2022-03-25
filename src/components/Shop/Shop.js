import React, {useEffect, useState} from 'react';
import Foods from '../Food/Food';

const Shop = () => {
    const [foods, setFoods] = useState([]);
    useEffect(()=>{
        fetch('foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data));
    },[]);

    // console.log(foods);
    return (
        <div className='shop-container'>
            <div className="food-container">
                {foods.map(food=><Foods key={food.id} food={food}></Foods>)}
            </div>
            <div className="cart-container"></div>
        </div>
    );
};

export default Shop;