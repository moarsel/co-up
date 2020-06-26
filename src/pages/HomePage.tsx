import React from "react";
import { Heading, Text, Box, Button } from "grommet";
import { AnchorLink } from "../components/AnchorLink";
import { ButtonLink } from "../components/ButtonLink";

function HomePage() {
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
          with your community
        </Heading>
        <Text margin="medium">
          Co-Up helps you engage your community to make community decisions. We
          use cutting edge technology and mechanism design to help you empower
          your community to set it's own priorities and raise funds.
          <p>Who's this for?</p>
          <ul>
            <li>Home owner associations</li>
            <li>Community co-ops</li>
            <li>Student societies</li>
            <li>Condo boards</li>
          </ul>
          <p>Features</p>
          <ul>
            <li>Quadratic voting</li>
            <li>Quadratic funding</li>
            <li>Real-time sync</li>
            <li>A modern, interactive interface</li>
          </ul>
        </Text>
        <ButtonLink to="/topics" label="Get Started" size="large" />
      </Box>
    </div>
  );
}

export default HomePage;
