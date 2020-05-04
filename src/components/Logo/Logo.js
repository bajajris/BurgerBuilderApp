import React from 'react';
import burgerLogo from "../../assets/images/logo.png";
import classes from './Logo.module.css'


const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Burger Burger" />
        </div>
    );
}

export default logo;