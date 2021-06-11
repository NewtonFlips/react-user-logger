import React from 'react';
import classes from './AllUsers.module.css';
import User from './User';

const AllUsers = props => {
  return (
    <React.Fragment>
      {props.users.length === 0 && (
        <p className={classes.info}>No Users to display. Let's add some.</p>
      )}
      <ul className={classes.users}>
        {props.users.map(user => (
          <User userName={user.userName} age={user.age} key={user.id} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default AllUsers;
