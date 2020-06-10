import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";
import { Link } from "react-router-dom";
import TopicStatus from "./TopicStatus";

type TopicSummaryProps = {
  id?: string;
  title?: string;
  description?: string;
  type: string;
  reward: number;
  endDate?: string;
};

export const TopicSummary: React.FC<TopicSummaryProps> = (topic) => (
  <Link to={`/topics/${topic.id}`} component={Anchor}>
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
        <Heading level="3" as="h2" margin={{ top: "small" }}>
          {topic.title}
        </Heading>
        <TopicStatus {...topic} />
        <Text size="small" margin={{ vertical: "xsmall" }}></Text>
        <Text size="large">{topic.description}</Text>
      </Box>
    </Box>
  </Link>
);
