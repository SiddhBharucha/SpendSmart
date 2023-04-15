import styled from "styled-components";
import SpendSmart from './img/SpendSmart.png';

function App() {
  return (
    <AppStyled bg={SpendSmart} className="App">
      
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.SpendSmart});
  position: relative;
`;

export default App;
