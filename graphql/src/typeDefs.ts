import { gql } from 'apollo-server'

export const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID!
    name: String!
  }

  type Suggestion {
    id: ID!
    name: String!
    milestone: Milestone!
    suggestedBy: User!
    description: String
  }

  type Milestone {
    id: ID!
    name: String!
    dateTime: DateTime!
    suggestions: [Suggestion!]!
    event: Event!
    group: Group!
    description: String
  }

  type Event {
    id: ID!
    name: String!
    dateTime: DateTime!
    milestones: [Milestone!]!
  }

  type Group {
    id: ID!
    name: String!
    events: [Event!]!
    members: [User!]!
  }

  type Query {
    group(id: ID!): Group
    milestonesForGroup(groupId: ID!): [Milestone!]!
  }
`
