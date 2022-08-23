import React, { useContext } from 'react';
import{ButtonIconArrowRight} from './styles';
import { FiArrowRight } from "react-icons/fi"
import { HeroMoveContext } from '../../../context/moveHeroContext';
import useEventListener from '@use-it/event-listener';

export const ArrowRight = () => {
  const {setLeft, setDirectionHero, left} = useContext(HeroMoveContext);
  const widthSize = window.screen.width

  const changePosition = async () => {
    console.log(left)
    console.log(widthSize)
    if (left < widthSize) {
      setLeft(left+15)
      setDirectionHero('RIGHT')
    }
  }

  useEventListener('keydown', async (event: any) => {
    if (event.key === 'ArrowRight'){
      await changePosition()
    }
  })

  return (
    <ButtonIconArrowRight onClick={() => changePosition()}>
      <FiArrowRight></FiArrowRight>
    </ButtonIconArrowRight>
  );
}

