import React from "react";
import { Heading, Text, Box, Button } from "grommet";
import {
  AmplifyFacebookButton,
  AmplifyGoogleButton,
} from "@aws-amplify/ui-react";

function HomePage(isSignedIn: any, handleSignUp: any) {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1588613254750-cf5d89a29b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        width="100%"
        style={{ position: "absolute", zIndex: 0 }}
        alt=""
      />
      <Box
        width="large"
        margin="auto"
        pad="large"
        background="white"
        elevation="medium"
        align="center"
        style={{ position: "absolute", left: 0, right: 0, top: "12rem" }}
      >
        <Heading as="h1" level="2" margin={"none"}>
          Build your Community, <br />
          with your Community
        </Heading>
        <Text margin="medium">
          Co-Up helps you engage your community to make community decisions.
          Using cutting edge technology and real time voting, we'll help you
          empower your community to set it's own priorities and raise funds.
          <ul>
            <li>Home owner associations</li>
            <li>Community co-ops</li>
            <li>Condo boards</li>
          </ul>
        </Text>
        {!isSignedIn ? (
          <Button primary href="/topics" label="Get Started" size="large" />
        ) : (
          <Box width="medium">
            <AmplifyFacebookButton onClick={() => handleSignUp("Facebook")} />
            <AmplifyGoogleButton onClick={() => handleSignUp("Google")} />
          </Box>
        )}
      </Box>
    </div>
  );
}

export default HomePage;
