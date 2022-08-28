import React, { useContext } from 'react';
import{ButtonIconArrowLeft} from './styles';
import { FiArrowLeft } from "react-icons/fi"
import useEventListener from '@use-it/event-listener';
import { KeyboardContext } from '../../../../../context/keyboardContext';
import { HeroMoveContext } from '../../../../../context/heroPropsContext';
import { HERO_SIZE_WIDTH_IMG } from '../../../../../settings/constants';

export const ArrowLeft = () => {
  const { setIsArrowLeftPress } = useContext(KeyboardContext)
  const { setVELOCITY_OF_MOVE, setHERO_WIDTH } = useContext(HeroMoveContext)

  useEventListener('mousedown', (event: any) => {
    event.path.forEach((e: any) => {
      if (e.name === 'ArrowLeftIcon'){
        setIsArrowLeftPress(true)
      }
    })
  })

  useEventListener('mouseup', () => {
    setVELOCITY_OF_MOVE(0)
    setHERO_WIDTH(HERO_SIZE_WIDTH_IMG)
    setIsArrowLeftPress(false)
  })
  return (
    <ButtonIconArrowLeft name='ArrowLeftIcon'>
      <FiArrowLeft></FiArrowLeft>
    </ButtonIconArrowLeft>
  );
}

