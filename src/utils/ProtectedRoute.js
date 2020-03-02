import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...props}
      render={props => {
        return token ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};
