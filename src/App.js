import React from 'react';

import Layout from './components/Layout/Layout.js';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
            <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  } 
}

export default App;
