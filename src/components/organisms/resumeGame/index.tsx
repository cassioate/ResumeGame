import React, { useContext, useEffect } from 'react';
import { GameContext, GameContextProvider } from '../../../context/gameContext';
import { BackGround } from '../../atoms/background';
import { GameBox } from '../../molecules/gameBox';
import { Hero } from '../../molecules/hero';
import { Arrows } from '../../molecules/keyboard/arrows';
import { Platforms } from '../../molecules/platforms';
import { StartGame } from '../../molecules/startGame';
import { Container } from './styles';

export const ResumeGame = () => {
  const { END_GAME } = useContext(GameContext)

  useEffect(() => {
  }, [END_GAME])

  return (
    <Container id="ContainerResumeGame">
      <GameBox>
        { END_GAME ? <StartGame/> : null }
        <BackGround/>
        <Hero/>
        <Platforms/>
      </GameBox> 
      <Arrows/>
    </Container>
  );
}