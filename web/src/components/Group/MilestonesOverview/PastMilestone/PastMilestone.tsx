import * as React from 'react'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'

import { styles } from '../../../styles'

const Container = styled.li`
  display: flex;
  align-items: center;
`

const Name = styled.h2`
  font-family: ${styles.fontFamily.cursive};
`

const Spacer = styled.span`
  margin: 0 0.5em;
`

type Props = {
  name: string
  dateTime: string
}

export const PastMilestone = ({ name, dateTime }: Props) => (
  <Container>
    <Name>{name}</Name>
    <Spacer>-</Spacer>
    <TimeAgo date={dateTime} />
  </Container>
)
