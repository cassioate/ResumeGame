import React, { useContext } from 'react';
import{MenuText, StartButton} from './styles';
import { BsPlay } from "react-icons/bs"
import { GameStats } from '../../../../context/ResumeGameContext/gameStatsContext';

export const StartGameButton = () => {
  const { setEND_GAME } = useContext(GameStats)
  return (
    <StartButton id='StartGameButton' onClick={() => setEND_GAME(false)}>
      <MenuText>
        START
        <BsPlay/>
      </MenuText>
    </StartButton>
  );
}