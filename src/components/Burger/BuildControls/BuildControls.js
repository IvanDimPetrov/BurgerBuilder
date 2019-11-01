import React from 'react';

import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl.js';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => {
 
    return ( 
        <div className={ classes.BuildControls }>
            
            <p>Current Price: <strong>{ props.price.toFixed(2) }</strong></p>

            { controls.map((el, idx) => {
               return <BuildControl key={ el.label } 
                                    label={ el.label }
                                    disabledInfo={ props.disabledInfo[el.type] }
                                    ingredientAdded={ () => props.ingredientAdded(el.type) }
                                    ingredientRemove={ () => props.ingredientRemove(el.type)}/>
            })}

            <button disabled={ props.disabledInfo.order } 
                    className={ classes.OrderButton }
                    onClick={ () => props.purchase(true) }>
                        ORDER  NOW
            </button>

        </div>
    )
};

export default buildControls;