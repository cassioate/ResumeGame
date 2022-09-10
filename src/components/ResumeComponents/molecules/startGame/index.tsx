import React from 'react';
import { StartGameButton } from '../../atoms/startGame';
import { StartGameStyled } from './startGame';

export const StartGame = ({children}: any) => {
  
  return (
    <StartGameStyled  id='StartGame'>
      <StartGameButton/>
    </StartGameStyled>
  );
}