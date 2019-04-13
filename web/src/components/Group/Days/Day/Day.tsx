import * as React from 'react'
import moment, { Moment } from 'moment'

import { Day as DayType } from '../../../../types'
import { DaysFromNow } from './DaysFromNow/DaysFromNow'

interface Props extends DayType {}

const getMonthsFromNow = ({
  then,
  now = moment.utc()
}: {
  then: Moment
  now?: Moment
}) => now.diff(then, 'months')

const getDaysFromNow = ({
  then,
  now = moment.utc()
}: {
  then: Moment
  now?: Moment
}) => now.diff(then, 'days', true)

export const Day = ({ name, timestamp }: Props) => {
  const now = moment.utc()
  const then = moment.utc(timestamp * 1000)
  const nextMilestone = then.clone().add(3, 'month')

  return (
    <li>
      <h2>{name}</h2>
      <div>
        <div>{getMonthsFromNow({ now, then })} months ago</div>
        <div>
          Next milestone is in <DaysFromNow then={nextMilestone} /> days!
        </div>
      </div>
    </li>
  )
}
