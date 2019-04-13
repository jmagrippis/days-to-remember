import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Day {
    id: ID!
    name: String!
    timestamp: Int!
  }

  type Group {
    id: ID!
    name: String!
    days: [Day!]!
  }

  type Query {
    group(id: ID!): Group
  }
`
