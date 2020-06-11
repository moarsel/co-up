import { useEffect, useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Topic } from "../models";

export function useUserID() {
  const [userID, setUserID] = useState();
  useEffect(() => {
    return async function () {
      const user = await Auth.currentUserInfo();
      setUserID(user.id);
    };
  }, []);
  return userID;
}

export function useTopicByID(id): Topic {
  const initialState = { id: "", reward: 0, title: "", type: "", userID: "" };
  const [topic, setTopic] = useState(initialState);

  useEffect(() => {
    (async function () {
      const topic = await DataStore.query(Topic, id);
      if (topic) {
        setTopic(topic);
      }
    })();
  }, [id]);
  return topic;
}
