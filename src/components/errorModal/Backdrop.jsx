import React from 'react';
import classes from './Backdrop.module.css';
import Modal from './Modal';

const Backdrop = props => {
  const message = props.errorInfo;

  const onSubmitHandler = value => {
    props.onCancel(value);
  };

  const removeModalHandler = () => {
    props.onCancel(true);
  };

  return (
    <div className={classes.backdrop} onClick={removeModalHandler}>
      <Modal message={message} onSubmission={onSubmitHandler} />
    </div>
  );
};

export default Backdrop;
