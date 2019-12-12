import React from 'react';
import axiosOrders from '../../axios-orders.js';
import Order from '../../components/Order/Order.js';
import ErrorHandler from '../../hoc/ErrorHandler.js';

class Orders extends React.Component {
    
    state = {
        orders: []
    }

    componentDidMount() {
        axiosOrders.get('orders.json')
                    .then((responce) => {
                        const orders = [];
                        for (let key in responce.data) {
                                let tempOrder = responce.data[key];
                                tempOrder.id = key;
                                orders.push(tempOrder);
                        }

                        this.setState({orders: orders});
                    })
                    .catch((err) => {

                    });
    }

    render() {
        return (
            <div>
               { this.state.orders.map((order, idx) => {
                   return <Order key={order.id}
                                 totalPrice={ order.totalPrice }
                                 ingredients={ order.ingredients }/>
               }) }
            </div>
        )
    }
}

export default ErrorHandler(Orders, axiosOrders);