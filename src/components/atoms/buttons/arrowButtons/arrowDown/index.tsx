import React, { useContext } from 'react';
import{ButtonIconArrowDown} from './styles';
import { FiArrowDown } from "react-icons/fi"
import useEventListener from '@use-it/event-listener';
import { KeyboardContext } from '../../../../../context/keyboardContext';

export const ArrowDown = () => {
  const { setIsArrowDownPress } = useContext(KeyboardContext)

  useEventListener('mousedown', (event: any) => {
    event.path.forEach((e: any) => {
      if (e.name === 'ArrowDownIcon'){
        setIsArrowDownPress(true)
      }
    })
  })

  useEventListener('mouseup', () => {
    setIsArrowDownPress(false)
  })
  return (
    <ButtonIconArrowDown name='ArrowDownIcon'>
      <FiArrowDown></FiArrowDown>
    </ButtonIconArrowDown>
  );
}

