type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: string
}

export type Day = {
  id: Scalars['ID']
  name: Scalars['String']
  dateTime: Scalars['DateTime']
  milestones: Array<Milestone>
}

export type Group = {
  id: Scalars['ID']
  name: Scalars['String']
  days: Array<Day>
  members: Array<User>
}

export type Milestone = {
  id: Scalars['ID']
  name: Scalars['String']
  dateTime: Scalars['DateTime']
  suggestions: Array<Suggestion>
  day: Day
  group: Group
  description?: Maybe<Scalars['String']>
}

export type Query = {
  group?: Maybe<Group>
  milestonesForGroup: Array<Milestone>
}

export type QueryGroupArgs = {
  id: Scalars['ID']
}

export type QueryMilestonesForGroupArgs = {
  groupId: Scalars['ID']
}

export type Suggestion = {
  id: Scalars['ID']
  name: Scalars['String']
  milestone: Milestone
  suggestedBy: User
  description?: Maybe<Scalars['String']>
}

export type User = {
  id: Scalars['ID']
  name: Scalars['String']
}
