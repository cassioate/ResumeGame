/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { GameContext } from "../../../context/ResumeGameContext/gameContext";
import { GravityContext } from "../../../context/ResumeGameContext/gravityContext";
import { HERO_SIZE_WIDTH_HIT_BOX, POSITION_Y_TO_DIE, START_FLOOR, START_MAX_JUMP } from "../../../settings/constants";
import { Platform } from "../../atoms/platform";

interface PlatformI {
  x: number,
  y: number,
  width: number,
  height: number
}

export const Platforms = () => {

  const { POSITION_Y, POSITION_X, inPlatform, floor, maxJump, gravity_on} = useContext(GravityContext)
  const { setEND_GAME } = useContext(GameContext)

  const FIRST_PLATFORM_X_Y: PlatformI = {x: 0, y:30, width: 150, height: 45}
  const SECOND_PLATFORM_X_Y: PlatformI  = {x: 200, y:260, width: 250, height: 300}
  const THIRD_PLATFORM_Y_X: PlatformI  = {x: 200, y:30, width: 300, height: 45}
  
  const FOURTH_PLATFORM_Y_X: PlatformI  = {x: 720, y:420, width: 100, height: 70}
  const FIFTH_PLATFORM_Y_X: PlatformI  = {x: 500, y:30, width: 350, height: 45}

  const SUPPORT_PLATFORM_1: PlatformI  = {x: 250, y:70, width: 35, height: 35}
  const SUPPORT_PLATFORM_2: PlatformI  = {x: 300, y:100, width: 35, height: 35}
  const SUPPORT_PLATFORM_3: PlatformI  = {x: 250, y:140, width: 35, height: 35}
  const SUPPORT_PLATFORM_4: PlatformI  = {x: 300, y:180, width: 35, height: 35}
  const SUPPORT_PLATFORM_5: PlatformI  = {x: 250, y:220, width: 35, height: 35}
  const SUPPORT_PLATFORM_6: PlatformI  = {x: 500, y:300, width: 35, height: 35}
  const SUPPORT_PLATFORM_7: PlatformI  = {x: 580, y:340, width: 35, height: 35}
  const SUPPORT_PLATFORM_8: PlatformI  = {x: 650, y:380, width: 35, height: 35}
  
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
    SUPPORT_PLATFORM_7,
    SUPPORT_PLATFORM_8
  ]
  
  const tempInPlatform: PlatformI[] = []
  useEffect(() => {
    platforms.forEach((platform) => {
      if (
        (POSITION_X + HERO_SIZE_WIDTH_HIT_BOX >= platform.x && 
          POSITION_X <= platform.x + platform.width &&
          POSITION_Y >= platform.y && POSITION_Y <= platform.y + START_MAX_JUMP) 
          // Regra que define que a posição do herói deve ser proxima da plataforma 
          // ou então ele não contabiliza essa plataforma para utilizar a regra de trocar o chão e o salto
          && platform.y >= POSITION_Y - 5 && platform.y <= POSITION_Y + 5
        ) {
          tempInPlatform.push(platform)

          if (gravity_on.current) {
            floor.current = platform.y
            maxJump.current = floor.current + START_MAX_JUMP
          } else if (POSITION_Y + 5 >= START_FLOOR && POSITION_Y - 5 <= START_FLOOR) {
            floor.current = START_FLOOR
            maxJump.current = floor.current + START_MAX_JUMP
          }
      }
    })

    if (tempInPlatform.length > 0){
      inPlatform.current = true
    } else if (tempInPlatform.length === 0 && (POSITION_Y >= maxJump.current || POSITION_Y <= floor.current)){
      inPlatform.current = false
    } 
  }, [POSITION_X, POSITION_Y])

  useEffect(() => {
    if (POSITION_Y <= POSITION_Y_TO_DIE) {
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
        zIndex={3}
        bottom={THIRD_PLATFORM_Y_X.y}
        left={THIRD_PLATFORM_Y_X.x}
        width={THIRD_PLATFORM_Y_X.width}
        height={THIRD_PLATFORM_Y_X.height}
        img={'./assets/platforms/platform3.png'}
      />

      <Platform
        zIndex={3}
        bottom={FIFTH_PLATFORM_Y_X.y}
        left={FIFTH_PLATFORM_Y_X.x}
        width={FIFTH_PLATFORM_Y_X.width}
        height={FIFTH_PLATFORM_Y_X.height}
        img={'./assets/platforms/platform3.png'}
      /> 

      <Platform
        zIndex={0}
        bottom={FOURTH_PLATFORM_Y_X.y}
        left={FOURTH_PLATFORM_Y_X.x}
        width={FOURTH_PLATFORM_Y_X.width}
        height={FOURTH_PLATFORM_Y_X.height}
        img={'./assets/platforms/littlePlatform.png'}
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
        left={SUPPORT_PLATFORM_6.x}
        width={SUPPORT_PLATFORM_6.width}
        height={SUPPORT_PLATFORM_6.height}
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

      <Platform
        zIndex={2}
        bottom={SUPPORT_PLATFORM_8.y}
        left={SUPPORT_PLATFORM_8.x}
        width={SUPPORT_PLATFORM_8.width}
        height={SUPPORT_PLATFORM_8.height}
        img={'./assets/platforms/platform5.png'}
      />
    </> 
  );
}

