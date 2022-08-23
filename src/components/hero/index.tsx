import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { HeroMoveContext } from '../../context/moveHeroContext';
import {HeroStyled} from './styles';
import useEventListener from '@use-it/event-listener';

export const Hero = () => {
  const [hero, setHero] = useState(0);
  const {bottom, left, setBottom} = useContext(HeroMoveContext);
  const heroSizeWidth = 100
  const heroSizeHeight = 100

  useEffect(() => {
    setTimeout(() => {
      hero === 19? setHero(0) : setHero(hero + 1)
    }, 100)
  }, [hero])

  
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
      await changePosition()
    }
  })

  const changePosition = () => {
    setBottom(bottom+50)
  }

  return (
    <><HeroStyled
      bottom={bottom + heroSizeHeight}
      left={left + heroSizeWidth}
      width={heroSizeWidth}
      height={heroSizeHeight}
      src={`./assets/hero/Chara - BlueIdle000${hero}.png`}
      />
    </>
  );
}

