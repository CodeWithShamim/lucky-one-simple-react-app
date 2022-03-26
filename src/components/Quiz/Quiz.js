import React from 'react';
import './Quiz.css'

const Quiz=() => {
    return (
        <div className='quiz-container container d-md-flex pb-4'>
            <div className='me-md-3'>
                <h2>How React Work?</h2>
                <p> React implements a virtual DOM. when it needs to read or write to the DOM, it will use the virtual representation it. Then the virtual DOM will try to find the most efficient way to update the browser DOM.
                React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements.</p>
            </div>
            <div>
                <h2>Props vs State?</h2>
                <p>The difference in Props vs State is Props read-only, Props can't be Modified. It is Immutable. On the other hand, State is asynchronous. It is both read and write. It is Mutable. State can be modified using this.useState().</p>
            </div>
        </div>
    );
};

export default Quiz;