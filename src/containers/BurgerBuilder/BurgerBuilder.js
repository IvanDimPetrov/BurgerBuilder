import React from 'react';

import Aux from '../../hoc/Auxiliary.js';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js';

const INGREDIENT_PRICES = {
    salad: 5,
    cheese: 4,
    meat: 1.3,
    bacon: 0.6
}

const INITIAL_STATE = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
    purchesable: false,
    purchaseMode: false
}


class BurgerBuilder extends React.Component {
 
    state = INITIAL_STATE;

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
 
        const updatedState = {
            ingredients: {...this.state.ingredients},
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
        };

        updatedState.ingredients[type] = ++oldCount;

        this.setState(updatedState);
        //this.updatePurchaseState(updatedState.ingredients);
    }

    removeIngredient = (type) => {
        let oldCount = this.state.ingredients[type];

        if(oldCount === 0 ) {
            return;
        }
 
        const updatedState = {
            ingredients: {...this.state.ingredients},
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
        };

        updatedState.ingredients[type] = --oldCount;

        this.setState(updatedState);
        //this.updatePurchaseState(updatedState.ingredients);
    }

    updatePurchaseState = (updatedIngredients) => {

        const ingredients = {
            ...updatedIngredients
        }

        const sum = Object.values(ingredients).reduce((prevValue, currentValue) => {
            return prevValue + currentValue;
        }, 0);

        this.setState({purchesable: sum > 0});
    }

    purchaseHandler = (flag) => {
        this.setState({purchaseMode: flag})
    }

    purcheseCancelHandler = () => {
        this.setState({purchaseMode: false})
    }

    purchaseContinueHandler = () => {
        alert('You Buy it!!!')
        this.setState(INITIAL_STATE);
    }

    render() {

        const disabledInfo = {}

        for (let prop in this.state.ingredients) {     
            disabledInfo[prop] = this.state.ingredients[prop] > 0
        }

        disabledInfo.order = Object.values(this.state.ingredients)
                                .every((el, idx) => {
                                    return el === 0
                                });
        return (
            <Aux>

                <Modal show={ this.state.purchaseMode }
                       modalClosed={ this.purcheseCancelHandle }>
                    <OrderSummary ingredients={ this.state.ingredients }
                                  price={ this.state.totalPrice }
                                  purchaseCancel={ this.purcheseCancelHandler }
                                  purchaseContinue={ this.purchaseContinueHandler }/>
                </Modal>

                <Burger ingredients={this.state.ingredients}></Burger>

                <BuildControls price={ this.state.totalPrice }
                               disabledInfo={ disabledInfo }
                               purchase={ this.purchaseHandler }
                               orderDisabled={ this.state.purchesable }
                               ingredientAdded={ this.addIngredientHandler }
                               ingredientRemove={ this.removeIngredient }/>

            </Aux>
        )
    }
}

export default BurgerBuilder;