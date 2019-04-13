import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import 'reset-css'

import { Group } from './Group/Group'
import { apolloClient } from '../apolloClient'

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <React.Fragment>
      <header>Days to remember</header>
      <Group id="hardcoded-group-id" />
      <footer>Made in London</footer>
    </React.Fragment>
  </ApolloProvider>
)
