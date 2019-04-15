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
    day: Day!
    group: Group!
    description: String
  }

  type Day {
    id: ID!
    name: String!
    dateTime: DateTime!
    milestones: [Milestone!]!
  }

  type Group {
    id: ID!
    name: String!
    days: [Day!]!
    members: [User!]!
  }

  type Query {
    group(id: ID!): Group
    milestonesForGroup(groupId: ID!): [Milestone!]!
  }
`
