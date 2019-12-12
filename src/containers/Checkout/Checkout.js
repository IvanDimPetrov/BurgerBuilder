import  React from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.js';
import ContactData from './ContactData/ContactData.js';


class Checkout extends React.Component {

    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        
        const query = new URLSearchParams(this.props.location.search);
        const newIngredients = {};
        let totalPrice;

        for (let [key, value] of query.entries()) {
            if (key !== 'totalprice') {
                newIngredients[key] = +value
            }
            else if (key === 'totalprice') {
                totalPrice = +value;
            }
        }

        this.setState({ingredients: newIngredients, totalPrice: totalPrice})
    }


    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
 
    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data")
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={ this.state.ingredients }
                                 checkoutCancelled={ this.checkoutCancelledHandler }
                                 checkoutContinued={ this.checkoutContinuedHandler }/>

                <Route path={ this.props.match.url + "/contact-data"} render={ () => <ContactData ingredients={ this.state.ingredients } 
                                                                                                  totalPrice={ this.state.totalPrice }
                                                                                                  { ...this.props }/> }/>
            </div>
        )
    }
}

export default Checkout;