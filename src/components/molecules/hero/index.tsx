import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { HeroMoveContext } from '../../../context/heroPropsContext';
import {HeroStyled, HeroHitBox} from './styles';

export const Hero = () => {
  const [hero, setHero] = useState(0);
  const {HERO_WIDTH, HERO_HEIGHT, POSITION_Y, POSITION_X, HERO_DIRECTION} = useContext(HeroMoveContext);

  useEffect(() => {
    setTimeout(() => {
      hero === 19? setHero(0) : setHero(hero + 1)
    }, 100)
  }, [hero])

  return (
    <HeroHitBox
      bottom={POSITION_Y}
      left={POSITION_X}
      width={25}
      height={55}
      direction={HERO_DIRECTION}
    >
      <HeroStyled
        width={100}
        height={100}
        src={`./assets/hero/Chara - BlueIdle000${hero}.png`}
      />
    </HeroHitBox>
  );
}

