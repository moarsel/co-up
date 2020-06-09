import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { Grommet, Heading, Nav, Anchor, Avatar, Text } from "grommet";
import { Calendar, ChatOption, Money, User } from "grommet-icons";
import { theme } from "./theme";
import { AppBar } from "./components/AppBar";

import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import awsconfig from "./aws-exports";

import FundsPage from "./pages/FundsPage";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import TopicsDetail from "./pages/TopicsDetail";
import CreateTopic from "./pages/CreateTopic";

Amplify.configure(awsconfig);

function App() {
  useEffect(() => {
    (async function () {
      const currentUser = await Auth.currentUserInfo();
      // const proposals = (await DataStore.query(Proposal)).filter(
      //   (c) => c.topic === "21c8e78c-e2a2-4bde-a1c1-cf8114bd1866"
      // );
      // const topic = await DataStore.save(
      //   new Topic({
      //     title: "My First Post",
      //     description: "test",
      //     type: "Poll",
      //     reward: 0,
      //     userID: currentUser.id,
      //   })
      // );

      // console.log(currentUser, proposals);
      // await DataStore.save(
      //   new Proposal({
      //     title: "My First Post",
      //     description: "test",
      //     userID: currentUser.id,
      //     topic: topic,
      //   })
      // );
    })();
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
                  <Calendar color="white" />
                  <Text color="white" margin={{ left: "small", top: "xsmall" }}>
                    Booking
                  </Text>
                </NavLink>
                <NavLink
                  to="/user"
                  component={Anchor}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <Avatar background="accent-2">
                    <User color="white" />
                  </Avatar>
                </NavLink>
              </Nav>
            </AppBar>
            {/* <AmplifySignOut /> */}
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

export default withAuthenticator(App);
