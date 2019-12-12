import React from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button.js';
import axiosOrders from '../../../axios-orders.js';
import Spinner from '../../../components/UI/Spinner/Spinner.js';

class ContactData extends React.Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) =>  {
        event.preventDefault();
        this.setState( {loading: true} );
    
        const dataToSend = {
            totalPrice: this.props.totalPrice,
            ingredients: this.props.ingredients,
            customer: {
                name: 'Ivan Petrov'
            },
            deliveryMethod: 'fastest'
        }

        axiosOrders.post('orders.json', dataToSend)
                    .then((response) => {
                        if (response) {
                            this.setState({loading: false});
                            this.props.history.replace("/");
                        }
                        else {
                            //this.setState({loading: false, purchaseMode: false})
                        }
                        
                    })
                    .catch((err) => {
                    });
    };

    render() {
        return (
            <div className={ classes.ContactData }>
                <h4>Enter your contact data</h4>
                {this.state.loading && <Spinner/>}
                {!this.state.loading && (<form>
                    <input className={ classes.Input } type="text" name="name" placeholder="Your name..."/>
                    <input className={ classes.Input } type="email" name="email" placeholder="Your email..."/>
                    <input className={ classes.Input } type="text" name="street" placeholder="Street..."/>
                    <input className={ classes.Input } type="text" name="postal" placeholder="Postal Code..."/>
                </form>)}

                <Button btnType="Success" 
                        clicked={ this.orderHandler }> 
                    ORDER 
                </Button>
            </div>
        )
    }
};

export default ContactData;