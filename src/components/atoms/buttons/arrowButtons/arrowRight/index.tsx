import React, { useContext } from 'react';
import{ButtonIconArrowRight} from './styles';
import { FiArrowRight } from "react-icons/fi"
import useEventListener from '@use-it/event-listener';
import { KeyboardContext } from '../../../../../context/keyboardContext';
import { HeroMoveContext } from '../../../../../context/heroPropsContext';

export const ArrowRight = () => {
  const { setIsArrowRightPress } = useContext(KeyboardContext)
  const { setVELOCITY_OF_MOVE } = useContext(HeroMoveContext)

  useEventListener('mousedown', (event: any) => {
    event.path.forEach((e: any) => {
      if (e.name === 'ArrowRightIcon'){
        setIsArrowRightPress(true)
      }
    })
  })

  useEventListener('mouseup', () => {
    setVELOCITY_OF_MOVE(0)
    setIsArrowRightPress(false)
  })
  
  return (
    <ButtonIconArrowRight name='ArrowRightIcon'>
      <FiArrowRight name='ArrowRightIcon'></FiArrowRight>
    </ButtonIconArrowRight>
  );
}

