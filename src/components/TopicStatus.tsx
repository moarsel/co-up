import { Box, Text } from "grommet";
import React from "react";
import { formatDistance } from "date-fns";

import { Trophy, Calendar, CircleInformation } from "grommet-icons";

function humanizeTime(dateTime: string) {
  if (dateTime) {
    return formatDistance(new Date(dateTime), new Date(), { addSuffix: true });
  }
}

type TopicStatusProps = {
  id?: string;
  title?: string;
  description?: string;
  type: string;
  reward: number;
  endDate?: string;
};

const TopicStatus: React.FC<TopicStatusProps> = ({ type, reward, endDate }) => (
  <Box flex direction="row" align="center">
    <CircleInformation />
    <Text
      size="small"
      margin={{ left: "xsmall", right: "medium" }}
      color="neutral-3"
    >
      <strong>{type}</strong>
    </Text>
    <Trophy />
    <Text
      size="small"
      margin={{ left: "xsmall", right: "medium" }}
      color="neutral-3"
    >
      <strong>{reward} ticket reward </strong>
    </Text>

    <Calendar />
    <Text
      size="small"
      margin={{ left: "xsmall", right: "medium" }}
      color="neutral-3"
    >
      <strong> Voting ends: {humanizeTime(endDate)}</strong>
    </Text>
  </Box>
);

export default TopicStatus;
