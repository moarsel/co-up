import { useEffect, useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Topic, Proposal } from "../models";

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

export function useTopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    (async function () {
      const list = await DataStore.query(Topic);
      setTopics(list);
    })();
  }, []);
  return topics;
}

export function useTopicByID(id): Topic {
  const initialState = { id: "", reward: 0, title: "", type: "", userID: "" };
  const [topic, setTopic] = useState(initialState);

  useEffect(() => {
    (async function () {
      const topic = await DataStore.query(Topic, id);
      setTopic(topic);
    })();
  }, [id]);
  return topic;
}
