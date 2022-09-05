import React, { useContext } from 'react';
import{ButtonIconArrowLeft} from './styles';
import { FiArrowLeft } from "react-icons/fi"
import useEventListener from '@use-it/event-listener';
import { GravityContext } from '../../../../../context/ResumeGameContext/gravityContext';
import { KeyboardContext } from '../../../../../context/ResumeGameContext/keyboardContext';

export const ArrowLeft = () => {
  const { setIsArrowLeftPress } = useContext(KeyboardContext)

  useEventListener('mousedown', (event: any) => {
    event.path.forEach((e: any) => {
      if (e.name === 'ArrowLeftIcon'){
        setIsArrowLeftPress(true)
      }
    })
  })

  useEventListener('mouseup', () => {
    setIsArrowLeftPress(false)
  })
  return (
    <ButtonIconArrowLeft name='ArrowLeftIcon'>
      <FiArrowLeft></FiArrowLeft>
    </ButtonIconArrowLeft>
  );
}

