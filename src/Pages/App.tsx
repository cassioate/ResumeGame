import React from 'react';
import {Hero} from '../components/hero';
import { BackGround } from '../components/background';
import { MoveHeroContextProvider } from '../context/moveHeroContext';
import { Arrows } from '../components/buttons/arrows';
import { Footer } from '../components/footer';
import { GameBox } from '../components/gameBox';
import { AppStyled } from './App-styled';
// import { DirectionContextProvider } from '../context/directionContext';

export const App = () => {
  
  return (
      <AppStyled>
        <MoveHeroContextProvider>
          {/* <DirectionContextProvider> */}
            <>
              <GameBox>
                <BackGround/>
                <Hero/>
              </GameBox> 
              <Footer>
                <Arrows/>
              </Footer>
            </>           
          {/* </DirectionContextProvider> */}
        </MoveHeroContextProvider>
      </AppStyled>
  );
}