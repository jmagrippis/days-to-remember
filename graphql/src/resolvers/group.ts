import { QueryGroupArgs, Group } from '../types'

export const group = (_: object, { id }: QueryGroupArgs): Group => ({
  id,
  name: 'Johnny 💜 Alexandra',
  events: [
    {
      id: 'event-id',
      name: 'First Date',
      dateTime: '2019-02-13T19:00:00.000Z',
      milestones: []
    }
  ],
  members: []
})
