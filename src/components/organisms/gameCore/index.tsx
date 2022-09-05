import React, { useContext, useEffect } from 'react';
import { GameContext, GameContextProvider } from '../../../context/ResumeGameContext/gameContext';
import { BackGround } from '../../atoms/background';
import { GameBox } from '../../atoms/gameBox';
import { Hero } from '../hero';
import { Arrows } from '../keyboard/arrows';
import { Platforms } from '../platforms';
import { StartGame } from '../../molecules/startGame';
import { Container } from './styles';
import { Walls } from '../walls';
import { Spikes } from '../spikes';
import { Decoration } from '../../atoms/decoration';
import { Decorations } from '../decorations';

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
        {/* <Spikes/>
        <Decorations/>
        <Walls/> */}
      </GameBox> 
      <Arrows/>
    </Container>
  );
}