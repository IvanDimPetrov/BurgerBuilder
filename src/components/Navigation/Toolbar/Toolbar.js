import React from 'react';

import classes from './Toolbar.css'
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
//import Button from '../../UI/Button/Button.js';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.js';


const toolbar = (props) => {
    return (
        <header className={ classes.Toolbar }>

            {/* <div className={ classes.MobileOnly }>
                <Button btnType="Menu"
                        clicked={ props.open }>
                    MENU
                </Button>
            </div> */}
            <DrawerToggle clicked={ props.open }/>

            <div className={ classes.Logo }>
                <Logo/>
            </div>
            

            <nav className={ classes.DesktopOnly }>
                <NavigationItems/>
            </nav>

        </header>
    )
};

export default toolbar;