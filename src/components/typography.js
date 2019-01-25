import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 30px;
  color: red;
`

export const H2 = styled(H1.withComponent('h2'))`
  font-size: 24px;
`

export const H3 = styled(H1.withComponent('h3'))`
  font-size: 18px;
`

export const H4 = styled(H1.withComponent('h4'))`
  font-size: 15px;
  color: green;
`
