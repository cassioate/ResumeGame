import React, { useContext } from 'react';
import { BackGround } from '../../atoms/background';
import { GameBox } from '../../atoms/gameBox';
import { Hero } from '../hero';
import { Platforms } from '../platforms';
import { StartGame } from '../../molecules/startGame';
import { Container } from './styles';
import { Walls } from '../walls';
import { Spikes } from '../spikes';
import { Decorations } from '../decorations';
import { GenericTakeObjects } from '../genericTakeObjects';
import { Congratulations } from '../../molecules/congratulations';
import { GameStats } from '../../../context/ResumeGameContext/gameStatsContext';
import { GameMoveProvider } from '../../../context/ResumeGameContext/gameMoveContext';

export const Game = () => {
  const { END_GAME, CONGRATULATIONS } = useContext(GameStats)

  return (
    <Container id="ContainerResumeGame">
      <GameBox>
        { END_GAME ? <StartGame/> : null }
        <BackGround/>
        <GameMoveProvider>
          <>
            <Hero/>
            <Platforms/>
            <Spikes/>
            <Decorations/>
            <Walls/>
            <GenericTakeObjects/>
          </>
        </GameMoveProvider>
        { CONGRATULATIONS ? <Congratulations/> : null }
      </GameBox> 
      {/* <Arrows/> */}
    </Container>
  );
}