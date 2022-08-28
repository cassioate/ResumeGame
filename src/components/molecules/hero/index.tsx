import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { HeroMoveContext } from '../../../context/heroPropsContext';
import {HeroStyled} from './styles';

export const Hero = () => {
  const [hero, setHero] = useState(0);
  const {HERO_WIDTH, HERO_HEIGHT, POSITION_Y, POSITION_X, HERO_DIRECTION} = useContext(HeroMoveContext);

  useEffect(() => {
    setTimeout(() => {
      hero === 19? setHero(0) : setHero(hero + 1)
    }, 100)
  }, [hero])

  return (
    <><HeroStyled
      bottom={POSITION_Y}
      left={POSITION_X}
      width={HERO_WIDTH}
      height={HERO_HEIGHT}
      direction={HERO_DIRECTION}
      src={`./assets/hero/Chara - BlueIdle000${hero}.png`}
      />
    </>
  );
}

