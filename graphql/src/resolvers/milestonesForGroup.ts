import { QueryMilestonesForGroupArgs, Milestone } from '../types'
import { group as getGroup } from './group'

export const milestonesForGroup = (
  _: object,
  { groupId }: QueryMilestonesForGroupArgs
): Milestone[] => {
  const event = {
    id: 'event-id',
    name: 'First Date',
    dateTime: '2019-02-13T19:00:00.000Z',
    milestones: []
  }

  const group = getGroup({}, { id: groupId })

  return [
    {
      group,
      event,
      id: `milestone-a-for-${groupId}`,
      name: '1 month anniversary',
      dateTime: '2019-03-13T19:00:00.000Z',
      suggestions: []
    },
    {
      group,
      event,
      id: `milestone-b-for-${groupId}`,
      name: '3 month anniversary',
      dateTime: '2019-05-13T19:00:00.000Z',
      suggestions: []
    },
    {
      group,
      event,
      id: `milestone-c-for-${groupId}`,
      name: '1 year anniversary',
      dateTime: '2020-02-13T19:00:00.000Z',
      suggestions: []
    }
  ]
}
