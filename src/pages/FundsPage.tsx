import React from "react";
import { Box, Heading, Button, Text } from "grommet";
import FundsImage from "../assets/fundsPage.png";

function FundsPage() {
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
        margin={{ horizontal: "auto", vertical: "medium" }}
        pad="medium"
        background="white"
        elevation="medium"
        align="center"
        style={{ position: "absolute", left: 0, right: 0, top: "12rem" }}
      >
        <Heading as="h1" level="2" margin={"none"}>
          Coming soon: community fundraising
        </Heading>
        <Text margin="medium">
          Co-Up will soon enable your community to raise more money than you
          ever thought possible. Stay tuned for:
          <ul>
            <li>Fundraising campaigns</li>
            <li>Smart community matching</li>
            <li>Collect and pay out funds using Stripe</li>
          </ul>
        </Text>
        <img src={FundsImage} width="100%" alt="fundraising preview" />
      </Box>
    </div>
  );
}

export default FundsPage;
