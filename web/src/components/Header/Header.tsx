import * as React from 'react'
import styled from 'styled-components'

import { styles } from '../styles'

const Container = styled.header`
  font-family: ${styles.fontFamily.cursive};
`

export const Header = () => <Container>Days to remember</Container>
