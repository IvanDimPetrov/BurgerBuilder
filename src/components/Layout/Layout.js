import React from 'react';

import Aux from '../../hoc/Auxiliary.js';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js'


class Layout extends React.Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseOrOpenHandler = () => {
        this.setState({showSideDrawer: !this.state.showSideDrawer})
    }

    render() {
        return (
            <Aux>
                <Toolbar open={ this.sideDrawerCloseOrOpenHandler }/>
                <SideDrawer open={ this.state.showSideDrawer } closed={ this.sideDrawerCloseOrOpenHandler }/>
                <main className={ classes.Content }>
                    {this.props.children}
                </main>
            </Aux>  
        )
    } 
};

export default Layout;