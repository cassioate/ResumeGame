import { useContext, useEffect, useState } from 'react';
import React from 'react';
import {HeroStyled, HeroHitBox} from './styles';
import { HERO_IMG_JUMP, HERO_IMG_STOPPED, HERO_IMG_WALK, HERO_SIZE_HEIGHT_HIT_BOX, HERO_SIZE_HEIGHT_IMG, HERO_SIZE_WIDTH_HIT_BOX, HERO_SIZE_WIDTH_IMG } from '../../../settings/constants';
import { GravityContext } from '../../../context/ResumeGameContext/gravityContext';
import { KeyboardContext } from '../../../context/ResumeGameContext/keyboardContext';

export const Hero = () => {
  const {isArrowRightPress, isArrowLeftPress, isArrowSpacePress, isArrowUpPress, isArrowDownPress} = useContext(KeyboardContext)
  const { POSITION_Y, POSITION_X, floor} = useContext(GravityContext);

  const [HERO_IMG_SRC_ACTIVE, setHERO_IMG_SRC_ACTIVE] = useState(HERO_IMG_STOPPED)
  const [HERO_DIRECTION, setHERO_DIRECTION] = useState('RIGHT')
  const [HERO_SIZE, setHERO_SIZE] = useState(HERO_SIZE_HEIGHT_IMG)
  const [HERO_IMG, setHERO_IMG] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      HERO_IMG >= 19? setHERO_IMG(0) : setHERO_IMG(HERO_IMG + 1)
    }, 100)
  }, [HERO_IMG])

  useEffect(() => {
    if (isArrowDownPress){
      setHERO_SIZE(HERO_SIZE_HEIGHT_IMG*0.75)
    } else if (!isArrowDownPress){
      setHERO_SIZE(HERO_SIZE_HEIGHT_IMG)
    }
    if (isArrowRightPress) {
      setHERO_DIRECTION("RIGHT")
      setHERO_IMG_SRC_ACTIVE(HERO_IMG_WALK)
    } else if (isArrowLeftPress) {
      setHERO_DIRECTION("LEFT")
      setHERO_IMG_SRC_ACTIVE(HERO_IMG_WALK)
    } else if (isArrowUpPress){
      setHERO_IMG_SRC_ACTIVE(HERO_IMG_JUMP)
    } else if (floor.current === POSITION_Y) {
      setHERO_IMG_SRC_ACTIVE(HERO_IMG_STOPPED)
    }
  }, [POSITION_Y, floor, isArrowLeftPress, isArrowRightPress, isArrowSpacePress, isArrowUpPress, isArrowDownPress])

  return (
    <HeroHitBox
      id='HeroHitBox'
      bottom={POSITION_Y}
      left={POSITION_X}
      width={HERO_SIZE_WIDTH_HIT_BOX}
      height={HERO_SIZE === HERO_SIZE_HEIGHT_IMG ? HERO_SIZE_HEIGHT_HIT_BOX : HERO_SIZE_HEIGHT_HIT_BOX-15}
      direction={HERO_DIRECTION}
    >
      <HeroStyled
        id='HeroImg'
        width={HERO_SIZE_WIDTH_IMG}
        height={HERO_SIZE}
        src={`${HERO_IMG_SRC_ACTIVE+HERO_IMG}.png`}
      />
    </HeroHitBox>
  );
}

