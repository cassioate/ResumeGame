/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../../context/gameContext";
import { HeroMoveContext } from "../../../context/heroPropsContext";
import { HERO_SIZE_WIDTH_HIT_BOX, POSITION_Y_TO_DIE, START_FLOOR, START_MAX_JUMP } from "../../../settings/constants";
import { Platform } from "../../atoms/platform";

interface Platform {
  x: number,
  y: number,
  width: number,
  height: number
}

export const Platforms = () => {

  const { POSITION_Y, POSITION_X, IN_PLATFORM, setIN_PLATFORM, setFLOOR, setMAX_JUMP} = useContext(HeroMoveContext)
  const { setEND_GAME } = useContext(GameContext)

  const FIRST_PLATFORM_X_Y: Platform = {x: 0, y:0, width: 150, height: 30}
  const SECOND_PLATFORM_X_Y: Platform  = {x: 200, y:50, width: 150, height: 30}
  const THIRD_PLATFORM_Y_X: Platform  = {x: 400, y:100, width: 150, height: 30}
  const FOURTH_PLATFORM_Y_X: Platform  = {x: 700, y:250, width: 150, height: 30}

  const platforms: Platform[] = [
    FIRST_PLATFORM_X_Y,
    SECOND_PLATFORM_X_Y,
    THIRD_PLATFORM_Y_X,
    FOURTH_PLATFORM_Y_X
  ]
  
  const validatorPlatform: Platform[] = []
  useEffect(() => {
    platforms.forEach((platform) => {
      if (
        POSITION_X + HERO_SIZE_WIDTH_HIT_BOX >= platform.x && 
        POSITION_X <= platform.x + platform.width &&
        POSITION_Y >= platform.y + platform.height 
        ) {
          setFLOOR(platform.y + platform.height)
          setMAX_JUMP(platform.y + platform.height + START_MAX_JUMP)
          setIN_PLATFORM(true)
          validatorPlatform.push(platform)
      }
    })
    if (validatorPlatform.length === 0) {
      setIN_PLATFORM(false)
      setFLOOR(START_FLOOR)
      setMAX_JUMP(START_MAX_JUMP)
    }
  }, [POSITION_X, POSITION_Y])

  useEffect(() => {
    if (!IN_PLATFORM && POSITION_Y <= POSITION_Y_TO_DIE) {
      setEND_GAME(true)
    }
  }, [POSITION_Y])

  return (
    <>
      <Platform
        bottom={FIRST_PLATFORM_X_Y.y}
        left={FIRST_PLATFORM_X_Y.x}
        width={FIRST_PLATFORM_X_Y.width}
        height={FIRST_PLATFORM_X_Y.height}
        img={'./assets/platforms/platform1.png'}
      />
      <Platform
        bottom={SECOND_PLATFORM_X_Y.y}
        left={SECOND_PLATFORM_X_Y.x}
        width={SECOND_PLATFORM_X_Y.width}
        height={SECOND_PLATFORM_X_Y.height}
        img={'./assets/platforms/platform1.png'}
      />
      <Platform
        bottom={THIRD_PLATFORM_Y_X.y}
        left={THIRD_PLATFORM_Y_X.x}
        width={THIRD_PLATFORM_Y_X.width}
        height={THIRD_PLATFORM_Y_X.height}
        img={'./assets/platforms/platform1.png'}
      />
      <Platform
        bottom={FOURTH_PLATFORM_Y_X.y}
        left={FOURTH_PLATFORM_Y_X.x}
        width={FOURTH_PLATFORM_Y_X.width}
        height={FOURTH_PLATFORM_Y_X.height}
        img={'./assets/platforms/platform1.png'}
      />
    </>
  );
}

