import React, { useContext } from 'react';
import{ButtonIconArrowLeft} from './styles';
import { FiArrowLeft } from "react-icons/fi"
import useEventListener from '@use-it/event-listener';
import { HeroMoveContext } from '../../../../../context/ResumeGameContext/heroPropsContext';
import { KeyboardContext } from '../../../../../context/ResumeGameContext/keyboardContext';

export const ArrowLeft = () => {
  const { setIsArrowLeftPress } = useContext(KeyboardContext)
  const { setVELOCITY_OF_MOVE } = useContext(HeroMoveContext)

  useEventListener('mousedown', (event: any) => {
    event.path.forEach((e: any) => {
      if (e.name === 'ArrowLeftIcon'){
        setIsArrowLeftPress(true)
      }
    })
  })

  useEventListener('mouseup', () => {
    setVELOCITY_OF_MOVE(0)
    setIsArrowLeftPress(false)
  })
  return (
    <ButtonIconArrowLeft name='ArrowLeftIcon'>
      <FiArrowLeft></FiArrowLeft>
    </ButtonIconArrowLeft>
  );
}

