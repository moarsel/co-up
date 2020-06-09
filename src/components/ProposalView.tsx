import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button } from "grommet";
import { DataStore } from "@aws-amplify/datastore";
import { Proposal, Vote, User } from "../models";
import { Auth } from "aws-amplify";

export const ProposalView = ({ id, title, description }: Proposal) => {
  async function registerVote() {
    const currentUser = await Auth.currentUserInfo();
    const appUser = (await DataStore.query(User)).filter(
      (u) => u.email === currentUser.attributes.email
    )[0];

    if (appUser && appUser.tokens > 0) {
      const subtractedTokens = appUser.tokens - 1;
      await DataStore.save(
        User.copyOf(appUser, (updated) => {
          updated.tokens = subtractedTokens;
        })
      );
    }
    DataStore.save(new Vote({ proposalID: id, userID: currentUser.id }));
  }

  const [votes, setVotes] = useState([]);

  useEffect(() => {
    listVotes(setVotes);

    DataStore.observe(Vote, (p) => p.proposalID("eq", id)).subscribe((msg) => {
      listVotes(setVotes);
    });
  }, [id]);

  async function listVotes(setVotes) {
    const votes = await DataStore.query(Vote, (p) => p.proposalID("eq", id));
    setVotes(votes);
  }

  return (
    <Box
      flex
      fill
      direction="row"
      justify="between"
      key={id}
      margin={{ vertical: "small" }}
      pad={"medium"}
      round="small"
      elevation="medium"
    >
      <Box>
        <Heading level="4" as="h2" margin="none">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
      <Box width="small" align="center">
        <Button primary color="accent-4" label="Vote" onClick={registerVote} />
        <Text>{votes.length}</Text>
      </Box>
    </Box>
  );
};
