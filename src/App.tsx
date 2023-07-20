// import styled, { keyframes } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Circle from './Circle';

function App() {
  return (
    <>
      <GlobalStyles />
      <Circle borderColor="blue" bgColor={'tomato'} />
      <Circle bgColor={'teal'} text="im here" />
    </>
  );
}

export default App;
