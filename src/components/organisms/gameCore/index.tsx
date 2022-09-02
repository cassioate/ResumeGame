import React, { useContext, useEffect } from 'react';
import { GameContext, GameContextProvider } from '../../../context/ResumeGameContext/gameContext';
import { BackGround } from '../../atoms/background';
import { GameBox } from '../../atoms/gameBox';
import { Hero } from '../hero';
import { Arrows } from '../keyboard/arrows';
import { Platforms } from '../platforms';
import { StartGame } from '../../molecules/startGame';
import { Container } from './styles';

export const Game = () => {
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