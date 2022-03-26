import React from 'react';
import './Quiz.css'

const Quiz = () => {
    return (
        <div className='quiz-container container d-md-flex pb-4'>
            <div className='me-md-3'>
                <h2>Question 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur veritatis cum sapiente ratione provident, alias, officia placeat ipsum temporibus ad perspiciatis eaque aliquam, quasi sint reprehenderit atque molestias optio inventore maxime ipsa dolorum! Modi facere magnam natus iure ipsum!</p>
            </div>
            <div>
                <h2>Question 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur veritatis cum sapiente ratione provident, alias, officia placeat ipsum temporibus ad perspiciatis eaque aliquam, quasi sint reprehenderit atque molestias optio inventore maxime ipsa dolorum! Modi facere magnam natus iure ipsum!</p>
            </div>
        </div>
    );
};

export default Quiz;