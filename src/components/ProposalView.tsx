import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button } from "grommet";
import { DataStore } from "@aws-amplify/datastore";
import { Proposal, Vote, User } from "../models";
import { Auth } from "aws-amplify";
import { VoteBox } from "../components/VoteBox";

export const ProposalView = ({ id, title, description }: Proposal) => {
  const [currentUser, setCurrentUser] = useState({ id: "", attributes: {} });
  const [votes, setVotes] = useState([]);
  const [userVotes, setUserVotes] = useState(1);

  async function registerVote(currentUser, userVotes) {
    const appUser = (await DataStore.query(User)).filter(
      (u) => u.email === currentUser.attributes.email
    )[0];

    const voteCost = userVotes * userVotes;
    if (appUser && appUser.tokens >= voteCost) {
      const subtractedTokens = appUser.tokens - voteCost;
      await DataStore.save(
        User.copyOf(appUser, (updated) => {
          updated.tokens = subtractedTokens;
        })
      );
      await DataStore.save(
        new Vote({ proposalID: id, userID: currentUser.id })
      );
    }
  }

  useEffect(() => {
    listVotes(setVotes);
    getUser(setCurrentUser);
    getUserVotes(votes, currentUser.id, setUserVotes);

    DataStore.observe(Vote, (p) => p.proposalID("eq", id)).subscribe((msg) => {
      listVotes(setVotes);
      getUser(setCurrentUser);
      getUserVotes(votes, currentUser.id, setUserVotes);
    });
  }, [id, votes.length]);

  async function listVotes(setVotes) {
    const votes = await DataStore.query(Vote, (p) => p.proposalID("eq", id));
    setVotes(votes);
  }

  async function getUser(setCurrentUser) {
    const user = await Auth.currentUserInfo();
    setCurrentUser(user);
  }

  async function getUserVotes(votes, userID, setUserVotes) {
    const voteCount = votes.filter((v) => v.userID === userID).length;
    setUserVotes(voteCount);
    console.log(votes, userID, voteCount);
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
        <VoteBox
          userVoteCount={userVotes}
          totalVoteCount={votes.length}
          handleClick={() => registerVote(currentUser, userVotes)}
        />
      </Box>
    </Box>
  );
};
