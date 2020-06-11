import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button } from "grommet";
import { DataStore } from "@aws-amplify/datastore";
import { Proposal, Vote, User, Topic } from "../models";
import { Auth } from "aws-amplify";
import { VoteBox } from "../components/VoteBox";
import { useAmplifyAuth } from "../hooks/userHooks";

export const ProposalView = ({ id, title, description }: Proposal) => {
  const { state } = useAmplifyAuth();
  const [currentUser, setCurrentUser] = useState({ id: "" });
  const [votes, setVotes] = useState([]);
  const [userVotes, setUserVotes] = useState(1);

  async function registerVote(authUser, userVotes) {
    const appUser = (await DataStore.query(User)).filter(
      (u) => u.email === authUser.attributes.email
    )[0];

    if (!appUser) return;

    const voteCost = userVotes < 2 ? userVotes + 1 : userVotes * userVotes;
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
    getUser(setCurrentUser, state.user);
    getUserVotes(votes, currentUser.id, setUserVotes);

    DataStore.observe(Vote, (p) => p.proposalID("eq", id)).subscribe((msg) => {
      listVotes(setVotes);
      getUser(setCurrentUser, state.user);
      getUserVotes(votes, currentUser.id, setUserVotes);
    });

    return () =>
      setInterval(() => {
        listVotes(setVotes);
      }, 5000);
  }, [id, votes.length]);

  async function listVotes(setVotes) {
    const votes = await DataStore.query(Vote, (p) => p.proposalID("eq", id));
    console.log("votes", votes);
    setVotes(votes);
  }

  async function getUser(setUser, authUser) {
    if (authUser) {
      const appUser = (await DataStore.query(User)).filter(
        (u) => u.email === authUser.attributes.email
      )[0];
      setUser(appUser);
    }
  }

  async function getUserVotes(votes, userID, setUserVotes) {
    const voteCount = votes.filter((v) => v.userID === userID).length;
    setUserVotes(voteCount);
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
          handleClick={() => registerVote(state.user, userVotes)}
        />
      </Box>
    </Box>
  );
};
