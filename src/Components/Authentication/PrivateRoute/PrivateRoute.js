import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext)
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email  ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />

    </div>
  );
};

export default PrivateRoute;