import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import moment from 'moment'
import memoizeOne from 'memoize-one'

import {
  MilestonesForGroupQuery,
  QueryMilestonesForGroupArgs,
  Milestone
} from '../../../types'
import { FutureMilestone } from './FutureMilestone/FutureMilestone'
import { PastMilestone } from './PastMilestone/PastMilestone'

const groupMilestones = memoizeOne(
  (
    milestones: Partial<Milestone>[],
    now = moment.utc()
  ): {
    pastMilestones: Partial<Milestone>[]
    futureMilestones: Partial<Milestone>[]
  } =>
    milestones.reduce(
      (acc, milestone) => {
        acc[
          moment.utc(milestone.dateTime) <= now
            ? 'pastMilestones'
            : 'futureMilestones'
        ].push(milestone)
        return acc
      },
      { pastMilestones: [], futureMilestones: [] }
    )
)
const GET_MILESTONES_FOR_GROUP = gql`
  query MilestonesForGroup($groupId: ID!) {
    milestonesForGroup(groupId: $groupId) {
      id
      name
      day {
        id
      }
      dateTime
    }
  }
`

const Container = styled.div``

class GetMilestonesForGroupQuery extends Query<
  MilestonesForGroupQuery,
  QueryMilestonesForGroupArgs
> {}

type Props = {
  groupId: string
}

export const MilestonesOverview = ({ groupId }: Props) => (
  <GetMilestonesForGroupQuery
    query={GET_MILESTONES_FOR_GROUP}
    variables={{ groupId }}
  >
    {({ loading, error, data }) => {
      if (loading) return null
      if (error) return `Error!: ${error}`
      if (!data.milestonesForGroup.length) {
        return `No milestones for ${groupId}!`
      }

      const { pastMilestones, futureMilestones } = groupMilestones(
        data.milestonesForGroup
      )

      return (
        <Container>
          <ul>
            {pastMilestones.map((milestone) => (
              <PastMilestone
                key={milestone.id}
                name={milestone.name}
                dateTime={milestone.dateTime}
              />
            ))}
          </ul>
          --- NOW ---
          <ul>
            {futureMilestones.map((milestone) => (
              <FutureMilestone
                key={milestone.id}
                name={milestone.name}
                dateTime={milestone.dateTime}
              />
            ))}
          </ul>
        </Container>
      )
    }}
  </GetMilestonesForGroupQuery>
)
