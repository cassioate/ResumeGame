import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { HeroMoveContext } from '../../../context/heroPropsContext';
import {HeroStyled, HeroHitBox} from './styles';
import { HERO_IMG_JUMP, HERO_IMG_STOPPED, HERO_IMG_WALK, HERO_SIZE_HEIGHT_IMG, HERO_SIZE_WIDTH_IMG } from '../../../settings/constants';
import { KeyboardContext } from '../../../context/keyboardContext';
import { GameContext } from '../../../context/gameContext';

export const Hero = () => {
  const [HERO_IMG, setHERO_IMG] = useState(0);
  const {POSITION_Y, POSITION_X, HERO_SIZE, FLOOR} = useContext(HeroMoveContext);
  const {END_GAME} = useContext(GameContext);
  const [HERO_IMG_SRC_ACTIVED, setHERO_IMG_SRC_ACTIVED] = useState(HERO_IMG_STOPPED)
  const {isArrowRightPress, isArrowLeftPress, isArrowSpacePress, isArrowUpPress} = useContext(KeyboardContext)
  const [HERO_DIRECTION, setHERO_DIRECTION] = useState('RIGHT')

  useEffect(() => {
      setTimeout(() => {
        HERO_IMG >= 19? setHERO_IMG(0) : setHERO_IMG(HERO_IMG + 1)
      }, 100)
  }, [HERO_IMG])

  useEffect(() => {
    if (!END_GAME) {
      if (isArrowRightPress) {
        setHERO_DIRECTION("RIGHT")
        setHERO_IMG_SRC_ACTIVED(HERO_IMG_WALK)
      } else if (isArrowLeftPress) {
        setHERO_DIRECTION("LEFT")
        setHERO_IMG_SRC_ACTIVED(HERO_IMG_WALK)
      } else if (isArrowUpPress){
        setHERO_IMG_SRC_ACTIVED(HERO_IMG_JUMP)
      } else if (FLOOR === POSITION_Y) {
        setHERO_IMG_SRC_ACTIVED(HERO_IMG_STOPPED)
      }
    }
  }, [POSITION_Y, isArrowLeftPress, isArrowRightPress, isArrowSpacePress, isArrowUpPress])

  return (
    <HeroHitBox
      id='HeroHitBox'
      bottom={POSITION_Y}
      left={POSITION_X}
      width={25}
      height={HERO_SIZE === HERO_SIZE_HEIGHT_IMG ? 55 : 45}
      direction={HERO_DIRECTION}
    >
      <HeroStyled
        id='HeroImg'
        width={HERO_SIZE_WIDTH_IMG}
        height={HERO_SIZE}
        src={`${HERO_IMG_SRC_ACTIVED+HERO_IMG}.png`}
      />
    </HeroHitBox>
  );
}

