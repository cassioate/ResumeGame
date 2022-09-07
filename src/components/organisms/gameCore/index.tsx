import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../../context/ResumeGameContext/gameContext';
import { BackGround } from '../../atoms/background';
import { GameBox } from '../../atoms/gameBox';
import { Hero } from '../hero';
import { Arrows } from '../keyboard/arrows';
import { Platforms } from '../platforms';
import { StartGame } from '../../molecules/startGame';
import { Container } from './styles';
import { Walls } from '../walls';
import { Spikes } from '../spikes';
import { Decorations } from '../decorations';
import { GenericTakeObjects } from '../genericTakeObjects';
import { Congratulations } from '../../molecules/congratulations';

export const Game = () => {
  const { END_GAME, CONGRATULATIONS } = useContext(GameContext)

  useEffect(() => {
  }, [END_GAME])

  return (
    <Container id="ContainerResumeGame">
      <GameBox>
        { END_GAME ? <StartGame/> : null }
        <BackGround/>
        <Hero/>
        <Platforms/>
        <Spikes/>
        <Decorations/>
        <Walls/>
        <GenericTakeObjects/>
        { CONGRATULATIONS ? <Congratulations/> : null }
        {/* <Congratulations/>  */}
      </GameBox> 
      <Arrows/>
    </Container>
  );
}