import React, { useContext } from 'react';
import{ButtonIconArrowUp} from './styles';
import { FiArrowUp } from "react-icons/fi"
import { HeroMoveContext } from '../../../context/moveHeroContext';
import useEventListener from '@use-it/event-listener';

export const ArrowUp = () => {
  const {setBottom, bottom} = useContext(HeroMoveContext);

  const changePosition = () => {
    setBottom(bottom+150)
  }

  // Usando addEventListener, eu necessito inserir ele em um useEffect, mas ele bloqueia meu pulo em apenas 1x
  // useEffect(() => {
  //   document.addEventListener('keydown', (event) => {
  //     if (event.key === 'ArrowUp'){
  //       changePosition()
  //     }
  //     console.log("EVENTLISTENER")
  //   })
  // }, [])

  useEventListener('keydown', async (event: any) => {
    if (event.key === 'ArrowUp'){
      changePosition()
    }
  })

  return (
    <ButtonIconArrowUp onClick={() => changePosition()}>
      <FiArrowUp/>
    </ButtonIconArrowUp>
  );
}

