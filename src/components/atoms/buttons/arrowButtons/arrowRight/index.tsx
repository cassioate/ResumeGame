import React, { useContext } from 'react';
import{ButtonIconArrowRight} from './styles';
import { FiArrowRight } from "react-icons/fi"
import useEventListener from '@use-it/event-listener';
import { GravityContext } from '../../../../../context/ResumeGameContext/gravityContext';
import { KeyboardContext } from '../../../../../context/ResumeGameContext/keyboardContext';

export const ArrowRight = () => {
  const { setIsArrowRightPress } = useContext(KeyboardContext)

  useEventListener('mousedown', (event: any) => {
    event.path.forEach((e: any) => {
      if (e.name === 'ArrowRightIcon'){
        setIsArrowRightPress(true)
      }
    })
  })

  useEventListener('mouseup', () => {
    setIsArrowRightPress(false)
  })
  
  return (
    <ButtonIconArrowRight name='ArrowRightIcon'>
      <FiArrowRight name='ArrowRightIcon'></FiArrowRight>
    </ButtonIconArrowRight>
  );
}

