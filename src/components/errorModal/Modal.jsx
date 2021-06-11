import React from 'react';
import classes from './Modal.module.css';

const Modal = props => {
  const removeErrorHandler = () => {
    props.onSubmission(true);
  };

  return (
    <div className={classes.errorContainer}>
      <h3>Error. Invalid data provided</h3>
      <p>{props.message}</p>
      <footer>
        <button onClick={removeErrorHandler}>Cancel</button>
      </footer>
    </div>
  );
};

export default Modal;
