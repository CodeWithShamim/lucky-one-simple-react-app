import React from 'react';

const Foods=({food}) => {
    const {img, name, price} = food;
    return (
        <div>
            <img src={img} alt="food-images" />
            <h3>{name}</h3>
            <h5>{price}</h5>
        </div>
    );
};

export default Foods;