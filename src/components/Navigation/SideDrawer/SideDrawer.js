import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import Backdrop from '../../UI/Backdrop/Backdrop.js';
import Aux from '../../../hoc/Auxiliary.js';

const sideDrawer = (props) => {
    return (
        <Aux>

            <Backdrop show={ props.open } clicked={ props.closed }/>

            <div className={ props.open ? [classes.SideDrawer, classes.Open].join(" ") :  [classes.SideDrawer, classes.Close].join(" ") }>
            
                <div className={ classes.Logo }>
                    <Logo/>
                </div>
                
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
       
    );
};

export default sideDrawer;