import React from 'react';
import { AppStyled } from '../App-styled';
import { Game } from '../../components/organisms/gameCore';
import { GravityContextProvider } from '../../context/ResumeGameContext/gravityContext';
import { KeyboardContextProvider } from '../../context/ResumeGameContext/keyboardContext';
import { GameStatsProvider } from '../../context/ResumeGameContext/gameStatsContext';

export const ResumeGame = () => {
  return (
      <AppStyled>
        <GameStatsProvider>
          <GravityContextProvider>
            <KeyboardContextProvider>
              <Game/> 
            </KeyboardContextProvider>        
          </GravityContextProvider>
        </GameStatsProvider>
      </AppStyled>
  );
}