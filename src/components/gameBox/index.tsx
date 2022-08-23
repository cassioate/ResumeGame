import React, { Children, useContext } from 'react';
import { HeroMoveContext } from '../../context/moveHeroContext';
import { GameBoxStyled } from './gameBox';

export const GameBox = ({children}: any) => {
  return (
      <GameBoxStyled>
        {children}
      </GameBoxStyled>
  );
}