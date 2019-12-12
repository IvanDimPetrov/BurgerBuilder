import React from 'react';

import Layout from './components/Layout/Layout.js';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js'
import Checkout from './containers/Checkout/Checkout.js';
import Orders from './containers/Orders/Orders.js';

import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  
  render() {
    return (
      <div>
        <Layout>

          <Switch>
            <Route path="/checkout" component={ Checkout }/>
            <Route exact path="/" component={ BurgerBuilder }/>
            <Route exact ath="/orders" component={ Orders } />
          </Switch>
          
        </Layout>
      </div>
    );
  } 
}

export default App;
