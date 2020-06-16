import React from "react";
import { Box, Heading, Button, Text } from "grommet";
import FundsImage from "../assets/fundsPage.png";
import { FundSummary } from "../components/FundsSummary";
import { Link } from "react-router-dom";

const LinkButton = (props) => (
  <Button label="Propose a fund" primary {...props} />
);

function FundsPage() {
  return (
    <Box width="large" margin="auto" pad="medium">
      <Box direction="row" flex justify="between" align="center">
        <Heading level="1">Community Funds</Heading>
        <Link to="/topics/create" component={LinkButton} />
      </Box>
      <Box>
        <FundSummary
          reward={10}
          endDate={"2020-07-16T14:18:47.182Z"}
          title="NAACP Fundraiser"
          goalAmount={5000}
          contributedAmount={2000}
          matchedAmount={1000}
        />
        <FundSummary
          reward={15}
          endDate={"2020-07-27T14:18:47.182Z"}
          title="Swimming Pool Funds"
          goalAmount={25000}
          contributedAmount={4000}
          matchedAmount={200}
        />
        <FundSummary
          reward={15}
          endDate={"2020-08-17T14:18:47.182Z"}
          title="Landscaping Costs"
          goalAmount={3500}
          contributedAmount={2500}
          matchedAmount={1000}
        />
      </Box>
    </Box>
  );
}

export default FundsPage;
