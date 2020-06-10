import { Box, Text } from "grommet";
import React from "react";
import { formatDistance } from "date-fns";

import { Trophy, Calendar, CircleInformation } from "grommet-icons";

function humanizeTime(dateTime: string) {
  if (dateTime) {
    return formatDistance(new Date(dateTime), new Date());
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
    <Trophy />
    <Text
      weight="bold"
      size="small"
      margin={{ left: "xsmall", right: "medium" }}
      color="neutral-3"
    >
      Reward: {reward} tokens
    </Text>

    <CircleInformation />
    <Text
      weight="bold"
      size="small"
      margin={{ left: "xsmall", right: "medium" }}
      color="neutral-3"
    >
      Type: {type}
    </Text>
    <Calendar />
    <Text
      weight="bold"
      size="small"
      margin={{ left: "xsmall", right: "medium" }}
      color="neutral-3"
    >
      Voting ends in {humanizeTime(endDate)}
    </Text>
  </Box>
);

export default TopicStatus;
