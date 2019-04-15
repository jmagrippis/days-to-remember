import { GraphQLDateTime } from 'graphql-iso-date'

import { group } from './group'
import { milestonesForGroup } from './milestonesForGroup'

export const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    group,
    milestonesForGroup
  }
}
