import * as React from 'react'
import moment from 'moment'
import styled from 'styled-components'

import { DaysFromNow } from '../../../DaysFromNow/DaysFromNow'
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

export const FutureMilestone = ({ name, dateTime }: Props) => (
  <Container>
    <Name>{name}</Name>
    <Spacer>-</Spacer>
    <div>
      Happening in{' '}
      <strong>
        <DaysFromNow then={moment.utc(dateTime)} />
      </strong>{' '}
      days!
    </div>
  </Container>
)
