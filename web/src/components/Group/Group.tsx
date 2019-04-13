import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import {
  QueryGroupArgs,
  Query as QueryGroupData,
  GroupQuery
} from '../../types'
import { Days } from './Days/Days'

const GET_GROUP = gql`
  query Group($id: ID!) {
    group(id: $id) {
      id
      name
      days {
        id
        name
        timestamp
      }
    }
  }
`

class GetGroupQuery extends Query<GroupQuery, QueryGroupArgs> {}

type Props = {
  id: string
}

export const Group = ({ id }: Props) => (
  <GetGroupQuery query={GET_GROUP} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return null
      if (error) return `Error!: ${error}`
      if (!data.group) {
        return `Group ${id} not found!`
      }

      const { name, days } = data.group

      return (
        <div>
          <h1>{name}</h1>
          <Days days={days} />
        </div>
      )
    }}
  </GetGroupQuery>
)
