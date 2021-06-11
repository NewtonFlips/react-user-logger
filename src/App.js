import React, { useState } from 'react';
import Card from './components/UI/Card';
import NewUser from './components/users/NewUser';
import AllUsers from './components/users/AllUsers';
import Backdrop from './components/errorModal/Backdrop';

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const formSubmitHandler = data => {
    if (data.error) {
      setError({
        errorState: true,
        errorMessage: data.error,
      });
      // console.log(data.error);
    } else {
      setUsers(previousState => {
        setUsers([...previousState, data]);
      });
    }
  };

  const mainErrorHandler = value => {
    setError(value);
  };

  // console.log(users, error);

  return (
    <React.Fragment>
      {error.errorState && (
        <Backdrop errorInfo={error.errorMessage} onCancel={mainErrorHandler} />
      )}
      <h1>React User Logger</h1>
      <Card>
        <NewUser onSubmit={formSubmitHandler} />
      </Card>
      <Card>
        <AllUsers users={users} />
      </Card>
    </React.Fragment>
  );
};

export default App;
