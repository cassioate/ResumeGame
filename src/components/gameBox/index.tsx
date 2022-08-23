import React from 'react';
import { GameBoxStyled } from './gameBox';

export const GameBox = ({children}: any) => {
  return (
      <GameBoxStyled>
        {children}
      </GameBoxStyled>
  );
}