import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../../context/gameContext";
import { HeroMoveContext } from "../../../context/heroPropsContext";
import { KeyboardContext } from "../../../context/keyboardContext";
import { HERO_SIZE_WIDTH_HIT_BOX, POSITION_Y_TO_DIE, START_FLOOR, START_POSITION } from "../../../settings/constants";
import { Platform } from "../../atoms/platform";

export const Platforms = () => {

  const { FLOOR, POSITION_Y, POSITION_X, OUT_OF_PLATFORM, setOUT_OF_PLATFORM} = useContext(HeroMoveContext)
  const {  setEND_GAME } = useContext(GameContext)
  const FIRST_HOLE = [150, 200-HERO_SIZE_WIDTH_HIT_BOX];
  // const deadPositions  = useRef([
  //   POSITION_PLATFORM_1,
  //   POSITION_PLATFORM_2,
  //   POSITION_PLATFORM_3,
  //   POSITION_PLATFORM_4
  // ])

  useEffect(() => {
    if (POSITION_X > FIRST_HOLE[0] && POSITION_X < FIRST_HOLE[1]){
      setOUT_OF_PLATFORM(true)
    // } else if (POSITION_X >= FIRST_HOLE[1] || POSITION_X <= FIRST_HOLE[0]) {
    //   console.log("AQUI")
    } else {
      setOUT_OF_PLATFORM(false)
    }
  }, [POSITION_Y, POSITION_X, OUT_OF_PLATFORM])

  useEffect(() => {
    if (OUT_OF_PLATFORM && POSITION_Y <= POSITION_Y_TO_DIE) {
      setEND_GAME(true)
    }
  }, [POSITION_Y])

  return (
    <>
      <Platform
        bottom={0}
        width={150}
        height={30}
        left={0}
        img={'./assets/platforms/platform1.png'}
      />
      <Platform
        bottom={0}
        width={150}
        height={30}
        left={200}
        img={'./assets/platforms/platform1.png'}
      />
    </>
  );
}

