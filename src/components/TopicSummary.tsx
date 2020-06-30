import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";
import TopicStatus from "./TopicStatus";
import { AnchorLink } from "./AnchorLink";

type TopicSummaryProps = {
  id?: string;
  title?: string;
  description?: string;
  type: string;
  reward: number;
  endDate?: string;
};

export const TopicSummary: React.FC<TopicSummaryProps> = (topic) => (
  <Box margin={{ vertical: "medium" }} elevation="large" round="small">
    <AnchorLink to={`/topics/${topic.id}`}>
      <Box direction="row" align="center" flex width="large" pad={"medium"}>
        <Box flex fill justify="between">
          <Heading
            level="3"
            as="h2"
            margin={{ top: "small", bottom: "xsmall" }}
          >
            {topic.title}
          </Heading>
          <TopicStatus {...topic} />
          <Text size="small" margin={{ vertical: "xsmall" }}></Text>
          <Text size="large" weight="normal">
            {topic.description.replace(/(.{250})..+/, "$1…")}
          </Text>
        </Box>
      </Box>
    </AnchorLink>
  </Box>
);
