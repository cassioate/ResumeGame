import React from 'react';
import { Footer } from '../../components/molecules/footer';
import { AppStyled } from '../App-styled';
import { Header } from '../../components/molecules/header';
import { Game } from '../../components/organisms/gameCore';
import { GameContextProvider } from '../../context/ResumeGameContext/gameContext';
import { GravityContextProvider } from '../../context/ResumeGameContext/gravityContext';
import { KeyboardContextProvider } from '../../context/ResumeGameContext/keyboardContext';

export const ResumeGame = () => {
  return (
      <AppStyled>
        <GameContextProvider>
          <GravityContextProvider>
            <KeyboardContextProvider>
              <Game/> 
            </KeyboardContextProvider>        
          </GravityContextProvider>
        </GameContextProvider>
      </AppStyled>
  );
}