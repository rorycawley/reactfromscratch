import './styles.css'
import logo from './purchasegrid-logo.png'
import styled from 'styled-components'
import { ClickCounter } from './ClickCounter'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background-color: #131a22;
`

export const Logo = styled.img`
  width: 6em;
  border: 1px solid #131a22;
  padding: 0.2em 0.1em;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffffff;
    border-radius: 0.2em;
  }
`

export const App = () => {
  const naomi = 'naomi'
  return (
    <Container>
      <Logo src={logo} alt="purchasegrid" />
      <h1>
        sdf Progress Grid - {process.env.NODE_ENV} {process.env.name} {naomi}
      </h1>
      <ClickCounter />
    </Container>
  )
}
