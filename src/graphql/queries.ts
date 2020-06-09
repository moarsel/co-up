/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncTopics = /* GraphQL */ `
  query SyncTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTopics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        type
        reward
        endDate
        proposals {
          nextToken
          startedAt
        }
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      title
      description
      type
      reward
      endDate
      proposals {
        items {
          id
          title
          description
          topicID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      userID
      user {
        id
        name
        email
        tokens
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        type
        reward
        endDate
        proposals {
          nextToken
          startedAt
        }
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProposals = /* GraphQL */ `
  query SyncProposals(
    $filter: ModelProposalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProposals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        topicID
        topic {
          id
          title
          description
          type
          reward
          endDate
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
        votes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProposal = /* GraphQL */ `
  query GetProposal($id: ID!) {
    getProposal(id: $id) {
      id
      title
      description
      topicID
      topic {
        id
        title
        description
        type
        reward
        endDate
        proposals {
          nextToken
          startedAt
        }
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      userID
      user {
        id
        name
        email
        tokens
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          proposalID
          content
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      votes {
        items {
          id
          proposalID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listProposals = /* GraphQL */ `
  query ListProposals(
    $filter: ModelProposalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProposals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        topicID
        topic {
          id
          title
          description
          type
          reward
          endDate
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
        votes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        proposalID
        proposal {
          id
          title
          description
          topicID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        content
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      proposalID
      proposal {
        id
        title
        description
        topicID
        topic {
          id
          title
          description
          type
          reward
          endDate
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
        votes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      content
      userID
      user {
        id
        name
        email
        tokens
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        proposalID
        proposal {
          id
          title
          description
          topicID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        content
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVotes = /* GraphQL */ `
  query SyncVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        proposalID
        proposal {
          id
          title
          description
          topicID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
      id
      proposalID
      proposal {
        id
        title
        description
        topicID
        topic {
          id
          title
          description
          type
          reward
          endDate
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
        votes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      userID
      user {
        id
        name
        email
        tokens
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        proposalID
        proposal {
          id
          title
          description
          topicID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userID
        user {
          id
          name
          email
          tokens
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        tokens
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      tokens
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        tokens
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
