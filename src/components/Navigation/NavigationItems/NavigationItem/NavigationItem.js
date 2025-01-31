import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => {
    
    return (
        <li className={ classes.NavigationItem }>
            {/* <a  className={ props.active ? classes.active : null }
                href={ props.link }> 
                { props.children } 
            </a> */}
            <NavLink exact to={props.link} activeClassName={ classes.active }> 
                { props.children } 
            </NavLink>
        </li>
    )
};

export default navigationItem;