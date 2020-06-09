import React, { useEffect } from "react";
import { Box, Heading, Text, Button } from "grommet";
// import { useSelector, useDispatch } from "react-redux";
// import { API, graphqlOperation, Auth } from "aws-amplify";
// import { GraphQLResult } from "@aws-amplify/api";
import { DataStore } from "@aws-amplify/datastore";
import {
  Proposal as ProposalModel,
  Proposal,
  //   Vote as VoteModel,
} from "../models";

// import { createVote } from "../src/graphql/mutations";
// import { CreateVoteMutation } from "../src/API";
// import { listVotes, getProposal } from "../src/graphql/queries";

export const ProposalView = ({ id, title, description, votes }: Proposal) => {
  // const userID = useSelector((state) => state.user.userID);

  // const voteTally = votes.items ? votes.items.length : 0;

  function registerVote() {
    // dispatch(createProposalVote(id))
    (async function () {
      //   const comments = (await DataStore.query(VoteModel)).filter(
      //     (c) => c.proposal === id
      //   );
      //   console.log(comments);

      // const currentUser = await Auth.currentUserInfo();
      // const res = (await API.graphql(
      //   graphqlOperation(createVote, {
      //     input: { proposalID: id, increment: 1, userID: currentUser.id },
      //   })
      // )) as GraphQLResult<CreateVoteMutation>;

      // const votes = await API.graphql(
      //   graphqlOperation(listVotes, { input: { proposalID: id } })
      // );
      console.log(votes);
    })();
  }

  useEffect(() => {
    // const subscription = DataStore.observe(ProposalModel).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.warn(err);
    //   }
    // );
    // return () => subscription.unsubscribe();
  }, []);

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
