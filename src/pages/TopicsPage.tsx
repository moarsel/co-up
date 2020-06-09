import React, { useEffect, useState } from "react";
import { Box, Heading } from "grommet";
import { TopicSummary } from "../components/TopicSummary";
import { Auth, DataStore } from "aws-amplify";
import { Topic } from "../models";

function TopicsPage() {
  const [topics, setTopics] = useState<Topic[]>();

  useEffect(() => {
    (async function () {
      const currentUser = await Auth.currentUserInfo();
      const list = await DataStore.query(Topic);
      setTopics(list);
    })();
  }, []);
  return (
    <div>
      <Box direction="row" flex pad={"medium"}>
        <Box flex>
          <Heading level="1">Topics</Heading>
          <Box align="start" fill>
            {topics && topics.map((t) => <TopicSummary key={t.id} {...t} />)}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default TopicsPage;
