import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Proposal, Vote, Comment, Topic } from "../models";

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
