import { QueryGroupArgs, Group } from '../types'

export const group = (_: object, { id }: QueryGroupArgs): Group => ({
  id,
  name: 'Johnny 💜 Alexandra',
  days: [
    {
      id: 'day-id',
      name: 'First Date',
      timestamp: 1550084400
    }
  ]
})
