import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import {
  Grommet,
  Heading,
  Nav,
  Anchor,
  Avatar,
  Text,
  DropButton,
  Box,
  Button,
} from "grommet";
import {
  Calendar,
  ChatOption,
  Money,
  User as UserIcon,
  Google,
  Facebook,
} from "grommet-icons";
import { theme } from "./theme";
import { AppBar } from "./components/AppBar";

import Amplify, { Auth, DataStore } from "aws-amplify";
import {
  withAuthenticator,
  AmplifyFacebookButton,
  AmplifyGoogleButton,
  AmplifySignOut,
} from "@aws-amplify/ui-react";

import awsconfig from "./aws-exports";

import FundsPage from "./pages/FundsPage";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import TopicsDetail from "./pages/TopicsDetail";
import CreateTopic from "./pages/CreateTopic";
import { User } from "./models";

Amplify.configure(awsconfig);

async function oauthSignup(provider, setUser) {
  await Auth.federatedSignIn({ provider: provider });
}

async function getUser(setUser) {
  let appUser;
  try {
    const authUser = await Auth.currentUserInfo();
    appUser = await DataStore.query(User, authUser.id);

    console.log(authUser, appUser);
    if (!appUser || !appUser.id) {
      console.log("creating new");
      appUser = await DataStore.save(
        new User({
          name: authUser.attributes.name,
          email: authUser.id,
          tokens: 100,
        })
      );
    }
    setUser(appUser);
  } catch (e) {
    console.warn("not logged in!");
  }
}

function App() {
  const [user, setUser] = useState({ tokens: 0, email: "", name: "" });

  useEffect(() => {
    getUser(setUser);

    DataStore.observe(User, (u) => u.email("eq", user.email)).subscribe(
      (msg) => {
        setUser(user);
      }
    );
  }, []);

  return (
    <div>
      <Router>
        <Grommet theme={theme} full>
          <header className="App-header">
            <AppBar>
              <NavLink
                to="/"
                component={Anchor}
                exact
                activeStyle={{
                  fontWeight: "bold",
                  paddingBottom: "3px",
                  borderBottom: "2px solid black",
                }}
              >
                <Heading level="3" margin="none">
                  Co-Up
                </Heading>
              </NavLink>
              <Nav direction="row" align="center" pad={"xsmall"}>
                <NavLink
                  to="/topics"
                  component={Anchor}
                  activeStyle={{
                    fontWeight: "bold",
                    paddingBottom: "3px",
                    borderBottom: "2px solid black",
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ChatOption />
                  <Text margin={{ left: "small", top: "xsmall" }}>Topics</Text>
                </NavLink>
                <NavLink
                  to="/funds"
                  component={Anchor}
                  activeStyle={{
                    fontWeight: "bold",
                    paddingBottom: "3px",
                    borderBottom: "2px solid black",
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Money />
                  <Text margin={{ left: "small", top: "xsmall" }} size="small">
                    Funding
                  </Text>
                </NavLink>
                <NavLink
                  to="/booking"
                  component={Anchor}
                  activeStyle={{
                    fontWeight: "bold",
                    paddingBottom: "3px",
                    borderBottom: "2px solid black",
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Calendar />
                  <Text margin={{ left: "small", top: "xsmall" }}>Booking</Text>
                </NavLink>
                <DropButton
                  label={
                    <Box flex direction="row" align="center">
                      Up-Votes: {user.tokens}
                      <Avatar margin={{ left: "small" }} background="accent-2">
                        <UserIcon color="white" />
                      </Avatar>
                    </Box>
                  }
                  dropAlign={{ top: "bottom", right: "right" }}
                  dropContent={
                    <Box width={"medium"} background="light-1" pad="medium">
                      {user && (
                        <>
                          <AmplifyFacebookButton
                            onClick={() => oauthSignup("Facebook", setUser)}
                          />
                          <AmplifyGoogleButton
                            onClick={() => oauthSignup("Google", setUser)}
                          />
                        </>
                      )}
                      {user && (
                        <Text margin="medium" weight="bold" size="large">
                          {user.name}
                        </Text>
                      )}
                      {user && user.tokens && (
                        <Text margin="medium">Earned this month: 300</Text>
                      )}
                      {user && <AmplifySignOut />}
                    </Box>
                  }
                />
              </Nav>
            </AppBar>
          </header>

          <Switch>
            <Route path="/topics/create">
              <CreateTopic />
            </Route>
            <Route path="/topics/:id">
              <TopicsDetail />
            </Route>
            <Route path="/topics">
              <TopicsPage />
            </Route>
            <Route path="/funds">
              <FundsPage />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Grommet>
      </Router>
    </div>
  );
}

export default App;
