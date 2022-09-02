/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../../context/ResumeGameContext/gameContext";
import { HeroMoveContext } from "../../../context/ResumeGameContext/heroPropsContext";
import { HERO_SIZE_WIDTH_HIT_BOX, POSITION_Y_TO_DIE, START_FLOOR, START_MAX_JUMP } from "../../../settings/constants";
import { Platform } from "../../atoms/platform";

interface Platform {
  x: number,
  y: number,
  width: number,
  height: number
}

export const Platforms = () => {

  const { POSITION_Y, POSITION_X, IN_PLATFORM, FLOOR, setIN_PLATFORM, setFLOOR, setMAX_JUMP} = useContext(HeroMoveContext)
  const { setEND_GAME } = useContext(GameContext)

  const FIRST_PLATFORM_X_Y: Platform = {x: 0, y:0, width: 150, height: 30}
  const SECOND_PLATFORM_X_Y: Platform  = {x: 200, y:0, width: 150, height: 30}
  const THIRD_PLATFORM_Y_X: Platform  = {x: 400, y:0, width: 150, height: 30}
  const FOURTH_PLATFORM_Y_X: Platform  = {x: 600, y:0, width: 150, height: 30}
  const FIFTH_PLATFORM_Y_X: Platform  = {x: 500, y:40, width: 150, height: 30}

  // DEATHS
  const DEATH_SPIKE_1: Platform  = {x: 10, y:30, width: 80, height: 30}
  // const WALL_RIGHT: Platform  = {x: 790, y:-80, width: 50, height: 600}
  // const WALL_TOP: Platform  = {x: 0, y:480, width: 500, height: 50}
  // const WALL_TOP_2: Platform  = {x: 400, y:480, width: 500, height: 50}
  
  // DECORATIVOS
  const WALL_LEFT: Platform  = {x: -45, y:-80, width: 50, height: 600}
  const WALL_RIGHT: Platform  = {x: 790, y:-80, width: 50, height: 600}
  const WALL_TOP: Platform  = {x: 0, y:480, width: 500, height: 50}
  const WALL_TOP_2: Platform  = {x: 400, y:480, width: 500, height: 50}

  const platforms: Platform[] = [
    FIRST_PLATFORM_X_Y,
    SECOND_PLATFORM_X_Y,
    THIRD_PLATFORM_Y_X,
    FOURTH_PLATFORM_Y_X,
    FIFTH_PLATFORM_Y_X,
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
          if (POSITION_Y === FLOOR) {
            setMAX_JUMP(platform.y + platform.height + START_MAX_JUMP)
            setIN_PLATFORM(true)
          }
          validatorPlatform.push(platform)
      }
    })
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
      <Platform
        bottom={FIFTH_PLATFORM_Y_X.y}
        left={FIFTH_PLATFORM_Y_X.x}
        width={FIFTH_PLATFORM_Y_X.width}
        height={FIFTH_PLATFORM_Y_X.height}
        img={'./assets/platforms/platform1.png'}
      />




      {/* DEATH */}
      <Platform
        bottom={DEATH_SPIKE_1.y}
        left={DEATH_SPIKE_1.x}
        width={DEATH_SPIKE_1.width}
        height={DEATH_SPIKE_1.height}
        img={'./assets/platforms/spike1.png'}
      />
      {/* DEATH */}



      {/* DECORATIVOS */}
      <Platform
        bottom={WALL_LEFT.y}
        left={WALL_LEFT.x}
        width={WALL_LEFT.width}
        height={WALL_LEFT.height}
        img={'./assets/platforms/wall1.png'}
      />
      <Platform
        bottom={WALL_RIGHT.y}
        left={WALL_RIGHT.x}
        width={WALL_RIGHT.width}
        height={WALL_RIGHT.height}
        img={'./assets/platforms/wall1.png'}
      />
      <Platform
        rotate={180}
        bottom={WALL_TOP.y}
        left={WALL_TOP.x}
        width={WALL_TOP.width}
        height={WALL_TOP.height}
        img={'./assets/platforms/platform3.png'}
      />
      <Platform
        rotate={180}
        bottom={WALL_TOP_2.y}
        left={WALL_TOP_2.x}
        width={WALL_TOP_2.width}
        height={WALL_TOP_2.height}
        img={'./assets/platforms/platform3.png'}
      />
      {/* DECORATIVOS */}
    </>
  );
}

