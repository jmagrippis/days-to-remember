import * as React from 'react'

import { Day as DayType } from '../../../../types'

interface Props extends DayType {}

export const Day = ({ name }: Props) => (
  <li>
    <h2>{name}</h2>
  </li>
)
