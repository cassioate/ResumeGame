/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../../context/gameContext";
import { HeroMoveContext } from "../../../context/heroPropsContext";
import { KeyboardContext } from "../../../context/keyboardContext";
import { HERO_SIZE_WIDTH_HIT_BOX, POSITION_Y_TO_DIE, START_FLOOR, START_MAX_JUMP, START_POSITION } from "../../../settings/constants";
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
  // const THIRD_PLATFORM_Y_X = [5, 150]
  // const FOURTH_PLATFORM_Y_X = [5, 150]

  const platforms: Platform[] = [
    FIRST_PLATFORM_X_Y,
    SECOND_PLATFORM_X_Y
  ]
  
  useEffect(() => {
    let validatorPlatform: Platform[] = []
    platforms.forEach((platform) => {
      if (
        POSITION_X + HERO_SIZE_WIDTH_HIT_BOX >= platform.x && 
        POSITION_X <= platform.x + platform.width &&
        POSITION_Y <= platform.y + platform.height 
        ) {
        // console.log(platform.y+platform.height)
        console.log(platform.y + platform.height, POSITION_Y, 'Y')
        console.log(platform.x + platform.width, POSITION_X, 'X')
        validatorPlatform.push(platform)
      }
    })
    if (validatorPlatform.length > 0){
      setMAX_JUMP(validatorPlatform[0].y + START_MAX_JUMP)
      setIN_PLATFORM(true)
      setFLOOR(validatorPlatform[0].y + validatorPlatform[0].height)
    } else {
      setIN_PLATFORM(false)
      setFLOOR(START_FLOOR)
    }
    console.log(IN_PLATFORM)
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
    </>
  );
}

