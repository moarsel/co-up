import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Proposal, Vote, Comment, Topic } from "../models";

export function useProposalsByTopicID(topicID): Proposal[] {
  const [proposals, setProposals] = useState([]);
  useEffect(() => {
    (async function () {
      const list = (await DataStore.query(Proposal)).filter(
        (p) => p.topicID === topicID
      );
      const votes = await DataStore.query(Vote, (v) => v.userID("eq", "1"));
      const s = await DataStore.query(Proposal, (v) => v.userID("eq", "1"));
      // const res = list.filter((p) => p.topic && p.topic.id === id);
      // const final = { ...topic, proposals: res };
      setProposals(list);
      console.log("proposals", list);
    })();
  }, [topicID]);
  return proposals;
}
export function useAddProposal(initialState) {
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      setPending(true);
      try {
        const list = await DataStore.save(new Proposal(value));
        setValue(list);
      } catch (e) {
        setError(error);
      }
      setPending(false);
    })();
  }, [value]);

  return [{ value, pending, error }, setValue];
}
