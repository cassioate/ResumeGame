import React, { useContext } from 'react';
import{ButtonIconSpace} from './styles';
import { MdSpaceBar } from "react-icons/md"
import { HeroMoveContext } from '../../../context/moveHeroContext';
import useEventListener from '@use-it/event-listener';

export const SpaceKeyboard = () => {
  return (
    <ButtonIconSpace>
      <MdSpaceBar/>
    </ButtonIconSpace>
  );
}

