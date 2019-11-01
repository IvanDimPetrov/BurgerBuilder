import React from 'react';

import Aux from '../../../hoc/Auxiliary.js';
import Button from '../../UI/Button/Button.js';



class orderSummary extends React.Component {

    render() {
        
        const ingredientSummary = Object.keys(this.props.ingredients)
                                        .map((key, idx) => {
                                            return <li key={key}><span style={{ textTransform: 'capitalize' }}>{ key }</span>: { this.props.ingredients[key] }</li>
                                        });

        return (
            <Aux>

                <h3>Your Order</h3>

                <p>A delicious burger with following ingredients:</p>

                <strong>Total Price: { this.props.price.toFixed(2) }</strong>

                <ul>
                    { ingredientSummary }
                </ul>

                <p>Continue to Checkout?</p>

                <Button btnType="Danger"
                        clicked={this.props.purchaseCancel}>
                    CANCEL
                </Button>

                <Button btnType="Success"
                        clicked={ this.props.purchaseContinue }>
                    CONTINUE
                </Button>

            </Aux>
        )
    }            
};

export default orderSummary;