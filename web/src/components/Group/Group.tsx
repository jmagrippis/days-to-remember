import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'

import { QueryGroupArgs, GroupQuery } from '../../types'
import { MilestonesOverview } from './MilestonesOverview/MilestonesOverview'
import { styles } from '../styles'

const GET_GROUP = gql`
  query Group($id: ID!) {
    group(id: $id) {
      id
      name
    }
  }
`

class GetGroupQuery extends Query<GroupQuery, QueryGroupArgs> {}

const Header = styled.h1`
  font-family: ${styles.fontFamily.cursive};
`
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

      const { name } = data.group

      return (
        <div>
          <Header>{name}</Header>
          <MilestonesOverview groupId={id} />
        </div>
      )
    }}
  </GetGroupQuery>
)
