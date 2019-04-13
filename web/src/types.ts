type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Day = {
  id: Scalars['ID']
  name: Scalars['String']
  timestamp: Scalars['Int']
}

export type Group = {
  id: Scalars['ID']
  name: Scalars['String']
  days: Array<Day>
}

export type Query = {
  group?: Maybe<Group>
}

export type QueryGroupArgs = {
  id: Scalars['ID']
}
export type GroupQueryVariables = {
  id: Scalars['ID']
}

export type GroupQuery = { __typename?: 'Query' } & {
  group: Maybe<
    { __typename?: 'Group' } & Pick<Group, 'id' | 'name'> & {
        days: Array<
          { __typename?: 'Day' } & Pick<Day, 'id' | 'name' | 'timestamp'>
        >
      }
  >
}
