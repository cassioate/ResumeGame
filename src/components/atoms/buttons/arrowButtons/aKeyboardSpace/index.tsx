import useEventListener from '@use-it/event-listener';
import React, { useContext } from 'react';
import { MdSpaceBar } from "react-icons/md"
import { KeyboardContext } from '../../../../../context/keyboardContext';
import { ButtonIconSpace } from './styles';

export const SpaceKeyboard = () => { 
    const { setIsArrowSpacePress } = useContext(KeyboardContext)
  
    useEventListener('mousedown', (event: any) => {
      event.path.forEach((e: any) => {
        if (e.name === 'ArrowSpaceIcon'){
          setIsArrowSpacePress(true)
        }
      })
    })
  
    useEventListener('mouseup', ({key}: any) => {
      setIsArrowSpacePress(false)
    })
    
  return (
    <ButtonIconSpace name='ArrowSpaceIcon'>
      <MdSpaceBar/>
    </ButtonIconSpace>
  );
}

