/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTopicInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  type: string,
  reward: number,
  endDate?: string | null,
  userID: string,
  _version?: number | null,
};

export type ModelTopicConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelStringInput | null,
  reward?: ModelIntInput | null,
  endDate?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTopicInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  type?: string | null,
  reward?: number | null,
  endDate?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteTopicInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateProposalInput = {
  id?: string | null,
  title: string,
  description: string,
  topicID: string,
  userID: string,
  _version?: number | null,
};

export type ModelProposalConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  topicID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelProposalConditionInput | null > | null,
  or?: Array< ModelProposalConditionInput | null > | null,
  not?: ModelProposalConditionInput | null,
};

export type UpdateProposalInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  topicID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteProposalInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateCommentInput = {
  id?: string | null,
  proposalID: string,
  content: string,
  userID: string,
  _version?: number | null,
};

export type ModelCommentConditionInput = {
  proposalID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  proposalID?: string | null,
  content?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteCommentInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateVoteInput = {
  id?: string | null,
  proposalID: string,
  userID: string,
  _version?: number | null,
};

export type ModelVoteConditionInput = {
  proposalID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
};

export type UpdateVoteInput = {
  id: string,
  proposalID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteVoteInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  email: string,
  tokens: number,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  tokens?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  tokens?: number | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelStringInput | null,
  reward?: ModelIntInput | null,
  endDate?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelTopicFilterInput | null > | null,
  or?: Array< ModelTopicFilterInput | null > | null,
  not?: ModelTopicFilterInput | null,
};

export type ModelProposalFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  topicID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelProposalFilterInput | null > | null,
  or?: Array< ModelProposalFilterInput | null > | null,
  not?: ModelProposalFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  proposalID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  proposalID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  tokens?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type CreateTopicMutationVariables = {
  input: CreateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type CreateTopicMutation = {
  createTopic:  {
    __typename: "Topic",
    id: string,
    title: string,
    description: string | null,
    type: string,
    reward: number,
    endDate: string | null,
    proposals:  {
      __typename: "ModelProposalConnection",
      items:  Array< {
        __typename: "Proposal",
        id: string,
        title: string,
        description: string,
        topicID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTopicMutationVariables = {
  input: UpdateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type UpdateTopicMutation = {
  updateTopic:  {
    __typename: "Topic",
    id: string,
    title: string,
    description: string | null,
    type: string,
    reward: number,
    endDate: string | null,
    proposals:  {
      __typename: "ModelProposalConnection",
      items:  Array< {
        __typename: "Proposal",
        id: string,
        title: string,
        description: string,
        topicID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTopicMutationVariables = {
  input: DeleteTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type DeleteTopicMutation = {
  deleteTopic:  {
    __typename: "Topic",
    id: string,
    title: string,
    description: string | null,
    type: string,
    reward: number,
    endDate: string | null,
    proposals:  {
      __typename: "ModelProposalConnection",
      items:  Array< {
        __typename: "Proposal",
        id: string,
        title: string,
        description: string,
        topicID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProposalMutationVariables = {
  input: CreateProposalInput,
  condition?: ModelProposalConditionInput | null,
};

export type CreateProposalMutation = {
  createProposal:  {
    __typename: "Proposal",
    id: string,
    title: string,
    description: string,
    topicID: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        proposalID: string,
        content: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        proposalID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProposalMutationVariables = {
  input: UpdateProposalInput,
  condition?: ModelProposalConditionInput | null,
};

export type UpdateProposalMutation = {
  updateProposal:  {
    __typename: "Proposal",
    id: string,
    title: string,
    description: string,
    topicID: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        proposalID: string,
        content: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        proposalID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProposalMutationVariables = {
  input: DeleteProposalInput,
  condition?: ModelProposalConditionInput | null,
};

export type DeleteProposalMutation = {
  deleteProposal:  {
    __typename: "Proposal",
    id: string,
    title: string,
    description: string,
    topicID: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        proposalID: string,
        content: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        proposalID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    proposalID: string,
    content: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    proposalID: string,
    content: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    proposalID: string,
    content: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote:  {
    __typename: "Vote",
    id: string,
    proposalID: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote:  {
    __typename: "Vote",
    id: string,
    proposalID: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote:  {
    __typename: "Vote",
    id: string,
    proposalID: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string | null,
    email: string,
    tokens: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string | null,
    email: string,
    tokens: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string | null,
    email: string,
    tokens: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTopicsQuery = {
  syncTopics:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "Topic",
      id: string,
      title: string,
      description: string | null,
      type: string,
      reward: number,
      endDate: string | null,
      proposals:  {
        __typename: "ModelProposalConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        email: string,
        tokens: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetTopicQueryVariables = {
  id: string,
};

export type GetTopicQuery = {
  getTopic:  {
    __typename: "Topic",
    id: string,
    title: string,
    description: string | null,
    type: string,
    reward: number,
    endDate: string | null,
    proposals:  {
      __typename: "ModelProposalConnection",
      items:  Array< {
        __typename: "Proposal",
        id: string,
        title: string,
        description: string,
        topicID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicsQuery = {
  listTopics:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "Topic",
      id: string,
      title: string,
      description: string | null,
      type: string,
      reward: number,
      endDate: string | null,
      proposals:  {
        __typename: "ModelProposalConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        email: string,
        tokens: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncProposalsQueryVariables = {
  filter?: ModelProposalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProposalsQuery = {
  syncProposals:  {
    __typename: "ModelProposalConnection",
    items:  Array< {
      __typename: "Proposal",
      id: string,
      title: string,
      description: string,
      topicID: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        email: string,
        tokens: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      votes:  {
        __typename: "ModelVoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetProposalQueryVariables = {
  id: string,
};

export type GetProposalQuery = {
  getProposal:  {
    __typename: "Proposal",
    id: string,
    title: string,
    description: string,
    topicID: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        proposalID: string,
        content: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        proposalID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProposalsQueryVariables = {
  filter?: ModelProposalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProposalsQuery = {
  listProposals:  {
    __typename: "ModelProposalConnection",
    items:  Array< {
      __typename: "Proposal",
      id: string,
      title: string,
      description: string,
      topicID: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string | null,
        email: string,
        tokens: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      votes:  {
        __typename: "ModelVoteConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentsQuery = {
  syncComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      proposalID: string,
      content: string,
      userID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    proposalID: string,
    content: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      proposalID: string,
      content: string,
      userID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVotesQuery = {
  syncVotes:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      proposalID: string,
      userID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote:  {
    __typename: "Vote",
    id: string,
    proposalID: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      proposalID: string,
      userID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string | null,
    email: string,
    tokens: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateTopicSubscription = {
  onCreateTopic:  {
    __typename: "Topic",
    id: string,
    title: string,
    description: string | null,
    type: string,
    reward: number,
    endDate: string | null,
    proposals:  {
      __typename: "ModelProposalConnection",
      items:  Array< {
        __typename: "Proposal",
        id: string,
        title: string,
        description: string,
        topicID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTopicSubscription = {
  onUpdateTopic:  {
    __typename: "Topic",
    id: string,
    title: string,
    description: string | null,
    type: string,
    reward: number,
    endDate: string | null,
    proposals:  {
      __typename: "ModelProposalConnection",
      items:  Array< {
        __typename: "Proposal",
        id: string,
        title: string,
        description: string,
        topicID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTopicSubscription = {
  onDeleteTopic:  {
    __typename: "Topic",
    id: string,
    title: string,
    description: string | null,
    type: string,
    reward: number,
    endDate: string | null,
    proposals:  {
      __typename: "ModelProposalConnection",
      items:  Array< {
        __typename: "Proposal",
        id: string,
        title: string,
        description: string,
        topicID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProposalSubscription = {
  onCreateProposal:  {
    __typename: "Proposal",
    id: string,
    title: string,
    description: string,
    topicID: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        proposalID: string,
        content: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        proposalID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProposalSubscription = {
  onUpdateProposal:  {
    __typename: "Proposal",
    id: string,
    title: string,
    description: string,
    topicID: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        proposalID: string,
        content: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        proposalID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProposalSubscription = {
  onDeleteProposal:  {
    __typename: "Proposal",
    id: string,
    title: string,
    description: string,
    topicID: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string | null,
      email: string,
      tokens: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        proposalID: string,
        content: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        proposalID: string,
        userID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    proposalID: string,
    content: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    proposalID: string,
    content: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    proposalID: string,
    content: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVoteSubscription = {
  onCreateVote:  {
    __typename: "Vote",
    id: string,
    proposalID: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote:  {
    __typename: "Vote",
    id: string,
    proposalID: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote:  {
    __typename: "Vote",
    id: string,
    proposalID: string,
    userID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string | null,
    email: string,
    tokens: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string | null,
    email: string,
    tokens: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string | null,
    email: string,
    tokens: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
