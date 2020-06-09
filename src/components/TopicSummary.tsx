import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";
import { Link } from "react-router-dom";

type TopicSummaryProps = {
  id?: string;

  title?: string;
  description?: string;
};

export const TopicSummary: React.FC<TopicSummaryProps> = ({
  id,
  title,
  description,
}) => (
  <Link to={`/topics/${id}`} component={Anchor}>
    <Box direction="row" align="center">
      <Box
        pad={{
          left: "none",
          right: "small",
          vertical: "small",
          bottom: "medium",
        }}
      >
        <Heading level="2" margin="none">
          {title}
        </Heading>
        <Text size="small" margin={{ bottom: "xsmall" }}></Text>
        <Text size="large">{description}</Text>
      </Box>
    </Box>
  </Link>
);
