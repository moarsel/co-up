// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Topic, Proposal, User, Comment, Vote } = initSchema(schema);

export {
  Topic,
  Proposal,
  User,
  Comment,
  Vote
};