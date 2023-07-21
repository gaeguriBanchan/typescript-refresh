import React, { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100%;
  border: 5px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = 'default text',
}: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(0);
  setCounter('hello');
  setCounter(25);
  // setCounter(true);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? 'red'}>
      {text}
    </Container>
  );
};

export default Circle;
