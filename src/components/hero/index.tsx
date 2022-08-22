import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { HeroMoveContext } from '../../context/moveHeroContext';
import {HeroStyled} from './styles';

export const Hero = () => {
  const [hero, setHero] = useState(0);
  const {bottom, left} = useContext(HeroMoveContext);
  const heroSizeWidth = 100
  const heroSizeHeight = 100

  useEffect(() => {
    setTimeout(() => {
      hero === 19? setHero(0) : setHero(hero + 1)
    }, 100)
  }, [hero])

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

