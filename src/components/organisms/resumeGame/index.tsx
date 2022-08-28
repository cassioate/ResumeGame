import React from 'react';
import { BackGround } from '../../atoms/background';
import { GameBox } from '../../atoms/gameBox';
import { Hero } from '../../molecules/hero';
import { Arrows } from '../../molecules/keyboard/arrows';
import { Container } from './styles';

export const ResumeGame = () => {
  return (
      <Container>
        <GameBox>
          <BackGround/>
          <Hero/>
        </GameBox> 
        <Arrows/>
      </Container>
  );
}