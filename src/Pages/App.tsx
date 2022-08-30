import React from 'react';
import { Footer } from '../components/organisms/footer';
import { AppStyled } from './App-styled';
import { Header } from '../components/organisms/header';
import { MoveHeroContextProvider } from '../context/heroPropsContext';
import { KeyboardContextProvider } from '../context/keyboardContext';
import { ResumeGame } from '../components/organisms/resumeGame';
import { GameContextProvider } from '../context/gameContext';

export const App = () => {
  return (
      <AppStyled>
        <MoveHeroContextProvider>
          <KeyboardContextProvider>
            <>
              <Header/>
                <GameContextProvider>
                  <ResumeGame/>
                </GameContextProvider>
              <Footer>
              </Footer>
            </>   
            </KeyboardContextProvider>        
        </MoveHeroContextProvider>
      </AppStyled>
  );
}