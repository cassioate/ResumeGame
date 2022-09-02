import React, { useContext } from 'react';
import{MenuText, StartButton} from './styles';
import { BsPlay } from "react-icons/bs"
import { GameContext } from '../../../../context/ResumeGameContext/gameContext';

export const StartGameButton = () => {
  const { setEND_GAME } = useContext(GameContext)
  return (
    <StartButton id='StartGameButton' onClick={() => setEND_GAME(false)}>
      <MenuText>
        START
        <BsPlay/>
      </MenuText>
    </StartButton>
  );
}