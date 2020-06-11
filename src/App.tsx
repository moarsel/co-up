import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
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
import { ChatOption, Money, User as UserIcon } from "grommet-icons";
import FlipNumbers from "react-flip-numbers";

import { ReactComponent as Ticket } from "./assets/Ballot.svg";

import { theme } from "./theme";
import { AppBar } from "./components/AppBar";

import { ReactComponent as Logo } from "./assets/logo.svg";
import Amplify, { Auth, DataStore } from "aws-amplify";
import awsconfig from "./aws-exports";

import FundsPage from "./pages/FundsPage";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import LoginPage from "./pages/LoginPage";
import TopicsDetail from "./pages/TopicsDetail";
import CreateTopic from "./pages/CreateTopic";
import ProtectedRoute from "./components/ProtectedRoute";
import { User } from "./models";
import { isLocalhost } from "./serviceWorker";
import { useAmplifyAuth } from "./hooks/userHooks";

const updatedConfig = {
  ...awsconfig,
  oauth: isLocalhost
    ? awsconfig.oauth
    : {
        ...awsconfig.oauth,
        redirectSignIn: "https://master.d37f8su7ed1a90.amplifyapp.com/",
        redirectSignOut: "https://master.d37f8su7ed1a90.amplifyapp.com/",
      },
};

Amplify.configure(updatedConfig);

async function getUser(setUser, authUser) {
  if (authUser) {
    const appUser = (await DataStore.query(User)).filter(
      (u) => u.email === authUser.attributes.email
    )[0];
    console.log(authUser, appUser);
    if (appUser) {
      setUser(appUser);
    }
  }
}

function App() {
  const { state, handleSignout } = useAmplifyAuth();
  const [user, setUser] = useState({ tokens: 0, email: "", name: "" });

  useEffect(() => {
    getUser(setUser, state.user);

    DataStore.observe(User).subscribe((msg) => {
      getUser(setUser, state.user);
    });
  }, [state.user]);

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
                  <Logo />
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
                  <Text margin={{ left: "small", top: "xsmall" }}>Funding</Text>
                </NavLink>
                {/* <NavLink
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
                </NavLink> */}
                <DropButton
                  plain
                  label={
                    <Box flex direction="row" align="center">
                      <Ticket />
                      <Text
                        margin={{ left: "small" }}
                        weight="bold"
                        style={{ width: "3rem" }}
                      >
                        {" "}
                        <FlipNumbers
                          height={22}
                          width={16}
                          color="#7916ab"
                          perspective={100}
                          play
                          delay={0.5}
                          numbers={String(user.tokens)}
                        ></FlipNumbers>
                      </Text>
                      <Avatar margin={{ left: "small" }} background="accent-2">
                        <UserIcon color="white" />
                      </Avatar>
                    </Box>
                  }
                  dropAlign={{ top: "bottom", right: "right" }}
                  dropContent={
                    <Box width={"medium"} background="light-1" pad="medium">
                      {user.name && (
                        <Text margin="medium" weight="bold" size="large">
                          {user.name}
                        </Text>
                      )}
                      {state.user && (
                        <>
                          <Text margin="medium">Earned this month: 300</Text>
                          <Button
                            primary
                            onClick={handleSignout}
                            label="Sign out"
                          />
                        </>
                      )}
                      {!state.user && <Link to="/login">Log in</Link>}
                    </Box>
                  }
                />
              </Nav>
            </AppBar>
          </header>

          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <ProtectedRoute
              isSignedIn={Boolean(state.user)}
              path="/topics/create"
              component={CreateTopic}
            />

            <ProtectedRoute
              isSignedIn={Boolean(state.user)}
              path="/topics/:id"
              component={TopicsDetail}
            />
            <ProtectedRoute
              path="/topics"
              isSignedIn={Boolean(state.user)}
              component={TopicsPage}
            />
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
