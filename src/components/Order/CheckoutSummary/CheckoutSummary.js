import React from 'react';
import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger.js';
import Button from '../../UI/Button/Button.js';

const checkoutSummary = (props) => {
    return (
        <div className={ classes.CheckoutSummary }>

            <h1> We hope it tasted well; </h1>

            <div style={{ width:'100%', margin: 'auto' }}>
                <Burger ingredients={ props.ingredients }/>
            </div>

            <Button btnType="Danger"
                    clicked={ props.checkoutCancelled }>
                CANCEL
            </Button>
            
            <Button btnType="Success"
                    clicked={ props.checkoutContinued }>
                CONTINUE
            </Button>

        </div>
    )
}

export default checkoutSummary;