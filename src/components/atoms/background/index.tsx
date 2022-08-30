import React from 'react';
import{BackGroundStyled} from './styles';

export const BackGround = ({children}: any) => {
  return (
      <BackGroundStyled
        id='BackGroundImg'
        src={`./assets/background/background3.jpg`}
      /> 
  );
}

