import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { styled } from 'styled-components';
// import Circle from './Circle';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1``;

function App() {
  type TPlayer = {
    name: string;
    age?: number;
  };

  interface IPlayer {
    readonly name: string;
    age?: number;
  }

  const player: IPlayer = {
    name: 'as',
  };
  function playerMaker(name: string): IPlayer {
    return {
      name,
    };
  }

  const playerMake = (name: string): IPlayer => ({
    name,
  });
  const nico = playerMaker('nico');
  nico.age = 13;

  const [userName, setuserName] = useState('');
  const onchange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setuserName(value);
  };
  const onSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello', userName);
    setuserName('');
  };
  return (
    <>
      <GlobalStyles />
      {/* <Circle borderColor="blue" bgColor={'tomato'} />
      <Circle bgColor={'teal'} text="im here" /> */}
      <Container>
        <form onSubmit={onSubmit}>
          <input
            value={userName}
            onChange={onchange}
            type="text"
            placeholder="userName"
          />
          <button>Login</button>
        </form>
      </Container>
    </>
  );
}

export default App;
