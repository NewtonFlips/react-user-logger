import React, { useRef } from 'react';
import classes from './NewUser.module.css';

const NewUser = props => {
  const enteredUserName = useRef('');
  const enteredUserAge = useRef('');

  const formSubmitHandler = event => {
    event.preventDefault();

    if (
      enteredUserName.current.value.trim() === '' ||
      enteredUserAge.current.value.trim() === ''
    ) {
      const userData = {
        error: 'Please fill all fields.',
      };

      props.onSubmit(userData);
    }

    if (
      Number(enteredUserAge.current.value) < 0 ||
      Number(enteredUserAge.current.value) > 101
    ) {
      const userData = {
        error:
          'Age should be greater than 0 years and should not exceed 100 years.',
      };

      props.onSubmit(userData);
    }

    if (
      enteredUserName.current.value.trim() !== '' &&
      enteredUserAge.current.value.trim() !== '' &&
      Number(enteredUserAge.current.value) > 0 &&
      Number(enteredUserAge.current.value) < 101
    ) {
      const userData = {
        id: Math.random(),
        userName: enteredUserName.current.value,
        age: enteredUserAge.current.value,
      };

      props.onSubmit(userData);
    }

    enteredUserName.current.value = '';
    enteredUserAge.current.value = '';
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes.formField}>
        <label htmlFor="username">User Name</label>
        <input
          ref={enteredUserName}
          type="text"
          id="username"
          placeholder="User Name"
        />
      </div>

      <div className={classes.formField}>
        <label htmlFor="age">Age</label>
        <input ref={enteredUserAge} type="number" placeholder="Age" id="age" />
      </div>

      <button type="submit">Add User</button>
    </form>
  );
};

export default NewUser;
