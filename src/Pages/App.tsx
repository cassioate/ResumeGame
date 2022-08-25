import React from 'react';
import {Hero} from '../components/molecules/hero';
import { BackGround } from '../components/atoms/background';
import { MoveHeroContextProvider } from '../context/moveHeroContext';
import { Arrows } from '../components/molecules/buttons/arrows';
import { Footer } from '../components/organisms/footer';
import { GameBox } from '../components/atoms/gameBox';
import { AppStyled } from './App-styled';
// import { DirectionContextProvider } from '../context/directionContext';

export const App = () => {
  
  return (
      <AppStyled>
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
      </AppStyled>
  );
}