import React, { useContext, useEffect, useRef, useState } from 'react';
import{ButtonIconArrowRight} from './styles';
import { FiArrowRight } from "react-icons/fi"
import useEventListener from '@use-it/event-listener';
import { KeyboardContext } from '../../../../../context/keyboardContext';
import { HeroMoveContext } from '../../../../../context/heroPropsContext';
import { HERO_SIZE_WIDTH } from '../../../../../settings/constants';

export const ArrowRight = () => {
  const { setIsArrowRightPress } = useContext(KeyboardContext)
  const { setVELOCITY_OF_MOVE, setHERO_WIDTH } = useContext(HeroMoveContext)

  useEventListener('mousedown', (event: any) => {
    event.path.forEach((e: any) => {
      if (e.name === 'ArrowRightIcon'){
        setIsArrowRightPress(true)
      }
    })
  })

  useEventListener('mouseup', ({key}: any) => {
    setVELOCITY_OF_MOVE(0)
    setHERO_WIDTH(HERO_SIZE_WIDTH)
    setIsArrowRightPress(false)
  })
  
  return (
    <ButtonIconArrowRight name='ArrowRightIcon'>
      <FiArrowRight name='ArrowRightIcon'></FiArrowRight>
    </ButtonIconArrowRight>
  );
}

