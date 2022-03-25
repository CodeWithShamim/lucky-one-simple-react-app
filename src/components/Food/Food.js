import React from 'react';
import './Food.css'
// font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Foods=({food}) => {
    const {img, name, price} = food;
    return (
        <div className='food-cart'>
            <img src={img} alt="food-images" />
            <h3>{name}</h3>
            <h5>{price}</h5>
        </div>
    );
};

export default Foods;