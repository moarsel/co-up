import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAmplifyAuth } from "../hooks/userHooks";

export default function ProtectedRoute({
  component: Component,
  isSignedIn,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? <Component {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
}
