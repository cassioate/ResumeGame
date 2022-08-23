import React from 'react';
import{BackGroundStyled, Container} from './styles';

export const BackGround = ({children}: any) => {
  return (
    <Container>
      <BackGroundStyled
        src={`./assets/background/background3.jpg`}
      /> 
      {children}
    </Container>
  );
}

