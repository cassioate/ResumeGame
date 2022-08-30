import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../../context/gameContext";
import { HeroMoveContext } from "../../../context/heroPropsContext";
import { KeyboardContext } from "../../../context/keyboardContext";
import { POSITION_Y_TO_DIE, START_FLOOR, START_POSITION } from "../../../settings/constants";
import { Platform } from "../../atoms/platform";

export const Platforms = () => {

  const { FLOOR, POSITION_Y, POSITION_X, OUT_OF_PLATFORM, setOUT_OF_PLATFORM} = useContext(HeroMoveContext)
  const {  setEND_GAME } = useContext(GameContext)
  const deadPositions  = useRef([0.5, 19])

  useEffect(() => {
    if (deadPositions.current.includes(POSITION_X)){
      setOUT_OF_PLATFORM(true)
    }
    if (OUT_OF_PLATFORM && POSITION_Y <= POSITION_Y_TO_DIE) {
      setEND_GAME(true)
    }
  }, [POSITION_Y, POSITION_X, FLOOR])


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
        left={25}
        img={'./assets/platforms/platform1.png'}
      />
    </>
  );
}

