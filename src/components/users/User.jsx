import React from 'react';
import classes from './User.module.css';

const User = props => {
  return (
    <React.Fragment>
      <li className={classes.user}>
        {props.userName} - {props.age} (years old)
      </li>
    </React.Fragment>
  );
};

export default User;
