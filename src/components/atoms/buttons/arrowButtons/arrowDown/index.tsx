import React, { useContext } from 'react';
import{ButtonIconArrowDown} from './styles';
import { FiArrowDown } from "react-icons/fi"
import useEventListener from '@use-it/event-listener';
import { KeyboardContext } from '../../../../../context/keyboardContext';
import { HERO_SIZE_HEIGHT } from '../../../../../settings/constants';
import { HeroMoveContext } from '../../../../../context/heroPropsContext';

export const ArrowDown = () => {
  const { setIsArrowDownPress } = useContext(KeyboardContext)
  const { setHERO_HEIGHT } = useContext(HeroMoveContext)

  useEventListener('mousedown', (event: any) => {
    event.path.forEach((e: any) => {
      if (e.name === 'ArrowDownIcon'){
        setIsArrowDownPress(true)
      }
    })
  })

  useEventListener('mouseup', () => {
    setHERO_HEIGHT(HERO_SIZE_HEIGHT)
    setIsArrowDownPress(false)
  })
  return (
    <ButtonIconArrowDown name='ArrowDownIcon'>
      <FiArrowDown></FiArrowDown>
    </ButtonIconArrowDown>
  );
}

