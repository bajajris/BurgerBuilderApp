import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = (props) => {
    /**
     * Object.keys(extract the keys as an array from the object)
     * In this case [salad,bacon,cheese,meat]
    */

    /**
     * Array(num) creates the array with num spaces
     * In this case depends on the value of the key i.e cheese has a value of 2 so will loop through it twice 
     */
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = "Please start adding ingredients";
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;