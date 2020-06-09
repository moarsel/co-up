import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Topic {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly type: string;
  readonly reward: number;
  readonly endDate?: string;
  readonly proposals?: Proposal[];
  readonly userID: string;
  readonly user?: User;
  constructor(init: ModelInit<Topic>);
  static copyOf(source: Topic, mutator: (draft: MutableModel<Topic>) => MutableModel<Topic> | void): Topic;
}

export declare class Proposal {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly topic?: Topic;
  readonly userID: string;
  readonly user?: User;
  readonly comments?: Comment[];
  readonly votes?: Vote[];
  constructor(init: ModelInit<Proposal>);
  static copyOf(source: Proposal, mutator: (draft: MutableModel<Proposal>) => MutableModel<Proposal> | void): Proposal;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly email: string;
  readonly tokens: number;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Comment {
  readonly id: string;
  readonly proposal?: Proposal;
  readonly content: string;
  readonly userID: string;
  readonly user?: User;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class Vote {
  readonly id: string;
  readonly proposal?: Proposal;
  readonly userID: string;
  readonly user?: User;
  constructor(init: ModelInit<Vote>);
  static copyOf(source: Vote, mutator: (draft: MutableModel<Vote>) => MutableModel<Vote> | void): Vote;
}