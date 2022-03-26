import React from 'react';
import './CartItem.css'
// font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

const CartItem = ({cartItem,deleteItem}) => {
    const {name, img,id} = cartItem;
    return (
        <div className='dynamic-cartitem'>
            <img src={img} alt="" className='img-fluid' />
            <h5>{name}</h5>
            <span className='delete-btn'><FontAwesomeIcon onClick={()=>deleteItem(id)} icon={faTrash}></FontAwesomeIcon></span>
        </div>
    );
};

export default CartItem;