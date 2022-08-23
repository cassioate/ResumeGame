import React, { useContext } from 'react';
import{ButtonIconArrowLeft} from './styles';
import { FiArrowLeft } from "react-icons/fi"
import { HeroMoveContext } from '../../../context/moveHeroContext';
import useEventListener from '@use-it/event-listener';

export const ArrowLeft = () => {
  const {left, setLeft, setDirectionHero} = useContext(HeroMoveContext);

  const changePosition = async () => {
    if (left > 0){
      setLeft(left-15)
      setDirectionHero('LEFT')
    }
  }

  useEventListener('keydown', async (event: any) => {
    if (event.key === 'ArrowLeft'){
      await changePosition()
    }
  })

  return (
    <ButtonIconArrowLeft onClick={() => changePosition()}>
      <FiArrowLeft></FiArrowLeft>
    </ButtonIconArrowLeft>
  );
}

