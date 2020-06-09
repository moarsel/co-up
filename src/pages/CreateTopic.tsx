import React, { useState } from "react";

import {
  Box,
  Heading,
  FormField,
  TextInput,
  Select,
  Form,
  Button,
  Calendar,
} from "grommet";

import { withAuthenticator } from "@aws-amplify/ui-react";

import { useUserID } from "../hooks/userHooks";

function CreateTopic() {
  const userID = useUserID();
  const initialState = {
    title: "",
    description: "",
    reward: 0,
    type: "",
    endDate: new Date(),
    userID: userID,
  };

  const [formState, setFormState] = useState(initialState);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  function sendValue() {
    try {
      if (!formState.title || !formState.description) return;
      setFormState(initialState);
      //   dispatch(addTopic(JSON.parse(JSON.stringify(formState))));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <Box
      width="large"
      pad="medium"
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
        <FormField label="title" margin={{ vertical: "large" }}>
          <TextInput
            onChange={(event) => setInput("title", event.target.value)}
            value={formState.title}
            placeholder="Title"
          />
        </FormField>
        <FormField label="Description" margin={{ vertical: "large" }}>
          <TextInput
            onChange={(event) => setInput("description", event.target.value)}
            value={formState.description}
            placeholder="Description"
          />
        </FormField>

        <FormField label="Reward" margin={{ vertical: "large" }}>
          <TextInput
            type="number"
            onChange={(event) => setInput("reward", event.target.value)}
            value={formState.reward}
            placeholder="Reward"
          />
        </FormField>
        <FormField label="End Date">
          <Calendar
            date={formState.endDate.toISOString()}
            onChange={(e) => setInput("endDate", e)}
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
        <Button type="submit" label="Create" />
      </Form>
    </Box>
  );
}

export default withAuthenticator(CreateTopic);
