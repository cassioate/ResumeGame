import React, { useContext } from 'react';
import{ButtonIconArrowDown} from './styles';
import { FiArrowDown } from "react-icons/fi"
import { HeroMoveContext } from '../../../context/moveHeroContext';
import useEventListener from '@use-it/event-listener';

export const ArrowDown = () => {
  const {setBottom, bottom} = useContext(HeroMoveContext);

  const changePosition = async () => {
    if (bottom > 0){
      setBottom(bottom-50)
    }
  }

  useEventListener('keydown', async (event: any) => {
    if (event.key === 'ArrowDown'){
      await changePosition()
    }
  })

  return (
    <ButtonIconArrowDown onClick={() => changePosition()}>
      <FiArrowDown></FiArrowDown>
    </ButtonIconArrowDown>
  );
}

