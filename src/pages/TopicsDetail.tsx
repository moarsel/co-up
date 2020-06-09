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
import { DataStore, Auth } from "aws-amplify";

import { Proposal } from "../models";
import { useTopicByID } from "../hooks/topicHooks";
import { ProposalView } from "../components/ProposalView";

function TopicDetails() {
  const { id } = useParams();

  const [proposals, setProposals] = useState([]);

  const initialProposalFormState = {
    title: "",
    description: "",
    topicID: id,
    userID: "",
  };

  const [proposalFormState, setProposalFormState] = useState(
    initialProposalFormState
  );

  useEffect(() => {
    listProposals(setProposals);

    DataStore.observe(Proposal, (p) => p.topicID("eq", id)).subscribe((msg) => {
      listProposals(setProposals);
    });
  }, [id]);

  async function listProposals(setProposals) {
    const proposals = await DataStore.query(Proposal, (p) =>
      p.topicID("eq", id)
    );
    setProposals(proposals);
  }

  function setInput(key: string, value: string) {
    setProposalFormState({ ...proposalFormState, [key]: value });
  }

  async function submitProposalForm(setProposals) {
    try {
      if (
        !proposalFormState.title ||
        !proposalFormState.description ||
        !proposalFormState.topicID ||
        !proposalFormState.userID
      ) {
        console.warn("incomplete", proposalFormState);
        return;
      }
      const user = await Auth.currentUserInfo();
      await DataStore.save(
        new Proposal({ ...proposalFormState, userID: user.id })
      );
      listProposals(setProposals);
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

  const { reward, type, title, description } = useTopicByID(id);

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
        <Form onSubmit={() => submitProposalForm(setProposals)}>
          <FormField label="Title">
            <TextInput
              required
              onChange={(event) => setInput("title", event.target.value)}
              value={proposalFormState.title}
              placeholder="What option should be added?"
            />
          </FormField>
          <FormField label="Description">
            <TextInput
              required
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
