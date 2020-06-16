import React from "react";
import { Box, Heading, Text, Anchor, Meter, Button } from "grommet";
import { Link } from "react-router-dom";
import TopicStatus from "./TopicStatus";

type FundSummaryProps = {
  id?: string;
  title?: string;
  description?: string;
  goalAmount: number;
  contributedAmount: number;
  matchedAmount: number;
  reward: number;
  endDate?: string;
  //   startDate?: string;
};

export const FundSummary: React.FC<FundSummaryProps> = (fund) => (
  <Link to={`/funds/${fund.id}`} component={Anchor}>
    <Box direction="row" align="center" flex width="large">
      <Box
        flex
        fill
        justify="between"
        margin={{ vertical: "small" }}
        pad={"medium"}
        round="small"
        elevation="large"
      >
        <Heading level="3" as="h2" margin={{ top: "small", bottom: "xsmall" }}>
          {fund.title}
        </Heading>
        <TopicStatus
          endDate={fund.endDate}
          type={"Fund"}
          reward={fund.reward}
        />

        <Meter
          margin="medium"
          type="bar"
          background="light-2"
          round={true}
          max={fund.goalAmount}
          values={[
            {
              value: fund.contributedAmount,
              color: "brand",
              label: `$${fund.contributedAmount}`,
            },
            {
              value: fund.matchedAmount,
              color: "accent-3",
              label: `$${fund.matchedAmount}`,
            },
          ]}
        ></Meter>
        <Text size="medium" margin={{ vertical: "xsmall" }}>
          <div>
            <Box flex direction="row" align="center">
              <Box
                fill={false}
                justify="start"
                align="center"
                width={"22px"}
                margin="5px"
                round="full"
                background="brand"
              >
                &nbsp;
              </Box>{" "}
              ${fund.contributedAmount} Contributed
            </Box>
            <Box flex direction="row" align="center">
              <Box
                fill={false}
                justify="start"
                align="center"
                width={"22px"}
                margin="5px"
                round="full"
                background="accent-3"
              >
                &nbsp;
              </Box>{" "}
              ${fund.matchedAmount} Community Matching
            </Box>
            <Box flex direction="row" align="center">
              <Box
                fill={false}
                justify="start"
                align="center"
                width={"22px"}
                margin="5px"
                round="full"
                background="light-2"
              >
                &nbsp;
              </Box>{" "}
              ${fund.goalAmount} Goal
            </Box>
          </div>
        </Text>
        <Text size="large">{fund.description}</Text>
      </Box>
    </Box>
  </Link>
);
