import React from 'react';

import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js'

const burger = (props) => {
    
    const transformIngredients = Object.keys(props.ingredients)
            .map((key, _) => {
                var components = [...Array(props.ingredients[key])]
                            .map((_ , idx) => {
                               return <BurgerIngredient key={key + idx} type={key}></BurgerIngredient>
                            });

                return components;
            })
            .reduce((arr, el) => {
               return arr.concat(el)
            }, []);
            
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            { transformIngredients.length === 0 ? <div>Please start adding ingredients</div> : transformIngredients  }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;