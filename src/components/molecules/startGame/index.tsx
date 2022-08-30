import React from 'react';
import { StartGameButton } from '../../atoms/buttons/startGame';
import { StartGameStyled } from './startGame';

export const StartGame = ({children}: any) => {
  
  return (
    <StartGameStyled  id='StartGame'>
      <StartGameButton/>
    </StartGameStyled>
  );
}