import * as React from 'react'

import { Day as DayType } from '../../../types'
import { Day } from './Day/Day'

type Props = {
  days: DayType[]
}

export const Days = ({ days }: Props) => (
  <ul>
    {days.map((day) => (
      <Day key={day.id} {...day} />
    ))}
  </ul>
)
