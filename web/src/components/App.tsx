import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import 'reset-css'
import styled from 'styled-components'

import './index.css'
import { Group } from './Group/Group'
import { apolloClient } from '../apolloClient'
import { Header } from './Header/Header'

const Container = styled.div`
  background-color: #f1ffe7;
  color: #070600;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <Container>
      <Header />
      <Group id="hardcoded-group-id" />
      <footer>Made with 💜 in London</footer>
    </Container>
  </ApolloProvider>
)
