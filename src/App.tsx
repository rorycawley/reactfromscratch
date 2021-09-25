import './styles.css';
import logo from './purchasegrid-logo.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background-color: #131a22;
`;

export const Logo = styled.img`
  width: 6em;
  border: 1px solid #131a22;
  padding: 0.2em 0.1em;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffffff;
    border-radius: 0.2em;
  }
`;

export const App = () => {
  return (
    <Container>
      <Logo src={logo} alt='purchasegrid' />
      <h1>App</h1>
    </Container>
  );
};
