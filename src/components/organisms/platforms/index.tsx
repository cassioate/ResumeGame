/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../../context/ResumeGameContext/gameContext";
import { HeroMoveContext } from "../../../context/ResumeGameContext/heroPropsContext";
import { HERO_SIZE_HEIGHT_HIT_BOX, HERO_SIZE_WIDTH_HIT_BOX, POSITION_Y_TO_DIE, START_FLOOR, START_MAX_JUMP } from "../../../settings/constants";
import { Platform } from "../../atoms/platform";

interface PlatformI {
  x: number,
  y: number,
  width: number,
  height: number
}

export const Platforms = () => {

  const { POSITION_Y, POSITION_X, IN_PLATFORM, FLOOR, setIN_PLATFORM, setFLOOR, setMAX_JUMP} = useContext(HeroMoveContext)
  const { setEND_GAME } = useContext(GameContext)

  const FIRST_PLATFORM_X_Y: PlatformI = {x: 0, y:0, width: 150, height: 30}
  const SECOND_PLATFORM_X_Y: PlatformI  = {x: 150, y:30, width: 250, height: 250}
  const THIRD_PLATFORM_Y_X: PlatformI  = {x: 200, y:0, width: 350, height: 30}
  const FOURTH_PLATFORM_Y_X: PlatformI  = {x: 700, y:10, width: 100, height: 300}
  const FIFTH_PLATFORM_Y_X: PlatformI  = {x: 550, y:-20, width: 350, height: 30}

  const SUPPORT_PLATFORM_1: PlatformI  = {x: 250, y:50, width: 30, height: 25}
  const SUPPORT_PLATFORM_2: PlatformI  = {x: 300, y:100, width: 30, height: 25}
  const SUPPORT_PLATFORM_3: PlatformI  = {x: 250, y:150, width: 30, height: 25}
  const SUPPORT_PLATFORM_4: PlatformI  = {x: 300, y:200, width: 30, height: 25}
  const SUPPORT_PLATFORM_5: PlatformI  = {x: 350, y:400, width: 30, height: 25}
  const SUPPORT_PLATFORM_6: PlatformI  = {x: 350, y:400, width: 30, height: 25}
  const SUPPORT_PLATFORM_7: PlatformI  = {x: 350, y:400, width: 30, height: 25}
  
  const platforms: PlatformI[] = [
    FIRST_PLATFORM_X_Y,
    SECOND_PLATFORM_X_Y,
    THIRD_PLATFORM_Y_X,
    FOURTH_PLATFORM_Y_X,
    FIFTH_PLATFORM_Y_X,

    SUPPORT_PLATFORM_1,
    SUPPORT_PLATFORM_2,
    SUPPORT_PLATFORM_3,
    SUPPORT_PLATFORM_4,
    SUPPORT_PLATFORM_5,
    SUPPORT_PLATFORM_6,
    SUPPORT_PLATFORM_7
  ]
  
  const validatorPlatform: PlatformI[] = []
  useEffect(() => {
    platforms.forEach((platform) => {
      if (
        POSITION_X + HERO_SIZE_WIDTH_HIT_BOX >= platform.x && 
        POSITION_X <= platform.x + platform.width &&
        POSITION_Y >= platform.y + platform.height
        ) {
          validatorPlatform.push(platform)
      }
    })

    // Tem que ajeitar essa logica
    // setFLOOR(platform.y + platform.height)
    // if (POSITION_Y === FLOOR) {
    //   setMAX_JUMP(platform.y + platform.height + START_MAX_JUMP)
    //   setIN_PLATFORM(true)
    // }
    console.log(validatorPlatform.length, ' QUANTOS')
    if (validatorPlatform.length === 0) {
      if (POSITION_Y === FLOOR) {
        setIN_PLATFORM(false)
        setFLOOR(START_FLOOR)
        setMAX_JUMP(START_MAX_JUMP)
      }
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
        zIndex={2}
        bottom={FIRST_PLATFORM_X_Y.y}
        left={FIRST_PLATFORM_X_Y.x}
        width={FIRST_PLATFORM_X_Y.width}
        height={FIRST_PLATFORM_X_Y.height}
        img={'./assets/platforms/platform1.png'}
      />
      <Platform
        zIndex={1}
        bottom={SECOND_PLATFORM_X_Y.y}
        left={SECOND_PLATFORM_X_Y.x}
        width={SECOND_PLATFORM_X_Y.width}
        height={SECOND_PLATFORM_X_Y.height}
        img={'./assets/platforms/platform2.png'}
      />
      <Platform
        zIndex={2}
        bottom={THIRD_PLATFORM_Y_X.y}
        left={THIRD_PLATFORM_Y_X.x}
        width={THIRD_PLATFORM_Y_X.width}
        height={THIRD_PLATFORM_Y_X.height}
        img={'./assets/platforms/platform3.png'}
      />
      <Platform
        zIndex={2}
        bottom={FOURTH_PLATFORM_Y_X.y}
        left={FOURTH_PLATFORM_Y_X.x}
        width={FOURTH_PLATFORM_Y_X.width}
        height={FOURTH_PLATFORM_Y_X.height}
        img={'./assets/platforms/platform4.png'}
      />
      <Platform
        zIndex={2}
        bottom={FIFTH_PLATFORM_Y_X.y}
        left={FIFTH_PLATFORM_Y_X.x}
        width={FIFTH_PLATFORM_Y_X.width}
        height={FIFTH_PLATFORM_Y_X.height}
        img={'./assets/platforms/platform3.png'}
      />



      <Platform
        zIndex={2}
        bottom={SUPPORT_PLATFORM_1.y}
        left={SUPPORT_PLATFORM_1.x}
        width={SUPPORT_PLATFORM_1.width}
        height={SUPPORT_PLATFORM_1.height}
        img={'./assets/platforms/platform5.png'}
      />
      <Platform
        zIndex={2}
        bottom={SUPPORT_PLATFORM_2.y}
        left={SUPPORT_PLATFORM_2.x}
        width={SUPPORT_PLATFORM_2.width}
        height={SUPPORT_PLATFORM_2.height}
        img={'./assets/platforms/platform5.png'}
      />
      <Platform
        zIndex={2}
        bottom={SUPPORT_PLATFORM_3.y}
        left={SUPPORT_PLATFORM_3.x}
        width={SUPPORT_PLATFORM_3.width}
        height={SUPPORT_PLATFORM_3.height}
        img={'./assets/platforms/platform5.png'}
      />
      <Platform
        zIndex={2}
        bottom={SUPPORT_PLATFORM_4.y}
        left={SUPPORT_PLATFORM_4.x}
        width={SUPPORT_PLATFORM_4.width}
        height={SUPPORT_PLATFORM_4.height}
        img={'./assets/platforms/platform5.png'}
      />
      <Platform
        zIndex={2}
        bottom={SUPPORT_PLATFORM_5.y}
        left={SUPPORT_PLATFORM_5.x}
        width={SUPPORT_PLATFORM_5.width}
        height={SUPPORT_PLATFORM_5.height}
        img={'./assets/platforms/platform5.png'}
      />
      <Platform
        zIndex={2}
        bottom={SUPPORT_PLATFORM_6.y}
        left={SUPPORT_PLATFORM_4.x}
        width={SUPPORT_PLATFORM_4.width}
        height={SUPPORT_PLATFORM_4.height}
        img={'./assets/platforms/platform5.png'}
      />
      <Platform
        zIndex={2}
        bottom={SUPPORT_PLATFORM_7.y}
        left={SUPPORT_PLATFORM_7.x}
        width={SUPPORT_PLATFORM_7.width}
        height={SUPPORT_PLATFORM_7.height}
        img={'./assets/platforms/platform5.png'}
      />
    </> 
  );
}

