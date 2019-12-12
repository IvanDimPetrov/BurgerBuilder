import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];

    for (let [key, value] of Object.entries(props.ingredients)) {
        ingredients.push(<span style={{ marginRight: "20px", textTransform: "capitalize", display: "inline-block", border: "1px solid #ccc", padding: "5px"}} 
                               key={ key }>
                            {key}: ({ value })
                          </span>)
    }

    return (
        <div className={ classes.Order }>
            Ingredients: { ingredients }
            <p>Price: { props.totalPrice.toFixed(2) } Leva</p>
        </div>)
};

export default order;