import React from 'react';
import './Food.css'
// font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const Foods=({food}) => {
    const {img, name, price} = food;
    return (
        <div className='food-cart col-md-4'>
            <img src={img} alt="food-images" className='img-fluid' />
            <h4 className='p-2'>{name}</h4>
            <h5>{price}</h5>
            <button className='btn-cart p-2'>
                <p>Add To Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Foods;