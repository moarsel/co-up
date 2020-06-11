import React, { useState, useEffect } from "react";

import {
  Box,
  Heading,
  FormField,
  TextInput,
  Select,
  Form,
  Button,
  Calendar,
  TextArea,
} from "grommet";

import { DataStore, Auth } from "aws-amplify";
import { Topic } from "../models";
import { useHistory } from "react-router-dom";

function CreateTopic() {
  const initialState = {
    title: "",
    description: "",
    reward: 0,
    type: "",
    endDate: new Date().toISOString(),
    userID: "",
  };

  let history = useHistory();

  async function getUser() {
    const user = await Auth.currentUserInfo();
    setInput("userID", user.id);
  }

  useEffect(() => {
    getUser();
  }, []);

  const [formState, setFormState] = useState(initialState);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function sendValue() {
    try {
      if (!formState.title || !formState.description) return;
      const topic = await DataStore.save(new Topic(formState));
      setFormState(initialState);
      history.push(`/topics/${topic.id}`);
    } catch (err) {
      console.log("error creating topic:", err);
    }
  }

  return (
    <Box
      width="large"
      pad="medium"
      align="start"
      margin={{ vertical: "large", horizontal: "auto" }}
    >
      <Form onSubmit={sendValue}>
        <Heading level="2" margin="none">
          What topic do you want to discuss?
        </Heading>
        <FormField label="Type" margin={{ vertical: "large" }}>
          <Select
            options={["Agenda", "Poll", "Election", "Rule"]}
            value={formState.type}
            onChange={({ option }) => setInput("type", option)}
          />
        </FormField>
        <FormField label="Title" margin={{ vertical: "large" }}>
          <TextInput
            onChange={(event) => setInput("title", event.target.value)}
            value={formState.title}
            placeholder="Title"
            required
          />
        </FormField>
        <FormField label="Description" margin={{ vertical: "large" }}>
          <TextArea
            onChange={(event) => setInput("description", event.target.value)}
            value={formState.description}
            placeholder="What is the purpose of this vote?"
            aria-description="What is the purpose of this vote?"
            required
          />
        </FormField>

        <FormField label="Participation Reward" margin={{ vertical: "large" }}>
          <TextInput
            type="number"
            onChange={(event) => setInput("reward", Number(event.target.value))}
            value={formState.reward}
            placeholder="How many tickets should people get for participating?"
            aria-description="How many tickets should people get for participating?"
          />
        </FormField>
        <Box align="start">
          <FormField label="End Date">
            <Calendar
              date={formState.endDate}
              onSelect={(e) => setInput("endDate", e)}
            >
              {({ inputProps, focused }) => (
                <TextInput
                  plain={true}
                  className={"input" + (focused ? " -focused" : "")}
                  {...inputProps}
                />
              )}
            </Calendar>
          </FormField>
        </Box>
        <Button type="submit" label="Create" primary />
      </Form>
    </Box>
  );
}

export default CreateTopic;
