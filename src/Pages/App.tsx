import React from 'react';
import {Hero} from '../components/molecules/hero';
import { BackGround } from '../components/atoms/background';
import { Arrows } from '../components/molecules/keyboard/arrows';
import { Footer } from '../components/organisms/footer';
import { GameBox } from '../components/atoms/gameBox';
import { AppStyled } from './App-styled';
import { Header } from '../components/organisms/header';
import { MoveHeroContextProvider } from '../context/heroPropsContext';
import { KeyboardContextProvider } from '../context/keyboardContext';
import { ResumeGame } from '../components/organisms/resumeGame';

export const App = () => {
  return (
      <AppStyled>
        <MoveHeroContextProvider>
          <KeyboardContextProvider>
            <>
              <Header/>
                <ResumeGame/>
              <Footer>
              </Footer>
            </>   
            </KeyboardContextProvider>        
        </MoveHeroContextProvider>
      </AppStyled>
  );
}