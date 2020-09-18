import { Route, Redirect } from "react-router-dom";
import React from 'react';


export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect to={{
              pathname: loggedInPath
            }} />
          )
        }
        return null;
      }}
    />
  )
}

export const ProtectedRoutes = ({user, children, ...rest}) => {
  return (
    <Route {...rest}
      render={() => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect to={{ pathname: "/signin" }} />
          )
        }
        return null;
      }}
      />
  )
}