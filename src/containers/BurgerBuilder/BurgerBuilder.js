import React from 'react';
import axiosOrders from '../../axios-orders.js';

import Aux from '../../hoc/Auxiliary.js';
import ErrorHandler from '../../hoc/ErrorHandler.js';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal.js';
import Spinner from '../../components/UI/Spinner/Spinner.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js';

const INGREDIENT_PRICES = {
    salad: 5,
    cheese: 4,
    meat: 1.3,
    bacon: 0.6
}

const INITIAL_STATE = {
    ingredients: null,
    totalPrice: 4,
    purchesable: false,
    purchaseMode: false,
    loading: false
}


class BurgerBuilder extends React.Component {
 
    state = null;

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
 
        const updatedState = {
            ingredients: {...this.state.ingredients},
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
        };

        updatedState.ingredients[type] = ++oldCount;

        this.setState(updatedState);
    };

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
    };

    updatePurchaseState = (updatedIngredients) => {

        const ingredients = {
            ...updatedIngredients
        }

        const sum = Object.values(ingredients).reduce((prevValue, currentValue) => {
            return prevValue + currentValue;
        }, 0);

        this.setState({purchesable: sum > 0});
    };

    purchaseHandler = (flag) => {
        this.setState({purchaseMode: flag})
    };

    purcheseCancelHandler = () => {
        this.setState({purchaseMode: false})
    }

    purchaseContinueHandler = () => {
        const queryParams = [];

        for (let key in this.state.ingredients) {
            queryParams.push(encodeURIComponent(key) + '=' + encodeURI(this.state.ingredients[key]))
        }
        queryParams.push('totalprice=' + this.state.totalPrice);

        this.props.history.push({
            pathname: "/checkout",
            search: queryParams.join('&')
        });
    };

    componentDidMount() {
        axiosOrders.get('ingredients.json')
                    .then((response) => {
                        INITIAL_STATE.ingredients = response.data;
                        this.setState(INITIAL_STATE)
                    })
                    .catch((err) => { 
                    });
    };

    render() {
        if (this.state) {

            const  disabledInfo = {};

            for (let prop in this.state.ingredients) {     
                disabledInfo[prop] = this.state.ingredients[prop] > 0
            }

            disabledInfo.order = Object.values(this.state.ingredients)
                                    .every((el, idx) => {
                                        return el === 0
                                    });

            let modalChildren = <OrderSummary ingredients={ this.state.ingredients }
                                                price={ this.state.totalPrice }
                                                purchaseCancel={ this.purcheseCancelHandler }
                                                purchaseContinue={ this.purchaseContinueHandler }/>;

            if (this.state.loading === true) {
                modalChildren = <Spinner/>
            }
            

            return (
                <Aux>

                    <Modal show={ this.state.purchaseMode }
                           modalClosed={ this.purcheseCancelHandler }>

                        { modalChildren }
                            
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
        else {
            return <Spinner/>
        }
    }
}

export default ErrorHandler(BurgerBuilder, axiosOrders);