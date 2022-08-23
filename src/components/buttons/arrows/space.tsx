import React, { useContext } from 'react';
import{ButtonIconSpace} from './styles';
import { MdSpaceBar } from "react-icons/md"
import { HeroMoveContext } from '../../../context/moveHeroContext';
import useEventListener from '@use-it/event-listener';

export const SpaceKeyboard = () => {
  const {setBottom, bottom} = useContext(HeroMoveContext);

  const changePosition = () => {
    setBottom(bottom+150)
  }

  useEventListener('keydown', async (event: any) => {
    if (event.key === ' '){
      changePosition()
    }
  })

  return (
    <ButtonIconSpace onClick={() => changePosition()}>
      <MdSpaceBar/>
    </ButtonIconSpace>
  );
}

