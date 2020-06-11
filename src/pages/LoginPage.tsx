import React, { Component, useState, useEffect } from "react";
import { Auth, Hub, DataStore } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
import { Box, Button, Heading } from "grommet";

import { User } from "../models/index";
import { useAmplifyAuth } from "../hooks/userHooks";
import { Redirect } from "react-router-dom";

function Login() {
  const {
    state: { user, isLoading, isError },
    handleSignout,
  } = useAmplifyAuth();

  async function initUser(authUser) {
    let appUser;
    try {
      appUser = (await DataStore.query(User)).filter(
        (u) => u.email === authUser.attributes.email
      )[0];

      if (!appUser || !appUser.id) {
        console.log("creating new user");
        appUser = await DataStore.save(
          new User({
            name: authUser.attributes.name,
            email: authUser.attributes.email,
            tokens: 200,
          })
        );
      }
    } catch (e) {
      console.warn("not logged in!");
    }
  }

  useEffect(() => {
    // check the current user when the component is loaded
    Auth.currentAuthenticatedUser()
      .then((user) => {
        initUser(user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [user]);

  return (
    <Box margin="auto" width="100%" align="center" pad="large">
      {isLoading && <div>loading...</div>}
      {isError && <div>Sorry, there was an error</div>}
      {!user && (
        <AmplifyAuthenticator usernameAlias="email">
          <AmplifySignUp
            slot="sign-up"
            usernameAlias="email"
            haveAccountText="OR"
            signInText="SIGN IN"
            formFields={[
              {
                type: "name",
                label: "Name",
                required: true,
              },
              {
                type: "email",
                label: "Email",
                required: true,
              },
              {
                type: "password",
                label: "Password",
                required: true,
              },
            ]}
          />
          <AmplifySignIn slot="sign-in" usernameAlias="email" />
        </AmplifyAuthenticator>
      )}
      {user && <Redirect to="/topics" />}
    </Box>
  );
}

export default Login;
