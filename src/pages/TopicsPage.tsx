import React, { useEffect, useState } from "react";
import { Box, Heading, Anchor, Button, Select } from "grommet";
import { TopicSummary } from "../components/TopicSummary";
import { DataStore } from "aws-amplify";
import { Topic } from "../models";
import { ButtonLink } from "../components/ButtonLink";
import { compareDesc } from "date-fns";
import { useLocationState } from "use-location-state";

const topicTypes = [
  { label: "All Topics", value: "" },
  { label: "Rules", value: "Rule" },
  { label: "Polls", value: "Poll" },
  { label: "Agendas", value: "Agenda" },
  { label: "Elections", value: "Election" },
];

function TopicsPage() {
  const [topics, setTopics] = useState<Topic[]>();
  const [filterState, setFilterState] = useLocationState("filter", "");

  useEffect(() => {
    getTopics(setTopics);
  }, [filterState]);

  useEffect(() => {
    const subscription = DataStore.observe(Topic).subscribe(() => {
      getTopics(setTopics);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function getTopics(setTopics) {
    const list = await DataStore.query(Topic);
    if (list) {
      const sortedList = list
        .filter((topic) => {
          return filterState ? topic.type === filterState : true;
        })
        .sort((a, b) => compareDesc(new Date(a.endDate), new Date(b.endDate)));
      setTopics(sortedList);
    }
  }

  return (
    <Box width="large" margin="auto" pad="medium">
      <Box direction="column" flex justify="between" align="start">
        <Heading level="1">Topics</Heading>
        <Box justify="between" direction="row" width="large">
          <Select
            aria-label="Topic Type"
            value={filterState}
            options={topicTypes}
            labelKey="label"
            valueKey={{ key: "value", reduce: true }}
            onChange={({ option }) => setFilterState(option.value)}
          />

          <ButtonLink
            primary
            size="large"
            to="/topics/create"
            label="Create Topic"
          />
        </Box>
      </Box>
      <Box>
        {topics && topics.map((t) => <TopicSummary key={t.id} {...t} />)}
      </Box>
    </Box>
  );
}

export default TopicsPage;
