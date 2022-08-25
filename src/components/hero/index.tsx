import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { HeroMoveContext } from '../../context/moveHeroContext';
import {HeroStyled} from './styles';

export const Hero = () => {
  const [hero, setHero] = useState(0);
  const {width, height, bottom, left, directionHero} = useContext(HeroMoveContext);

  useEffect(() => {
    setTimeout(() => {
      hero === 19? setHero(0) : setHero(hero + 1)
    }, 100)
  }, [hero])

  return (
    <><HeroStyled
      bottom={bottom}
      left={left}
      width={width}
      height={height}
      direction={directionHero}
      src={`./assets/hero/Chara - BlueIdle000${hero}.png`}
      />
    </>
  );
}

