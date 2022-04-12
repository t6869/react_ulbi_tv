import React from 'react';
import classes from '../button/MyButton.module.css';

export const MyBytton = ({children, ...props}) => {
    
    return(
        <button {...props} className={classes.MyBtn}>
            {children}
        </button>
    );
};