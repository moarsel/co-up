import React, { useEffect, useState } from "react";
import { Box, Heading, Anchor, Button } from "grommet";
import { TopicSummary } from "../components/TopicSummary";
import { DataStore } from "aws-amplify";
import { Topic } from "../models";
import { ButtonLink } from "../components/ButtonLink";

function TopicsPage() {
  const [topics, setTopics] = useState<Topic[]>();

  useEffect(() => {
    getTopics(setTopics);

    const subscription = DataStore.observe(Topic).subscribe(() => {
      getTopics(setTopics);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function getTopics(setTopics) {
    const list = await DataStore.query(Topic);
    if (list) {
      setTopics(list);
    }
  }

  return (
    <Box width="large" margin="auto" pad="medium">
      <Box direction="row" flex justify="between" align="center">
        <Heading level="1">Topics</Heading>
        <ButtonLink primary to="/topics/create" label="Create Topic" />
      </Box>
      <Box>
        {topics && topics.map((t) => <TopicSummary key={t.id} {...t} />)}
      </Box>
    </Box>
  );
}

export default TopicsPage;
