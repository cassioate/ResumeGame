import React from 'react';
import {Hero} from '../components/hero';
import { BackGround } from '../components/background';
import { MoveHeroContextProvider } from '../context/moveHeroContext';
import { Arrows } from '../components/buttons/arrows';
import { Footer } from '../components/footer';
import { GameBox } from '../components/gameBox';

export const App = () => {
  
  return (
      <>
      
        <GameBox>
          <BackGround/>
          <MoveHeroContextProvider>
            <>
              <Hero/>
              <Arrows/>
            </>
          </MoveHeroContextProvider>
        </GameBox> 
        <Footer>
        </Footer>
      </>
  );
}