import React, { useEffect, useState } from "react";
import { Box, Heading, Anchor, Button } from "grommet";
import { TopicSummary } from "../components/TopicSummary";
import { DataStore } from "aws-amplify";
import { Topic } from "../models";
import { Link } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

const LinkButton = (props) => (
  <Button label="Create Topic" primary {...props} />
);

function TopicsPage() {
  const [topics, setTopics] = useState<Topic[]>();

  useEffect(() => {
    (async function () {
      const list = await DataStore.query(Topic);
      if (list) {
        setTopics(list);
      }
    })();
  }, []);
  return (
    <Box width="large" margin="auto" pad="medium">
      <Box direction="row" flex justify="between" align="center">
        <Heading level="1">Topics</Heading>
        <Link to="/topics/create" component={LinkButton} />
      </Box>
      <Box>
        {topics && topics.map((t) => <TopicSummary key={t.id} {...t} />)}
      </Box>
    </Box>
  );
}

export default withAuthenticator(TopicsPage);
