import React, { useContext } from 'react';
import{ButtonIconArrowUp} from './styles';
import { FiArrowUp } from "react-icons/fi"
import useEventListener from '@use-it/event-listener';
import { KeyboardContext } from '../../../../../context/keyboardContext';

export const ArrowUp = () => {
  const { setIsArrowUpPress } = useContext(KeyboardContext)

  useEventListener('mousedown', (event: any) => {
    event.path.forEach((e: any) => {
      if (e.name === 'ArrowUpIcon'){
        setIsArrowUpPress(true)
      }
    })
  })

  useEventListener('mouseup', () => {
    setIsArrowUpPress(false)
  })
  return (
    <ButtonIconArrowUp name='ArrowUpIcon'>
      <FiArrowUp/>
    </ButtonIconArrowUp>
  );
}

