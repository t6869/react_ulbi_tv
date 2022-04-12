import React from 'react';
import classes from '../input/MyInput.module.css';

export const MyInput = ({...props}) => {
    
    return(
        <input className={classes.MyInput} {...props}/>
    );
};