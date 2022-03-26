import React from 'react';
import './CartItem.css'
// font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

const CartItem = ({cartItem}) => {
    const {name, img} = cartItem;
    return (
        <div className='dynamic-cartitem'>
            <img src={img} alt="" className='img-fluid' />
            <p>{name}</p>
            <span className=''><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span>
        </div>
    );
};

export default CartItem;