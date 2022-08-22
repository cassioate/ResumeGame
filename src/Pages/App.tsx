import React from 'react';
import {Hero} from '../components/hero';
import { BackGround } from '../components/background';
import { GameBox } from './App-styled';
import { MoveHeroContextProvider } from '../context/moveHeroContext';
import { Arrows } from '../components/buttons/arrows';
import { Footer } from '../components/footer';

export const App = () => {
  return (
      <MoveHeroContextProvider>
        <>
          <GameBox>
            <BackGround/>
            <Hero/>
          </GameBox>     
          <Footer>
            <Arrows/>
          </Footer>
        </>
      </MoveHeroContextProvider>
  );
}