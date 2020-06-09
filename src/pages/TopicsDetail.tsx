import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatDistance } from "date-fns";

import {
  Box,
  Heading,
  Text,
  TextInput,
  FormField,
  Button,
  Form,
} from "grommet";

import { History, CircleInformation, Trophy } from "grommet-icons";
import { withAuthenticator } from "@aws-amplify/ui-react";

// import { Proposal } from "../../../components/Proposal";
import { DataStore, Auth } from "aws-amplify";
import { Proposal } from "../models";
import { useTopicByID } from "../hooks/topicHooks";
import { useUserID } from "../hooks/userHooks";
import { ProposalView } from "../components/ProposalView";
import { useProposalsByTopicID } from "../hooks/proposalHooks";

function TopicDetails() {
  let { id } = useParams();
  const initialProposalFormState = {
    title: "",
    description: "",
    topicID: "21c8e78c-e2a2-4bde-a1c1-cf8114bd1866",
    userID: "us-east-1:d36e982a-2bf8-4687-b211-f18e11152d73",
  };

  useEffect(() => {
    (async function () {
      const currentUser = await Auth.currentUserInfo();
      // setInput("userID", currentUser.id);
      // setInput("topicID", id);

      // console.log(proposalFormState, currentUser.id);
    })();
  }, []);

  const [proposalFormState, setProposalFormState] = useState(
    initialProposalFormState
  );

  const topic = useTopicByID(id);
  const proposals = useProposalsByTopicID(id);

  function setInput(key: string, value: string) {
    setProposalFormState({ ...proposalFormState, [key]: value });
  }

  function submitProposalForm() {
    try {
      if (!proposalFormState.title || !proposalFormState.description) return;
      (async function () {
        await DataStore.save(new Proposal({ ...proposalFormState, topic }));
      })();
      setProposalFormState(initialProposalFormState);
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  function humanizeTime(dateTime: string) {
    if (dateTime) {
      return formatDistance(new Date(dateTime), new Date());
    }
  }

  const { reward, type, title, description } = topic;
  return (
    <Box
      width="large"
      pad="medium"
      margin={{ vertical: "large", horizontal: "auto" }}
    >
      <Heading level="2" as="h1" margin={{ bottom: "small" }}>
        {title}
      </Heading>
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
        <History />
        <Text
          weight="bold"
          size="small"
          margin={{ left: "xsmall", right: "medium" }}
          color="neutral-3"
        >
          Created {humanizeTime(new Date().toISOString())} ago
        </Text>
      </Box>
      <Box margin={{ vertical: "medium" }}>
        <Text size="xlarge">{description}</Text>
      </Box>

      {proposals.map((proposal: Proposal) => (
        <ProposalView key={proposal.id} {...proposal} />
      ))}

      <Box pad="medium" border="all" margin={{ vertical: "large" }}>
        <Text size="large">Propose an option</Text>
        <Form onSubmit={submitProposalForm}>
          <FormField label="Title">
            <TextInput
              onChange={(event) => setInput("title", event.target.value)}
              value={proposalFormState.title}
              placeholder="What option should be added?"
            />
          </FormField>
          <FormField label="Description">
            <TextInput
              onChange={(event) => setInput("description", event.target.value)}
              value={proposalFormState.description}
              placeholder="Why should this proposal be considered"
            />
          </FormField>
          <Button type="submit" label="Add Proposal" />
        </Form>
      </Box>
    </Box>
  );
}

export default withAuthenticator(TopicDetails);
